import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Navigate to Dashboard after login
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>Don&apos;t have an account?<span onClick={() => navigate('/signup')}>Sign up</span></p>
      </div>
    </div>
  );
};

export default Login;
