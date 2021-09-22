import React, {Fragment, useState, useEffect} from 'react'


const apiKey = process.env.REACT_APP_NASA_KEY

const NasaPhoto = () => {

    const [ photoData, setPhotoData ] = useState(null);
    
    let array = [];
    // let today = new Date();
    // let tomorrow = new Date();
    // // today = today.toISOString().split('T')[0];
    // console.log(today);
    // tomorrow.setDate(today.getDate() - 1);
    // tomorrow = tomorrow.toISOString().split('T')[0];
    // console.log(tomorrow)
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            let today = new Date();
            let dummy_date = new Date();
            // console.log(today);
            // tomorrow.setDate(today.getDate() - 1);
            // tomorrow = tomorrow.toISOString().split('T')[0];
            // console.log(tomorrow)
            for(let i = 0; i < 10; i ++){
                
                const res = await fetch(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${tomorrow}`
                    // `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
                )
                const data = await res.json();
                setPhotoData(data);
                array.push(data);
                console.log(array);
            }
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
