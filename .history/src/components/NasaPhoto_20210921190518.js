import React, {Fragment, useState, useEffect} from 'react'


const apiKey = process.env.REACT_APP_NASA_KEY

const NasaPhoto = () => {

    const [ photoData, setPhotoData ] = useState(null);

    let today = new Date();
    // today = today.toISOString().split('T')[0];
    console.log(today);
    var newDate = new Date(today.setTime( today.getTime() + today * 86400000 ));
    console.log(newDate)

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${today}`
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
            {photoData.media_type === 'image' ? (
            <img src={photoData.url} alt={photoData.title}/> ) : (
                <iframe title="space-video" src={photoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo"/>
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </Fragment>
    )
}

export default NasaPhoto
