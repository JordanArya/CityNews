import { useState } from 'react';
import Login from './components/Login';
import NewsFeed from './components/NewsFeed';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">


      {isLoggedIn && (
        <NewsFeed onLogout={handleLogout} />
      )
      }

      {
        !isLoggedIn && (
          <Login onLogin={handleLogin} />
        )
      }


    </div>
  );
}

export default App;