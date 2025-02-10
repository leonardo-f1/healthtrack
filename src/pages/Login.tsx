import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('Login tentado com:', email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      
      {/* Corrigido: A condicional `error &&` agora está correta */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Corrigido: Inputs devidamente formatados */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;

