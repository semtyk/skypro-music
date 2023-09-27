import { useState} from 'react';
import * as S from './components/styledApp/styled.app';
import AppRoutes from './routes';


function App() {

  const [user, setUser] = useState(null)

  const handleLogin = () => {
    setUser("taradam");
    localStorage.setItem('user', user);
}

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    // console.log(localStorage.getItem('user'));
  }

  return (
  <>
  <S.GlobalStyle/>
    <AppRoutes user={localStorage.getItem('user')} handleLogin={handleLogin} handleLogout={handleLogout}/>
  </>
  );
}

export default App;


