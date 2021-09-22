import React, {Fragment, useState, useEffect} from 'react'


const apiKey = process.env.REACT_APP_NASA_KEY

const NasaPhoto = () => {
    const [ photoData, setPhotoData ] = useState(null);
    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
            )
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    //if api is broken, cant fetch anything
    if (!photoData) {
        return <div>Please wait</div>
    }
    console.log(photoData);
    return (
        <Fragment>
            <div className="grid grid-cols-2 bg-light-blue">
                {photoData.map((data) => (
                    <div className="px-5">
                        {data.media_type === 'image' ? (
                        <img src={data.url} alt={data.title}/> ) : (
                            <iframe title="space-video" src={data.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo"/>
                        )}
                        <div className="grid grid-cols-2">
                            <p>{data.date}</p>
                            <div className="grid grid-cols-2">
                            <h2>{data.title}</h2>
                            <p>{data.explanation}</p>
                            </div>
                        </div>
                        <button>Like</button>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default NasaPhoto
