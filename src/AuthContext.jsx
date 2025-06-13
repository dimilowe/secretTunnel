import { createContext, useContext, useState } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");

  // TODO: signup
  const signup = async () => {
    const response = await fetch(`${API}/authenticate`), {method: `POST`, headers: {`Content-Type`: `application/json`}, body: JSON.stringify{{username: userNameInput}}}
 const responseObj = await response.json();
 setToken(responseObj.token)
 setLocation(`TUNNEL`)
  }

  // TODO: authenticate

  const value = { location };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
