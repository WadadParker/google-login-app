import React from "react";
import Navigation from "./Navigation";

import { AuthProvider } from "./context/AuthContext";

export default function App()
{
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}