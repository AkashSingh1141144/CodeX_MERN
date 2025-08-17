import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This effect runs once when the component is mounted
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
      setLoading(false);
    };

    fetchUser();
  }, []); // Empty dependency = run once on mount

  return (
    <div style={{ padding: "20px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", marginLeft: "35vw" }}>
      <h1>🧑 Random User</h1>

      {loading && <p>Loading...</p>}

      {!loading && user && (
        <div>
          <img src={user.picture.large} alt="User" style={{ borderRadius: "50%" }} />
          <h2>{user.name.first} {user.name.last}</h2>
          <p>📧 {user.email}</p>
          <p>🌍 {user.location.country}</p>
        </div>
      )}
    </div>
    
  );
};

export default App;
