// FirstNav.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "../Dropdowns/LanguageDropdown";
import ThemeDropdown from "../Dropdowns/ThemeDropdown";
import { checkStatus, submitCode } from "../../api";

const FirstNav = ({
  language,
  setLanguage,
  setTheme,
  theme,
  setOutput,
  setStatus,
  testInput,
  code,
  toggleSidebar,
}) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <button className="text-2xl p-2" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="text-2xl p-2 font-semibold">OnlineIDE</h1>
        </div>

        <div className="grid grid-cols-2 p-2 gap-2 items-center">
          <LanguageDropdown language={language} setLanguage={setLanguage} />
          <ThemeDropdown theme={theme} setTheme={setTheme} />
          {/* <button className="bg-[#b6b094] text-white rounded-full">
            Sign in
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
