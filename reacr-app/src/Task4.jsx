import { useState } from "react";

function Task4() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userId.trim() || !password) {x
      setMessage("Please enter a user ID and password.");
      return;
    }

    setMessage(`User ID ${userId} created successfully.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>

      <label htmlFor="user-id">User ID</label>
      <input
        id="user-id"
        type="text"
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength={6}
        required
      />

      <button type="submit">Create User</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Task4;