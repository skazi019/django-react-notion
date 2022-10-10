import React from 'react';
import SearchBar from './searchBar';
import TagFilter from './tagsFilter';

export default function Filter() {
    return (
        <section className="my-8 w-full flex flex-row justify-between">
            <SearchBar />
            <TagFilter />
        </section>
    )
}
