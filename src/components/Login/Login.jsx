import{LoginButton} from './LoginButton';
import { LogoutButton } from './Logout';
import logo from './logo.png';
import './Login.css';


function Login() {
    return (
        <div className='Login'>
            <header className='Login-header'>
                <img src={logo}  className="Login-logo" alt="logo"/>
                <LoginButton />
                <LogoutButton />
            </header>
            
        </div>
    );
}

export default Login;
