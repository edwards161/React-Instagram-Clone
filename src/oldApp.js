import {useState, useEffect} from "react";
import { Header } from "./components/header.js";
import { fetchImages} from "./utils";
import './App.css';

const App = () => {
  const [title, setTitle ] = useState();
  const [userInput, setUserInput] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(userInput)
  };

  return (
  <div className="App">
    <Header  title={title} />
    <form onSubmit={submitHandler}>
      <input onChange={(e) => setUserInput(e.target.value)} />
    </form>
    {title ? <h2>You wrote a title</h2> : <h2>Hurry up and write a title!</h2>}
    {title && <h2>Hooray</h2>}
    {images.map((image, index) => {
      return(
        <img src={image.download_url} alt={`random file from unsplash number ${index}`}/>
      )
    })}
  </div>
  );
};

export default App;



//we don't put parentheses around onSubmit event handler because we don't want to call it immediately
//