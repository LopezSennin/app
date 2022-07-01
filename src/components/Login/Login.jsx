import{LoginButton} from './LoginButton';
import logo from './logo.svg';

function Login() {
    return (
        <div className='Login'>
            <img src={logo}  height='500'/>
            <LoginButton />
        </div>
    );
}

export default Login;
