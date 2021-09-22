import React from 'react'

const Button = (props) => {
    return (
        <div className="grid items-center pt-2">
            <button className="py-3 px-5 text-xl button" key={props.url} onclick={props.likeUnlike}>Like</button>
        </div>
    )
}

export default Button
