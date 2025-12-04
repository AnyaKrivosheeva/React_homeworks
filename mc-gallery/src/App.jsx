import { useState, useEffect } from "react"
import AuthContext from './AuthContext'
import './App.css'
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";
import LogButton from "./components/LogButton";

const PHOTOS_PER_PAGE = 3;

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const firstIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const lastIndex = firstIndex + PHOTOS_PER_PAGE;
  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const slicedPhotos = photos.slice(firstIndex, lastIndex);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(photos => setPhotos(photos))
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className='app'>
        <Gallery photos={photos} slicedPhotos={slicedPhotos} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        <LogButton />
        {isLoggedIn && <p>Вы авторизованы!</p>}
        {!isLoggedIn && <p>Вы не авторизованы! Авторизуйтесь!</p>}
      </div>
    </AuthContext.Provider>
  )
}

export default App
