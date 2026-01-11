import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormHeader from "./components/formHeader";
import FormBody from "./components/formBody";
import FormA from "./components/FormA";

function App() {
  function signUp(formData) {
    const meal = formData.get("meal");
    console.log("meal");
  }
  return (
    <div>
      <FormHeader />
      <FormBody onSubmit={signUp} />
      <FormA />
    </div>
  );
}

export default App;
