import React, {Fragment, useState, useEffect} from 'react'

const NasaPhoto = () => {

    const [ phoeoData, setPhotoData ] = useState(null);

    useEffect(() => {
        async function fetchPhoto(){
            const res = await fetch(
                ''
            )
        }
    })

    return (
        <Fragment>
            
        </Fragment>
    )
}

export default NasaPhoto
