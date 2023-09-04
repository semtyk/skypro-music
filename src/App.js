import './App.css';
import AudioPlayer from './components/audioplayer';
import CenterBlock from './components/centerblock';
import NavMenu from './components/navmenu';
import SideBar from './components/sidebar';


function App() {
  return (
  <div className="wrapper">
    <div className="container">
      <main className="main">
        <NavMenu />
        <CenterBlock />
        <SideBar />
      </main>
      <AudioPlayer />
      <footer className="footer" />
    </div>
  </div>
  );
}

export default App;


