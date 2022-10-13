import React, { useState, useEffect } from 'react'
import useArticleStore, { useFilterStore } from '../store';
import Tags from './NotionComponents/tags';
import { containsObject } from './utilities';

export default function TagFilter() {
    const [filterDisplay, setFilterDisplay] = useState('hidden');

    const articles = useArticleStore((state) => state.articles)

    const { allTags, setAllTags, tagFilter, addTagToFilter, deleteTagFromFilter } = useFilterStore(
        (state) => ({
            allTags: state.allTags,
            setAllTags: state.setAllTags,
            tagFilter: state.tagFilter,
            addTagToFilter: state.addTagToFilter,
            deleteTagFromFilter: state.deleteTagFromFilter,
        })
    );

    const toggleTagFilterDisplay = () => {
        if (filterDisplay === 'hidden') {
            setFilterDisplay('block');
        } else {
            setFilterDisplay('hidden');
        }
    }

    const [localTagList, updateLocalTagList] = useState([]);

    const addTag = (Tags) => {
        Tags.map((tag, i) => {
            if (!containsObject(tag, localTagList)) {
                updateLocalTagList(localTagList.push(tag))
            }
        })
    }

    function iterateOverArticles(allArticles) {
        allArticles.map((article, i) => {
            addTag(article.properties.tags.multi_select)
        })
    }

    useEffect(() => {
        iterateOverArticles(articles);
        setAllTags(localTagList);
    }, [])

    return (
        <>
            <div className='flex flex-row justify-start items-center gap-4'>
                <div className='relative'>
                    <button onClick={toggleTagFilterDisplay} className=''>
                        {
                            filterDisplay === 'hidden' ?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                    </svg>
                                )
                                :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                                    </svg>

                                )
                        }
                    </button>

                    <div className={`${filterDisplay} absolute w-64 top-6 right-0 bg-white border border-gray-200 rounded`}>
                        <div className='flex flex-row flex-wrap gap-2 bg-amber-100/50 border-b border-gray-200 p-2'>
                            {
                                tagFilter.length > 0 ?
                                    (
                                        <Tags tags={tagFilter} callback={deleteTagFromFilter} />
                                    )
                                    :
                                    (
                                        <p className='text-xs text-gray-500'>Select tags from below to filter articles</p>
                                    )
                            }
                        </div>
                        <div className='flex flex-row flex-wrap p-2 gap-2 bg-slate-100/30'>
                            <Tags tags={allTags} callback={addTagToFilter} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
