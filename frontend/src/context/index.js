import { createContext } from "react";

const Context = createContext({
  dispatch: () => {}, // Default dispatch function
});

export default Context;
