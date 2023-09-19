import './App.css';
import { useState, useEffect } from 'react';
import AudioPlayer from './components/audioplayer/audioplayer';
import CenterBlock from './components/centerblock';
import NavMenu from './components/navmenu';
import SideBar from './components/sidebar';



function App() {
   const [isSkeleton, setIsSkeleton] = useState(true);
   // const [isBlink, setIsBlink] = useState(0); 

    useEffect(()=> {
      
      // const intervalId = setInterval(() => {
      //   // eslint-disable-next-line no-shadow
      //   setIsBlink(isBlink => !isBlink);
      // }, 500);

      const timerId = setTimeout(() => {
        setIsSkeleton(!isSkeleton);
        // clearInterval(intervalId);
      }, 5000);
      
      return () => {
        clearTimeout(timerId);
        // clearInterval(intervalId);
      };
    }, []);
  


  return (
  <div className="wrapper">
    <div className="container">
      <main className="main">
        <NavMenu />
        <CenterBlock isSkeleton = {isSkeleton} />
        <SideBar unvisible = {isSkeleton}/>
      </main>
      <AudioPlayer unvisible = {isSkeleton}/>
      <footer className="footer" />
    </div>
  </div>
  );
}

export default App;


