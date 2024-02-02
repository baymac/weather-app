import React from 'react'
import { ChooseStateComponents } from './ChooseState'
import { WeekInfoCardComponents } from './WeekInfoCard'
import { HumidityComponents } from './Humidity'
import { LeftComponents } from './Left'

export const HomeComponents = () => {
  return (
    <>
        <div className='homeWrap'>
            <div className='weatherSection'>
                <LeftComponents />
                <div className='rightSide'>
                    <ChooseStateComponents />
                    <WeekInfoCardComponents /> 
                    <HumidityComponents />
                </div>
            </div>
        </div>
    </>
    )
}
