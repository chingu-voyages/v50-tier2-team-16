import { useUser } from "@/contexts/UserContext";
import { useState } from "react";

// To prevent conflicts, copy from addCurrency.jsx
function AddCurrency() {
  const [amount, setAmount] = useState(0);
  const { updateBalance } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBalance(amount);
  };

  return (
    <div>
      <form className="m-2 p-2" target="" onSubmit={handleSubmit}>
        <label htmlFor="moneyInput" className="text-black font-bold">
          Add money to your account:{" "}
        </label>
        <div className="flex gap-3 mt-4">
          <input
            id="moneyInput"
            className="currency-input"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <button
            type="submit"
            className="min-w-24 h-12 m-2 p-2 text-white font-bold border-b-4 border-blue-500 bg-header-navButton hover:bg-header-navButton-hover rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCurrency;
