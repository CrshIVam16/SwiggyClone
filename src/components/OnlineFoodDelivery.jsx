import React, { useState } from 'react'
import RestaurantsCards from './RestaurantsCards'
import { X } from '@boxicons/react'
import { useDispatch } from 'react-redux'
import { setFilterValue } from '../utils/filterSlice'

function OnlineFoodDelivery({ data, title }) {

    const filterOptions = ["Ratings 4.0+", "Offers", "Rs. 300-Rs. 600", "Less then Rs. 300"]

    const [activeBtn, setActiveBtn] = useState(null)
    const dispatch = useDispatch()

    // function handleFilterBtn(filterName) {
    //     setActiveBtn(activeBtn === filterName ? null : filterName)
    //     console.log(activeBtn);
    // }
    // dispatch(setFilterValue(activeBtn))

    function handleFilterBtn(filterName) {
        const nextValue = activeBtn === filterName ? null : filterName;

        setActiveBtn(nextValue);
        dispatch(setFilterValue(nextValue));
    }

    return (
        <>
            <div className='flex flex-col w-[78%] mt-10'>
                <h1 className=" text-2xl font-bold">{title}</h1>

                <div className='my-3 flex gap-5'>
                    {
                        filterOptions.map((filterBtn) => (
                            <button onClick={() => handleFilterBtn(filterBtn)} className={'cursor-pointer filterBtn flex ' + (activeBtn === filterBtn ? "active" : "")}>
                                {filterBtn}
                                <span className='hidden'> <X /></span>
                            </button>
                        ))
                    }

                </div>

                <div className=' w-full m-auto overflow-hidden grid grid-cols-3 gap-3'>
                    {data.map(({ info, cta: { link } }, id) => (
                        <div key={id}
                            className=' hover:scale-95 duration-200 p-2 flex flex-col gap-3 '>
                            {/* <RestaurantsCards info={info} /> */}
                            <RestaurantsCards {...info} link={link} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className='w-[77%] border mt-10 text-gray-400/40' />
        </>
    )
}

export default OnlineFoodDelivery