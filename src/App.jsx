import { useState } from "react";
import "./styles.css";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]);

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${word}&client_id=API-KEY`
      )
      .then((res) => {
        // console.log(res);
        setPhoto(res.data.results);
        // console.log(photo);
      });
  };
  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Results photo={photo} />
    </div>
  );
};

export default App;
