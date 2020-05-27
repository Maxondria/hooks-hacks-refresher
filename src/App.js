import React, { useState } from "react";
import { useForm } from "./custom/useForm";
import { useFetch } from "./custom/useFetch";

const App = () => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [count, setCount] = useState(0);

  const [data, loading] = useFetch(`http://numbersapi.com/${count}/trivia`);

  // useEffect(() => {
  //   const onMouseMove = (e) => console.log(e);
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <div>
      <div>{loading ? "Loading..." : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
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
