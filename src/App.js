import { useEffect, useState} from 'react';
import * as S from './components/styledApp/styled.app';
import AppRoutes from './routes';
import getAllTracks from './Api';


function App() {

  const [tracks, setTracks] = useState([
  ]);

  const [isTracksLoading, setIsTracksLoading] = useState(false);   // стейт для хранения статуса загрузки листа
  const [LoadTracksError, setLoadTracksError] = useState(null);    // стейт для хранения сообщения ошибки от сервера при загрузке листа
  // const [currentTodo, setCurrentTodo] = useState(null);       //Стейт для выделения текущей задачи

  // а.3 UseEffect для того, чтобы срабатывало один раз
  useEffect(()=>{
    setLoadTracksError(null);   //  Обнуляем стейт ошибки ответа от сервера
    setIsTracksLoading(true);   //  Ставим стейт загрузки в состояние вкл
    getAllTracks().then((data) => {    
        console.log(data);   
        setTracks(data);      //  при успешном получении ответа от сервера, обновляем стейт данных
    }).catch ((error)=> {
      setLoadTracksError(error.message);    //  при ошибке от сервера сохраняем месседж ошибки в стейт
    }).finally (()=> {
      setIsTracksLoading(false);            //  в любом случае, ставим стейт загрузки в состяние выкл
    })
      
    }, [])

  const [user, setUser] = useState(null)

  const handleLogin = () => {
    setUser("taradam");
    localStorage.setItem('user', user);
}

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    console.log(localStorage.getItem('user'));
  }

  return (
  <>
  <S.GlobalStyle/>
    <AppRoutes user={localStorage.getItem('user')} handleLogin={handleLogin} handleLogout={handleLogout}
    tracks={tracks} isTracksLoading={isTracksLoading} LoadTracksError={LoadTracksError}/>
  </>
  );
}

export default App;


