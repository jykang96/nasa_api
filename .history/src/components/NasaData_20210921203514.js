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
        <div className="bg-gray-50 nasa-font text-6xl">
            <div className="text-center pt-5 text-">The Wonders of Universe</div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1">
                {photoData.map((data) => (
                    <div class="flex flex-col w-full rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5 py-5 justify-self-center">
                            {data.media_type === 'image' ? (
                            <img src={data.url} alt={data.title}/> ) : (
                                <iframe title="space-video" src={data.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo"/>
                            )}
                        <div class="flex flex-col w-full md:flex-row">
                                <div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                    <div class="md:text-3xl">{data.date.split('-')[1]}</div>
                                    <div class="md:text-6xl">{data.date.split('-')[2]}</div>
                                    <div class="md:text-xl">{data.date.split('-')[0]}</div>
                                </div>
                                <div class="p-4 font-normal text-gray-800 md:w-3/4">
                                    <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{data.title}</h2>
                                    <div class="flex flex-row items-center mt-4 text-gray-700">
                                        <p>{data.explanation}</p>
                                    </div>
                                    <button>Like</button>
                                </div>
                        </div>
                    </div>
                ))}
            </div>

{/* sgyrg */}
        </div>
    )
}

export default NasaPhoto
