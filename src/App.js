import React from "react";
import { useForm } from "./custom/useForm";

const App = () => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });
  return (
    <div>
      <input
        type="email"
        value={email}
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
