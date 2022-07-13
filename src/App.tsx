import './App.css';
import User from './Pages/user';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
       <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
