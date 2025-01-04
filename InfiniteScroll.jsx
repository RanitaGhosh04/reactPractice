import React, { useEffect, useState } from 'react'

const InfiniteScroll = () => { 
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        fetchPhotos()
    },[page])

    const fetchPhotos = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
        const data = await response.json()
        setPhotos((prevPhotos)=>[...prevPhotos,...data])
    }

    useEffect(() => {
        const handleScroll = () => {
          if (
            // This checks if the user has scrolled close to the bottom of the page (50px away).
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 50
          ) {
            setPage((prevPage) => prevPage + 1); // Increment the page number
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        // Cleanup scroll listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
  return (
    <div>
        <div>
            {photos.map((photo)=>(
                <div key={photo.id}>
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfiniteScroll