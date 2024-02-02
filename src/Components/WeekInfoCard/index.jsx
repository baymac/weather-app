import React, { useEffect, useState } from 'react'
import { UseWeatherAPPContext } from '../../Context/context'
import { SingleCardComponent } from '../SingleCard';

export const WeekInfoCardComponents = () => {
    let { state: { daily }, dispatch } = UseWeatherAPPContext();
    const [selectedCard, setSelectedCard] = useState(0);
    const updateCurrent = () => {
        return (
            dispatch({
                type: 'SET_CURRENT',
                payload: daily[selectedCard]
            })
        )
    }
    useEffect(() => {
        updateCurrent();
    }, [daily, selectedCard]);
    return (
        <>
        <div className='cardWrap'>
            <ul className='cardList'>
                {
                daily && daily.length > 0 ? daily.map((item, index) => {
                    if (index < 7) {
                        return (
                            <SingleCardComponent className={index === selectedCard ? "active" : ""} onClick={() => {
                                setSelectedCard(index)
                                updateCurrent();
                            }} item={item} key={index} />
                        )
                    }
                    return '';

                }) : ''
                }
            </ul>
        </div>
        </>
    )
}

