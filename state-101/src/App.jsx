import { useState } from "react";
import "./App.css";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  // useState
  const [count, setCount] = useState(0);
  const [student, setStudent] = useState("Daniel");
  const [studentToAdd, setStudentToAdd] = useState("");
  const [products, setProducts] = useState([]);
  console.log(products);
  return (
    <>
      <div>
        <h1>State</h1>
        {/* <h1>{count}</h1> */}
        <div>
          <input
            type="text"
            onChange={(e) => setStudentToAdd(e.target.value)}
          />
          <button onClick={() => setProducts([...products, studentToAdd])}>
            Add Products
          </button>
        </div>
        <h1>
          Current products in this store are:{" "}
          {products.map((product) => (
            <p key={product}>{product}</p>
          ))}
        </h1>
        {/* <h1>the current student is: {student}</h1> */}
        {/* <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 5)}>Add 5</button> */}
        <SignupForm products={products} />
      </div>
    </>
  );
}

export default App;
