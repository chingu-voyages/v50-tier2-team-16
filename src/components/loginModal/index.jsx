import { useState } from 'react'
import { useUser } from "../../context/UserContext"

function LoginModal({ isOpen, handleClose }) {

    const [username, setUsername] = useState('');
    const { login } = useUser();

    const inputStyles = 'mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-500';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        login(username);
        handleClose();
    }

    return (
        (isOpen && <div className='absolute top-0 left-0 flex justify-center items-center h-full w-full bg-black bg-opacity-25 z-30'>
            <div className='relative flex justify-center items-center h-1/2 w-1/2 bg-slate-600'>
                <button className='absolute top-0 right-2 text-white text-2xl' onClick={handleClose}>
                    X
                </button>
                <form
                    target=""
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className='text-white'>Enter your user name: </label>
                    <input id="name" className={inputStyles} type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} required />

                    <button
                        type="submit"
                        className="mt-5 rounded-lg bg-white px-10 py-3 "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>)
    )
}

export default LoginModal