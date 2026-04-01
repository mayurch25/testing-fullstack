import { useEffect, useState } from 'react';

function App() {
  const [profileData, setProfileData] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch(`${API_URL}/github`);
        const data = await res.json();
        console.log(data);
        setProfileData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={profileData.avatar_url}
          alt={profileData.login}
          style={styles.avatar}
        />
        <h2>{profileData.login}</h2>
        <p>ID: {profileData.id}</p>
        <p>
          Profile:{" "}
          <a
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profileData.html_url}
          </a>
        </p>
        <p>Public Repos: {profileData.public_repos}</p>
        <p>Followers: {profileData.followers}</p>
        <p>Following: {profileData.following}</p>
        <p>Joined: {new Date(profileData.created_at).toLocaleDateString()}</p>
        <p>Last Update: {new Date(profileData.updated_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "'Nunito Sans', sans-serif",
  },
  card: {
    width: "350px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default App;