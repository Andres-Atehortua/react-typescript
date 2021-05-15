import { useState } from 'react';

interface Usuario {
  uid: string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<Usuario>();

  const login = (): void => {
    setUser({ uid: 'ABC_123', name: 'Juan' });
  };

  return (
    <div className='mt-5'>
      <h3>User: useState</h3>
      <button onClick={login} className='btn btn-outline-info'>
        Login
      </button>

      <pre className='mt-5'>{JSON.stringify(user)}</pre>

      <hr />
    </div>
  );
};

export default User;
