/* eslint-disable react/prop-types */
import "../../App.css";
import { useState } from "react";

export default function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userToAdd = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userToAdd);
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign up</button>
      </form>
      {props.products.map((product) => (
        <p key="product">{product}</p>
      ))}
    </div>
  );
}
