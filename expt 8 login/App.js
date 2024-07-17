import Login from './Login';
import Auth, { AuthContext } from './AuthContext';
import { useContext } from 'react';
import Afterlogin from './Afterlogin';
function App() {
  const Check = ()=>{
    const { user } = useContext(AuthContext);
    if(!user)return <Login/>
    else return <Afterlogin/>
  }
  return (
    <Auth>
      <Check/>
    </Auth>
  );
}

export default App;
