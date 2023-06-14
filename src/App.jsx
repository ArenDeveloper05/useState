import './App.scss';
import imageGallery from './Images';
import { useState } from 'react';

function App() {

  const [src, setSrc] = useState(imageGallery[0].src);

  const showImage = () => {
    let number = (Math.floor(Math.random() * imageGallery.length));
    setSrc(imageGallery[number].src);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="container-image">
          <img src={src}></img>
        </div>
        <button onClick={showImage}>Show The Image</button>
      </div>
    </div>
  );
}

export default App;