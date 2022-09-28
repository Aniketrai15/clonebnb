import React from 'react'
import rooms from './Data'
import Card from './Card'

export default function Carddata() {

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {rooms.map((room,un)=>{
            return(
                <Card
                place={room.place}
                img1={room.img1}
                img2={room.img2}
                img3={room.img3}
                host={room.host}
                price={room.price}
                date={room.date}
                rating={room.rating}
                key={un}
                
            />
            )
            
        })}
    </div>
  )
}
