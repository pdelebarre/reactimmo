import React, { createContext, useState } from "react";

const PreferencesContext = createContext({
  testMode: true,
  toggleTestMode: () => {},
});

export function PreferencesContextProvider(props) {
  const [flag, setFlag] = useState(true);

  const toggleTestModeHandler = () => {
    // e.preventDefault();
    setFlag((prev) => !prev);
    console.log("testMode in context", flag);
  };

  const pref = {
    testMode: flag,
    toggleTestMode: toggleTestModeHandler,
  };

  return (
    <PreferencesContext.Provider value={pref}>
      {props.children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesContext;
