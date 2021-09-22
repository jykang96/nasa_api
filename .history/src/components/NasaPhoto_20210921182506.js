import React, {Fragment, useState, useEffect} from 'react'

const NasaPhoto = () => {

    const [ phoeoData, setPhotoData ] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=jahdWjs9KWcGVEXf0pFj2rbcx0mPKOEGeJXzJCE3'
            )
            const data = await res.json();
            setPhotoData(data);
        }
        
    }, []);

    return (
        <Fragment>
            
        </Fragment>
    )
}

export default NasaPhoto
