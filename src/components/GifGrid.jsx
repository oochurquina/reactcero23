import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// api.giphy.com/v1/gifs/search
// api_key=vR8qrk7yCfHne7kjFp8A0H1Sbpy9HfYa

export const GifGrid = ({category}) => {
  const {isLoading, images}= useFetchGifs(category);

  // const [images, setImages] = useState([]);
  // const getImages = async() => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }
  // useEffect(()=>{
  //   getImages();
  // },[]);
  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
          {
            images.map(gif=>(<GifItem  key={gif.id} {...gif} />))
            // images.map(img=>(<li key={img.id}>{img.title}</li>))
          }
        </div>
    </>
  )
}
