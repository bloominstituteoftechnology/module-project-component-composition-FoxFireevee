import React from 'react';

export default function image(props) {
    const { data } = props;

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
    const newDate = new Date(data.date);

    const useableDate = 
    [`${weekdays[newDate.getUTCDay()]} 
    ${months[newDate.getUTCMonth()]} 
    ${newDate.getUTCDate()}, 
    ${newDate.getUTCFullYear()}`];

    const pastDates = [];

    console.log(`${newDate.getUTCDate() - 1}`)
   
    for(let i = 1; i <= 20; i++) { 
        const minusTheOne = `${newDate.getUTCDate() - i},`;
        const currentDateMinusOne = useableDate.map(() => {
            return `${weekdays[newDate.getUTCDay()]} 
                    ${months[newDate.getUTCMonth()]} 
                    ${minusTheOne} 
                    ${newDate.getUTCFullYear()}`
        })
        pastDates.push(currentDateMinusOne)
        console.log(minusTheOne)
    }
    console.log(pastDates)
    
    return (
        <div className='centered'>
            <select>
                <option selected disabled hidden>Select a Different Day!</option>
                
            </select>
            <h2>{data.title}</h2>
            <p>{useableDate}</p>
            <img src={data.url}/>
            <h3>Shout out to {data.copyright} for this out of this world photo!</h3>
            <p>{data.explanation}</p>
        </div>
    )
}