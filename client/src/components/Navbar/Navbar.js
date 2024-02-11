// Navbar.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "../Dropdowns/LanguageDropdown";
import ThemeDropdown from "../Dropdowns/ThemeDropdown";
import { checkStatus, submitCode } from "../../api";

const Navbar = ({
  language,
  setLanguage,
  setTheme,
  theme,
  setOutput,
  setStatus,
  testInput,
  code,
}) => {
  const handleSubmit = async () => {
    setStatus("Running");
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(testInput),
    };

    try {
      const { data } = await submitCode(formData);
      console.log(data);
      if (data && data.token) {
        const { token } = data;
        const { data: output, success, err } = await checkStatus(token);

        if (success) {
          setOutput(output);
          setStatus("Finished");
        } else {
          console.log(err);
          setStatus("Error");
        }
      }
    } catch (err) {
      let error = err.response ? err.response.data : err;
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-4 mb-2 gap-1 p-1">
      <p className="bg-gray-700 text-center hover:bg-gray-900 text-white rounded-full text-sm md:text-base cursor-pointer">
        History
      </p>
      {/* <label
        htmlFor="quantity"
        className="bg-gray-500 text-center text-white rounded-full text-sm md:text-base"
        // style={{ fontSize: "14px" }}
      >
        14px
      </label> */}
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="5"
        value={14}
        className="bg-gray-400 text-center text-white rounded-full text-sm md:text-base cursor-pointer"
      ></input>
      <button className="bg-[#ae6145]  hover:bg-[#8a4b34] text-white rounded-full text-sm md:text-base cursor-pointer">
        Save
      </button>
      <button
        onClick={handleSubmit}
        className=" bg-[#5cb85c] p-1 border-[#4cae4c] border-1 text-white rounded-full  text-sm md:text-base hover:border-[#398439] hover:bg-[#449d44]"
      >
        <FontAwesomeIcon
          icon={faPlayCircle}
          className="mr-2"
          color="white"
          size="sm"
        />
        <span>Run Code</span>
      </button>
      {/* <div className="grid grid-cols-2 gap-2">
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        <ThemeDropdown theme={theme} setTheme={setTheme} />
      </div> */}
    </div>
  );
};

export default Navbar;
