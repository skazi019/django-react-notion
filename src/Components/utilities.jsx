
export const containsObject = (obj, list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === obj.name) {
            return true;
        }
    }
    return false;
}

export const getFormattedDate = (originalDate) => {
    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(originalDate);
}

export async function fetchAllArticles(setArticlesFunc) {
    fetch(process.env.REACT_APP_BACKEND_URI + '/get-database/',
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
            const result = res.results;
            setArticlesFunc(result)
        })
}