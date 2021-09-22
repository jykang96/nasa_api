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
                    <div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                        {data.media_type === 'image' ? (
                        <img src={data.url} alt={data.title}/> ) : (
                            <iframe title="space-video" src={data.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo"/>
                        )}
                        <div className="grid grid-cols-2">
                            <p>{data.date}</p>
                            <div className="">
                                <h2>{data.title}</h2>
                                <p>{data.explanation}</p>
                            </div>
                        </div>
                        <button>Like</button>
                    </div>
                ))}
            </div>

            <div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                <div class="flex flex-col w-full md:flex-row">
                    <div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div class="md:text-3xl">Jan</div>
                        <div class="md:text-6xl">13</div>
                        <div class="md:text-xl">7 pm</div>
                    </div>
                    <div class="p-4 font-normal text-gray-800 md:w-3/4">
                        <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">2020 National Championship</h1>
                        <p class="leading-normal">The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.</p>
                        <div class="flex flex-row items-center mt-4 text-gray-700">
                            <div class="w-1/2">
                                Mercedes-Benz Superdome
                            </div>
                            <div class="w-1/2 flex justify-end">
                                <img src="https://collegefootballplayoff.com/images/section_logo.png" alt="" class="w-8"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NasaPhoto
