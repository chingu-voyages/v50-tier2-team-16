import { useUser } from '../../contexts/UserContext';
import RegisterButton from "../atoms/registerButton";
import LoginButton from "../atoms/loginButton";
import LogoutButton from "../atoms/logoutButton";
import AddCurrency from "../atoms/addCurrency";

function userDashboard({ }) {

    const { user } = useUser();
    console.log(user);

    return (

        <div className='m-2 w-5/6 border-black black border-2'>
            {!user && <div>
                <RegisterButton />
                <LoginButton />
            </div>}

            {user && <div>
                <LogoutButton />
                <AddCurrency />
            </div>}

            <p>Current user: {!user ? "none" : user.username} </p>
            <p>Current balance: {!user ? 0 : user.balance} </p>
        </div>
    )
}

export default userDashboard