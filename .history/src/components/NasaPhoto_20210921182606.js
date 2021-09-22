import React, {Fragment, useState, useEffect} from 'react'

const NasaPhoto = () => {

    const [ photoData, setPhotoData ] = useState(null);

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

    //if api is broken, cant fetch anything
    if (!photoData) {
        return <div>Please wait</div>
    }

    return (
        <Fragment>
            <img src={photoData.url} alt={photoData.title}/>
        </Fragment>
    )
}

export default NasaPhoto
