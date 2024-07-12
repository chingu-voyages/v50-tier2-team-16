import { useState } from 'react'
import LoginModal from './loginModal';


function loginButton({ }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleLogin = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleLogin} className='m-2 p-2 bg-slate-200 rounded-md'>Login</button>
            <LoginModal isOpen={isOpen} handleClose={handleClose} />
        </>
    )
}

export default loginButton