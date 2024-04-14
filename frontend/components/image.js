import React from 'react';
import styled from 'styled-components';

const footer = document.querySelector('footer');

export default function image({ data, darkmode, darkmodeOn }) {
    const StyledDiv = styled.div`
        background-color: ${pr => darkmodeOn ? pr.theme.black : pr.theme.white};
        h1 {
            color: ${pr => darkmodeOn ? pr.theme.white : pr.theme.black};
        }
        h2 {
            color: ${pr => darkmodeOn ? pr.theme.secondaryColor : pr.theme.black};
        }
        h3 {
            color: ${pr => darkmodeOn ? pr.theme.primaryColor : pr.theme.black};
        }
        p {
            color: ${pr => darkmodeOn ? pr.theme.primaryColor : pr.theme.black};
        }
        img {
            border: 1px solid ${pr => darkmodeOn ? pr.theme.white : pr.theme.black};
            border-radius: 5%;
        };
        button, select, option {
            background-color: ${pr => darkmodeOn ? pr.theme.tertiaryColor : pr.theme.secondaryColor};
            color: ${pr => darkmodeOn ? pr.theme.secondaryColor : pr.theme.black}
        }
    `
    //Dates and past Dates
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const newDate = new Date(data.date); // Assuming "data.date" is in the format "YYYY-MM-DD".

    const activeDate = [
            `${weekdays[newDate.getUTCDay()]} `,
            `${months[newDate.getUTCMonth()]} `,
            `${newDate.getUTCDate()}, `,
            `${newDate.getUTCFullYear()}`
        ];

    const pastDates = [];

    for (let i = 1; i <= 20; i++) {
        const pastDate = new Date(newDate);
        pastDate.setDate(newDate.getDate() - i); // Subtracting i days from the given date

        const pastDateFormatted = [
            `${weekdays[pastDate.getUTCDay()]} `,
            `${months[pastDate.getUTCMonth()]} `,
            `${pastDate.getUTCDate()}, `,
            `${pastDate.getUTCFullYear()}`
        ].join('');

        pastDates.push(pastDateFormatted);
    }

    console.log(pastDates);

    // Honoring the Copyright artist 
    const copyrightArist = () => {
        if (!data.copyright) {
            return 'Anonymous';
        } else {
            return data.copyright;
        }
    }

    console.log(copyrightArist())
    return (
        <StyledDiv className='centered'>
            <header>
                <h1>NASA Photo of the Day</h1>
            </header>
            <div>
               <select>
                    <option selected disabled hidden>Select a Different Day!</option>
                    {
                        pastDates.map(date => {
                            return (
                                <option>{date}</option>
                            )
                        })
                    }
                </select> 
                <button onClick={() => darkmode()}>Temporary Button Name</button>   
            </div>
            
            <h2>{data.title}</h2>
            <p>{activeDate}</p>
            <img src={data.url} />
            <h3>Shout out to {copyrightArist()} for this out of this world photo!</h3>
            <p>{data.explanation}</p>
        </StyledDiv>
    )
}  

            