import React from 'react';
import { useState } from 'react';
import './styles.css';
import axios from 'axios';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Mypage from './components/Mypage';

const UnsplashApi = process.env.REACT_APP_UNSPLASH_API_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [photo, setPhoto] = useState([]);

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${word}&client_id=${UnsplashApi}`
      )
      .then((res) => {
        // console.log(res);
        setPhoto(res.data.results);
        // console.log(photo);
      });
  };
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path={`/register/`}
              element={<Register />}
            />
            <Route path={`/login/`} element={<Login />} />
            <Route path={`/`} element={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="App">
        <Title />
        <Form
          setWord={setWord}
          getPhotoData={getPhotoData}
        />
        <Results photo={photo} />
      </div>
    </>
  );
};

export default App;
