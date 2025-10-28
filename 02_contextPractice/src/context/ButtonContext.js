import { useContext } from "react";
import { createContext } from "react";

export const ButtonContext = createContext({
  buttonText: "Click Me",
  setButtonText: () => {},
});

export const ButtonContextProvider = ButtonContext.Provider;

export default function useButton() {
  return useContext(ButtonContext);
}
