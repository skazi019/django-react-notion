import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';

const articleStore = (set) => ({
    articles: [],
    page: {},
    blocks: [],
    setArticles: (allArticles) => {
        set((state) => ({
            articles: allArticles
        }))
    },
    setPage: (notionPage) => {
        set((state) => ({
            page: notionPage
        }))
    },
    setBlocks: (notionBlocks) => {
        set((state) => ({
            blocks: notionBlocks
        }))
    },
    getPageFromSlug: (slug) => {
        set((state) => ({
            page:
                state.articles.find(function (post) {
                    const blogItem = post.properties.slug.rich_text[0].plain_text === slug
                    if (blogItem) {
                        return post.id
                    }
                })
        }))
    },
});

const useArticleStore = create(
    devtools(
        persist(articleStore,
            // persisting articles so when the blog post page is refreshed it doesn't throw an error.
            // Because when page is refreshed the state it set back to initial state
            {
                name: 'articles-storage', // unique name
                getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
            }
        )
    )
);

export default useArticleStore;