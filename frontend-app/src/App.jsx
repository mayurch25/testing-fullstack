import { useEffect, useState } from 'react';

function App() {
  const [joke, setJoke] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchJOKE = async () => {
      try {
        const res = await fetch(`${API_URL}/jokes`);
        const data = await res.json();
        setJoke(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJOKE();
  }, []);

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <div>
        {joke.length > 0 ? (
          joke.map(item => (
            <p key={item.id}>{item.title}</p>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> 
    </>
  );
}

export default App;