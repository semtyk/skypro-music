// import { useState, useEffect } from 'react';
// import AudioPlayer from './components/audioplayer/audioplayer';
// import CenterBlock from './components/centerblock/centerblock';
// import NavMenu from './components/navmenu/navmenu';
// import SideBar from './components/sidebar/sidebar';
// import MainPage from './pages/mainpage/mainpage';
import * as S from './components/styledApp/styled.app';
import AppRoutes from './routes';


function App() {
  //  const [isSkeleton, setIsSkeleton] = useState(true);

  //   useEffect(()=> {
  //     const timerId = setTimeout(() => {
  //       setIsSkeleton(!isSkeleton);
  //     }, 5000);
      
  //     return () => {
  //       clearTimeout(timerId);
  //     };
  //   }, []);

  return (
  <>
  <S.GlobalStyle/>
    <AppRoutes />
      {/* <MainPage /> */}
      {/* <S.Main>
        <NavMenu />
        <CenterBlock isSkeleton = {isSkeleton} />
        <SideBar unvisible = {isSkeleton}/>
      </S.Main>
      <AudioPlayer unvisible = {isSkeleton}/> */}
  </>
  );
}

export default App;


