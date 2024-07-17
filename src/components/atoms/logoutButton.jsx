import { useUser } from '../../contexts/UserContext';

function logoutButton() {

    const { logout } = useUser();

    const handleLogout = () => {
        logout();
    };

    return (
        <button onClick={handleLogout} className='m-2 p-2 bg-slate-200 rounded-md'>Logout</button>
    )
}

export default logoutButton