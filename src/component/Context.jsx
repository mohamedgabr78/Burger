import { createContext, useContext } from "react";
export const userContext = createContext();
export function useUser() {
  return useContext(userContext);
}
