import React from "react"
import SlideCard from "./SlideCard"


export default function Slider(){
    return(
        <div className="slider">
        <SlideCard 
        article="Mediterranean Sea"
        rating="4.5" 
        price="125"
        url="https://cdn3.enuygun.com/media/lib/1x250/uploads/image/40697618.jpg"/>  
        
        <SlideCard
        article="Internal Airport"
        rating="3.5"
        price="250"
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKaJqCef7t5QiORVzswEBrflGhAZtLImOIw&usqp=CAU"
        />

        <SlideCard
        article="Waves Of World"
        rating="4.5"
        price="250"
        url="https://i.pinimg.com/564x/8c/a2/8e/8ca28e254fd6c500c8d2ce7d250eed29.jpg"
        />

        <SlideCard
        article="5 Star Hotel"
        rating="4.3"
        price="321"
        url="https://pbs.twimg.com/media/DitGTC7X4AISf26.jpg"
        />

        <SlideCard
        article="Miniature Hotel"
        rating="3.3"
        price="111"
        url="https://a0.muscache.com/im/pictures/81c2d325-fc04-40da-852f-9490df74b62b.jpg?im_w=720"
        />

        <SlideCard
        article="Good Hotel"
        rating="4.2"
        price="221"
        url="https://a0.muscache.com/im/pictures/a3bca8fd-df95-4b9c-9816-ce88cac5e386.jpg?im_w=720"
        />

        
        </div>
    )
}