import React from 'react'
import horse from '../assets/img/horse.jpg';
import snail from '../assets/img/snail.jpg';
import soup from '../assets/img/toxic_sludge.jpg';
import rock from '../assets/img/uranium.jpg';

interface Props {
    className?: string,
    setSelectedFood: React.Dispatch<React.SetStateAction<string | undefined>>
}
function FoodList({ className, setSelectedFood }: Props) {
    const foods = [horse, snail, soup, rock];
    return (

        <div className={`${className} flex justify-around bg-amber-100`}>
            {foods.map((src, index) => {
                return (<button key={index} className='w-1/12 hover:cursor-pointer'
                onClick={() => setSelectedFood((prevSource) => src)}>
                    <img src={src} />
                </button>)
            })}
        </div>
    )
}

export default FoodList