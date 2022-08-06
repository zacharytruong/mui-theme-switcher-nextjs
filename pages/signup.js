import { useState } from 'react';

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
