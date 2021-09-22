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

    //if api is broken, cant fetch anything, this is a loading state
    if (!photoData) {
        return <div className="nasa-emoji loading">U</div>
    }

    // (document).ready(function(){
    //     ('.content').click(function(){
    //       ('.content').toggleClass("heart-active")
    //       ('.text').toggleClass("heart-active")
    //       ('.numb').toggleClass("heart-active")
    //       ('.heart').toggleClass("heart-active")
    //     });
    //   });

    console.log(photoData);
    return (
        <div className="bg-gray-50 nasa-font">
            <div className="flex justify-center">
                <div className="nasa-emoji text-6xl pt-5 px-2">U</div>
                <div className="py-5 pt-8 text-6xl">The Wonders of Universe</div>
                <div className="nasa-emoji text-6xl pt-5 px-2">U</div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 content-center items-center">
                
                    {photoData.map((data) => (
                        <div class="flex flex-col w-full rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5 py-5 justify-self-center" key={data.url}>
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
                                        <div className="grid items-center mt-4 text-gray-700 break-all">
                                            <p>{data.explanation}</p>
                                        </div>
                                        <div class="icon">
                                            <svg class="heart-main" viewBox="0 0 512 512" width="100" title="heart">
                                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                                            </svg>
                                            <svg class="heart-background" viewBox="0 0 512 512" width="100" title="heart">
                                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                                            </svg>
                                        </div>
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