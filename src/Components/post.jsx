import { Fragment, useEffect, useState } from "react";
import useArticleStore, { useFilterStore } from '../store';
import { renderBlock } from "./renderblock";
import PostLoader from "./postloader";
import Navbar from "./navbar";
import { getFormattedDate } from "./utilities";
import Footer from "./footer";
import SEO from '../seo';
import logo from '../assets/logos/KS logo-04.png'

export default function Post({ page }) {


    const [isLoading, setLoading] = useState(true);

    const displayDate = getFormattedDate(new Date(page.properties.date.date.start));

    const { blocks, setBlocks } = useArticleStore((state) => ({
        blocks: state.blocks,
        setBlocks: state.setBlocks,
    }));

    const { setSearchFilter, setAllTags } = useFilterStore(
        (state) => ({
            setSearchFilter: state.setSearchFilter,
            setAllTags: state.setAllTags,
        })
    )

    function getBlocks(id) {
        fetch(process.env.REACT_APP_BACKEND_URI + '/get-blocks/' + id,
            {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                }
            }
        )
            .then(async (response) => {
                const res = await response.json();
                setBlocks(res.page_contents);
                setLoading(false);
            })
    }

    const setPageMetaData = (currentPage) => {
        const canonicalUrl = document.querySelector('#canonical-url');
        const titleIcon = document.querySelector('#title-logo');
        const appleTitleLogo = document.querySelector('#title-apple-logo');
        const descriptionElement = document.querySelector('#title-description');
        const ogTitleElement = document.querySelector('#title-og-title');
        const ogDescriptionElement = document.querySelector('#title-og-description');
        const ogImageElement = document.querySelector('#title-og-image');
        const twTitleElement = document.querySelector('#title-twitter-title');
        const twDescriptionElement = document.querySelector('#title-twitter-description');
        const twImageElement = document.querySelector('#title-twitter-image');

        const title = currentPage.properties.title.title[0].plain_text;
        const summary = currentPage.properties.summary.rich_text[0].plain_text;

        document.title = title
        canonicalUrl.setAttribute('href', window.location.href);
        titleIcon.setAttribute('href', logo);
        appleTitleLogo.setAttribute('href', logo);
        ogTitleElement.setAttribute('content', title);
        twTitleElement.setAttribute('content', title);

        descriptionElement.setAttribute('content', summary);
        ogDescriptionElement.setAttribute('content', summary);
        twDescriptionElement.setAttribute('content', summary);

        ogImageElement.setAttribute('content', logo);
        twImageElement.setAttribute('content', logo);
    }

    useEffect(() => {
        // setPageMetaData(page);
        getBlocks(page.id);

        return () => {
            setBlocks([]);
            setSearchFilter('');
            setAllTags([]);
            document.title = 'Kaushal Sharma\'s Blog'
        }
    }, [])


    return (
        <>
            <SEO
                title={page.properties.title.title[0].plain_text}
                description={page.properties.summary.rich_text[0].plain_text}
                url={window.location.href}
            />
            <main className="transition duration-300 min-h-screen pb-8 dark:bg-neutral-800 dark:text-gray-200">
                <Navbar />
                <section className="pt-10">
                    <article className='py-20 px-6 md:px-0 mx-auto md:w-sm lg:w-md lg:max-w-4xl'>
                        <p className="text-sm text-gray-500 font-hind dark:text-gray-300">Kaushal's Blog</p>
                        <h1 className="text-4xl font-oswald font-semibold mt-4 dark:text-white">
                            {page.properties.title.title[0].plain_text}
                        </h1>
                        <p className="text-sm font-hind text-gray-500 mt-2 dark:text-gray-300">{displayDate}</p>
                        {
                            !isLoading ?
                                (
                                    <>
                                        <section className="mt-4">
                                            {blocks.map((block, key) => (
                                                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                                            ))}
                                        </section>
                                    </>
                                )
                                :
                                (
                                    <PostLoader />
                                )
                        }
                    </article>
                </section>
                <Footer />
            </main>
        </>
    );
}
