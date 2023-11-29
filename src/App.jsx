import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer } from "./strore/customersReducer";
import { useState } from "react";

function App() {
  const [oldCash, setOldCash] = useState(0);
  const [username, setUserName] = useState("");

  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customersReducer.customers);

  const addCash = () => {
    dispatch({ type: "ADD CASH", payload: 1000000 });
  };

  const getCash = () => {
    dispatch({ type: "GET CASH", payload: 5000 });
  };

  const handleAddCustomer = () => {
    dispatch(addCustomer(username));
  };

  const handleRemoveCustomer = () => {
    dispatch(removeCustomer(username));
    console.log("removed: ", username);
  };

  return (
    <>
      <h1>Redux: {cash}</h1>
      <button onClick={() => addCash()}>Add</button>
      <button onClick={() => getCash()}>Get</button>

      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
      />

      <button onClick={() => handleAddCustomer()}>add name</button>
      {customers.length > 0 &&
        customers.map((customer) => (
          <div key={customer}>
            {customer} <button onClick={() => handleRemoveCustomer()}>remove namee</button>
          </div>
        ))}
    </>
  );
}

export default App;
