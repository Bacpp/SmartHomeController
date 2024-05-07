import React, { useState, useEffect } from "react";
import classes from "./ModeSelector.module.css";

const ModeSelector = ({ initialMode, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(initialMode);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Update the selectedOption when the initialMode changes
  useEffect(() => {
    setSelectedOption(initialMode);
  }, [initialMode]);

  const handleModeChange = (event) => {
    const newMode = event.target.value;
    setSelectedOption(newMode); // Update the selected option
    onChange(newMode);
  };

  return (
    <div className={classes.modeSelectorContainer}>
      <div
        className={classes.dropdown}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className={classes.dropbtn}>{selectedOption}</button>
        {isDropdownOpen && (
          <div className={classes.dropdownContent}>
            {options.map((option) => (
              <button key={option} value={option} onClick={handleModeChange}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModeSelector;
