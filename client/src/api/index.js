import axios from "axios";

// const judge0_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
// const judge0_API_HOST = process.env.REACT_APP_RAPID_API_HOST;

export const checkStatus = async (token) => {
  const options = {
    method: "GET",
    url: "https://judge0-ce.p.rapidapi.com/submissions/" + token,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      "X-RapidAPI-Key": "0fbf327049mshd32a2a4f6b10f02p1931dfjsn867e8c2d1460",
    },
  };
  try {
    let response = await axios.request(options);
    let statusId = response.data.status?.id;

    if (statusId === 1 || statusId === 2) {
      //  processing --> so run again the same token after 2s
      setTimeout(() => {
        checkStatus(token);
      }, 2000);
    } else {
      const { data } = response;

      return { success: true, data };
    }
  } catch (err) {
    return { success: false, err };
  }
};

export const submitCode = async (formData) => {
  if (!formData) {
    return { success: false, error: "formData is undefined" };
  }
  console.log(formData);
  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "0fbf327049mshd32a2a4f6b10f02p1931dfjsn867e8c2d1460",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      // "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
    data: formData,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }

  // try {
  //   const { data } = await axios.request(options);
  //   console.log(data);
  //   return { success: true, data };
  // } catch (err) {
  //   return { success: false, err };
  // }
};
