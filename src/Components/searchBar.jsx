import React, { useRef, useState } from 'react'
import { useFilterStore } from '../store';

export default function SearchBar() {
    const [barDisplay, setBarDisplay] = useState('hidden')
    const inputField = useRef(null);

    const { setSearchFilter } = useFilterStore(
        (state) => ({
            setSearchFilter: state.setSearchFilter,
        })
    )

    const toggleBarDisplay = () => {
        if (barDisplay === 'hidden') {
            setBarDisplay('block')
        } else {
            setBarDisplay('hidden')
        }
    }

    const inputHandler = (e) => {
        const searchBarVal = inputField.current.value.toLowerCase();
        setSearchFilter(searchBarVal);
    }

    return (
        <>
            <div className='flex  flex-row justify-start items-center gap-4'>
                <button onClick={toggleBarDisplay} className='outline-0'>
                    {
                        barDisplay === 'hidden' ?
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 outline-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            )
                            :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 outline-0 stroke-gray-400 dark:stroke-white dark:fill-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            )
                    }


                </button>

                <input
                    ref={inputField}
                    type="text"
                    name="search"
                    id="search-bar"
                    onChange={inputHandler}
                    placeholder='Search . . .'
                    className={`${barDisplay} w-48 md:w-64 font-hind text-sm border-b-2 border-slate-800 px-2 outline-0 dark:bg-neutral-800 dark:border-gray-400`}
                />
            </div>
        </>
    )
}
