import { useState, useEffect } from "react"
import './App.css'
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";

const PHOTOS_PER_PAGE = 3;

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const firstIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const lastIndex = firstIndex + PHOTOS_PER_PAGE;
  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const slicedPhotos = photos.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(photos => setPhotos(photos))
  }, []);

  return (
    <div className='app'>
      <Gallery photos={photos} slicedPhotos={slicedPhotos} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default App
