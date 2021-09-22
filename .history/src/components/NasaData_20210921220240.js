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

    let btn = document.getElementById('btn');
    let check = document.getElementById("check");

    function btnAnimation(){
        btn.classList.add("btnAnimation");
        check.classList.add("checkAnimation");

        setTimeout(function(){
            btn.classList.remove("btnAnimation");
            check.classList.remove("checkAnimation");
        }, 5000);
    }

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
                                        <button className="py-3 text-xl button"><div className="px-2">Like</div></button>
                                    </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default NasaPhoto
