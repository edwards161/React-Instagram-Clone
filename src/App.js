import {useState, useEffect} from "react";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { LogForm } from "./components/form";
import { fetchImages} from "./utils";
import './App.css';

const App = () => {
  const [title, setTitle ] = useState();
  const [userInput, setUserInput] = useState();
  const [images, setImages] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  return (
  <div className="App">
    <Navbar />
    <Header  title={title} />
    <LogForm setUser={setUser} />
    {images.map((image, index) => {
      return(
        <img src={image.download_url} alt={`random file from unsplash number ${index}`}/>
      )
    })}
  </div>
  );
};

export default App;
