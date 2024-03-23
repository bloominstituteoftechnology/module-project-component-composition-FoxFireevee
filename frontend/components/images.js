import React from "react";

import Image from './image'

export default function images(props) {
    const {data} = props;

    // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
    // const newDate = new Date(data.date);

    // const useableDate = 
    // `${weekdays[newDate.getUTCDay()]} 
    // ${months[newDate.getUTCMonth()]} 
    // ${newDate.getUTCDate()}, 
    // ${newDate.getUTCFullYear()}`;

    // console.log(useableDate);
    console.log(data.date);

    return (
        <div>
            {/* {
                data.map((d, idx) => {
                    return <Image key={idx} data={d}/>
                })
            } */}
            <Image data={data}/>
        </div>
    );
}