import Loader from "./Loader"

const Gallery = (props) => {
    const {
        photos,
        slicedPhotos,
    } = props

    return (
        <div className='photos-container'>
            {photos.length === 0 && <Loader />}
            {slicedPhotos.map((photo) => <img key={photo.id} src={photo.download_url} alt={photo.author} />)}
        </div>
    )
}

export default Gallery