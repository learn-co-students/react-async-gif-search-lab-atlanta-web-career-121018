import React from 'react';

const Gif = props => {
    return (
        <li><img key={props.url} src={props.url} alt="gif"/></li>
    ) 
}

const GifList = props => {
    return <div>{props.gifs.map(Gif)}</div>
}
export default GifList;