import { useState } from 'react'
import { useUser } from "../../contexts/UserContext"

function LoginModal({ isOpen, handleClose }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useUser();

    const inputStyles = "mt-3 w-full rounded-lg bg-white px-5 py-3 placeholder-gray-500";

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        handleClose();
    }

    return (
        (isOpen && <div className='absolute top-0 left-0 flex justify-center items-center h-[100vh] w-full bg-black bg-opacity-25 z-30'>
            <div className='relative flex justify-center items-center h-1/2 w-4/5 bg-app-yellow'>
                <button className='absolute top-0 right-2 text-black text-2xl' onClick={handleClose}>
                    X
                </button>
                <form
                    className="m-2 p-2"
                    target=""
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className='text-black my-2'>Enter your user name: </label>
                    <input id="name" className={inputStyles} type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} required />

                    <label htmlFor="password" className='text-black my-2'>Create a password: </label>
                    <input id="password" className={inputStyles} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                    <button
                        type="submit"
                        className="min-w-24 h-12 my-4 py-2 text-white font-bold border-b-4 border-blue-500 bg-header-navButton hover:bg-header-navButton-hover rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>)
    )
}

export default LoginModal