import { useEffect, useState } from 'react';
import './App.css'
import Body from './component/Body'
import Splash from './component/Splash';
// import Splash from './component/Splash';


function App() {

    const [showSplashscreen, setShowSplashscreen] = useState(
      () => !JSON.parse(sessionStorage.getItem("showedSplashscreen"))
    );
  
    useEffect(() => {
      setTimeout(() => {
        setShowSplashscreen(false);
        sessionStorage.setItem("showedSplashscreen", JSON.stringify(true));
      }, 3000);
    }, []);
  return showSplashscreen ? (
    <Splash/>
  ) : (
    <Body/>
  );
}

export default App
