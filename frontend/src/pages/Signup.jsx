import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn btn-success">Sign Up</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
      </div>
    </div>
  );
};

export default Signup;
