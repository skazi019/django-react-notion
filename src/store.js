import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const settingsStore = (set) => ({
    darkMode: true,
    toggleDarkMode: () => {
        set((state) => ({
            darkMode: !state.darkMode
        }))
    }
})

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

const filterstore = (set, get) => ({
    searchFilter: '',
    allTags: [],
    tagFilter: [],
    setSearchFilter: (str) => {
        set((state) => ({
            searchFilter: str
        }))
    },
    setAllTags: (tagList) => {
        set((state) => ({
            allTags: tagList
        }))
    },
    addTagToFilter: (newTag) => {
        set((state) => ({
            tagFilter: [...state.tagFilter, newTag],
            allTags: state.allTags.filter((tag, i) => tag.name !== newTag.name)
        }))
    },
    deleteTagFromFilter: (newTag) => {
        set((state) => ({
            tagFilter: state.tagFilter.filter((tag, i) => tag.name !== newTag.name),
            allTags: [...state.allTags, newTag]
        }))
    },
})

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
const useFilterStore = create(devtools(filterstore));
const useSettingStore = create(
    devtools(
        persist(
            settingsStore,
            {
                name: 'settings-storage',
            }
        )
    )
);

export default useArticleStore;
export { useFilterStore, useSettingStore };