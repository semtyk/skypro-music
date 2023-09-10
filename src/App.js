import './App.css';
// import { useState } from 'react';
import AudioPlayer from './components/audioplayer';
import CenterBlock from './components/centerblock';
import NavMenu from './components/navmenu';
import SideBar from './components/sidebar';



function App() {
   const isSkeleton = false;
  // const [isSkeleton, setIsSkeleton] = useState(true);
 
  // setTimeout(() => {
  //   setIsSkeleton(!isSkeleton);
  // }, 1000);

  return (
  <div className="wrapper">
    <div className="container">
      <main className="main">
        <NavMenu />
        <CenterBlock isSkeleton = {isSkeleton}/>
        <SideBar unvisible = {isSkeleton}/>
      </main>
      <AudioPlayer unvisible = {isSkeleton}/>
      <footer className="footer" />
    </div>
  </div>
  );
}

export default App;


