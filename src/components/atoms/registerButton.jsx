import { useState } from 'react';
import RegisterModal from '../molecules/registerModal';


function registerButton({ }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleLogin = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleLogin} className='m-2 p-2 bg-slate-200 rounded-md'>Register</button>
            <RegisterModal isOpen={isOpen} handleClose={handleClose} />
        </>
    )
}

export default registerButton