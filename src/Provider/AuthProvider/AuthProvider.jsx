import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ Children }) => {
  return;
  <AuthContext.Provider value={info}>{Children}</AuthContext.Provider>;
};

export default AuthProvider;
