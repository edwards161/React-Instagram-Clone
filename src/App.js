import {useState, useEffect} from "react";
//import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { LogForm } from "./components/form";
import { fetchImages, login } from "./utils";
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetchImages(setImages);
    if (localStorage.key("myToken")) {
      login(setUser);
    }
  }, []);

  return (
  <div className="App">
    <Header  title={user} />
    {!user && <LogForm setUser={setUser} />}
    {images.map((image, index) => {
      return(
        <img src={image.download_url} 
        alt={`random file from unsplash number ${index}`}/>
      )
    })}
  </div>
  );
};

export default App;
