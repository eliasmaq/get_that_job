import { useEffect, useState } from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { login } from "./service/auth-services";
import { createUser } from "./service/user-services";
import { useAuth } from "./context/auth-context";


function App() {
  const { user } = useAuth()
  
  return (
    <>
      { user ? <AuthenticatedApp/> : <UnauthenticatedApp /> }
    </>
  );
}

export default App;