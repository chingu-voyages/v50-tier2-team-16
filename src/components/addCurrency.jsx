import { useState } from 'react';
import { useUser } from '../context/UserContext';

function addCurrency() {

    const [amount, setAmount] = useState(0);
    const { updateBalance } = useUser();

    const handleSubmit = (e) => {
        setAmount(e.target.value);
        updateBalance(amount);
    }

    const inputStyles = 'w-20 rounded-sm bg-gray-100 px-5 py-3 placeholder-gray-500';

    return (
        <div>
            <form
                className='m-2 p-2 h-20'
                target=""
                onSubmit={handleSubmit}
            >
                <label htmlFor="moneyInput" className='text-black'>Add money to your account: </label>
                <input id="moneyInput" className={inputStyles} type="number" onChange={(e) => setAmount(e.target.value)} required />

                <button
                    type="submit"
                    className="m-2 p-2 bg-slate-200 rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default addCurrency