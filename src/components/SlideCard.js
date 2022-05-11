import React from "react"

const slideStock="https://i.pinimg.com/736x/ff/40/c1/ff40c13c729d3a678a7b548cf7ba95bf.jpg"

export default function SlideCard(props){
    const url = props.url;
    const state= props.state;
    const rating = props.rating;
    const article= props.article;
    const price = props.price;
    return(
        <div className="slideCard">
            <img src={url}/>
            <span className="state">{state}</span>
            <p>{rating} <span className="gray">-USA</span></p>
            <p className="article">{article}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}