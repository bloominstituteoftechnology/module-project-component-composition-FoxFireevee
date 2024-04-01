import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
        color: ${pr => pr.theme.secondaryColor};
        border: 1px solid red;
`

export default function image(props) {
    const { data } = props;

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



    console.log(data)
    return (
        <StyledDiv className='centered'>
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
            <h2>{data.title}</h2>
            <p>{activeDate}</p>
            <img src={data.url} />
            <h3>Shout out to {data.copyright} for this out of this world photo!</h3>
            <p>{data.explanation}</p>
        </StyledDiv>
    )
}  

            