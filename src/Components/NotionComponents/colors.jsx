
export const colorToClass = {
    "default": "bg-neutral-100 text-gray-800 dark:bg-neutral-600 dark:text-gray-100",
    "gray": "bg-neutral-100 text-gray-800 dark:bg-neutral-600 dark:text-gray-100",
    "brown": "bg-amber-100 text-amber-500 dark:bg-amber-500/60 dark:text-amber-100",
    "orange": "bg-orange-100 text-orange-500 dark:bg-orange-500/60 dark:text-orange-100",
    "yellow": "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/60 dark:text-yellow-100",
    "green": "bg-emerald-100 text-emerald-500 dark:bg-emerald-500/60 dark:text-emerald-100",
    "blue": "bg-blue-100 text-blue-500 dark:bg-blue-500/60 dark:text-blue-100",
    "purple": "bg-purple-100 text-purple-500 dark:bg-purple-500/60 dark:text-purple-100",
    "pink": "bg-pink-100 text-pink-500 dark:bg-pink-500/60 dark:text-pink-100",
    "red": "bg-red-100 text-red-500 dark:bg-red-500/60 dark:text-red-100",
    "gray_background": "bg-neutral-100 text-gray-800 dark:bg-neutral-600 dark:text-gray-100",
    "brown_background": "bg-amber-100 text-amber-500 dark:bg-amber-500/60 dark:text-amber-100",
    "orange_background": "bg-orange-100 text-orange-500 dark:bg-orange-500/60 dark:text-orange-100",
    "yellow_background": "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/60 dark:text-yellow-100",
    "green_background": "bg-emerald-100 text-emerald-500 dark:bg-emerald-500/60 dark:text-emerald-100",
    "blue_background": "bg-blue-100 text-blue-500 dark:bg-blue-500/60 dark:text-blue-100",
    "purple_background": "bg-purple-100 text-purple-500 dark:bg-purple-500/60 dark:text-purple-100",
    "pink_background": "bg-pink-100 text-pink-500 dark:bg-pink-500/60 dark:text-pink-100",
    "red_background": "bg-red-100 text-red-500 dark:bg-red-500/60 dark:text-red-100",
}

export const getNotationColor = (mode) => {
    if (mode) {
        return {
            "default": "#94a3b8", //slate-400
            "gray": "#94a3b8", //slate-400
            "brown": "#fb923c", //orange-300
            "orange": "#fb923c", // orange-300
            "yellow": "#eab308", // yellow-300
            "green": "#10b981", //emerald-500
            "blue": "#0891b2", //cyan-400
            "purple": "#8b5cf6", //purple-500
            "pink": "#f472b6", //pink-400
            "red": "#f43f5e", //rose-500
            "gray_background": "#94a3b8",
            "brown_background": "#fb923c",
            "orange_background": "#fb923c",
            "yellow_background": "#eab308",
            "green_background": "#10b981",
            "blue_background": "#0891b2",
            "purple_background": "#8b5cf6",
            "pink_background": "#f472b6",
            "red_background": "#f43f5e",
        }
    } else {
        return {
            "default": "#475569", //slate-600
            "gray": "#94a3b8",
            "brown": "#fb923c", // orange-400
            "orange": "#fb923c",
            "yellow": "#facc15",
            "green": "#34d399",
            "blue": "#67e8f9",
            "purple": "#a78bfa",
            "pink": "#f9a8d4",
            "red": "#fb7185",
            "gray_background": "#94a3b8",
            "brown_background": "#fb923c",
            "orange_background": "#fb923c",
            "yellow_background": "#facc15",
            "green_background": "#34d399",
            "blue_background": "#67e8f9",
            "purple_background": "#a78bfa",
            "pink_background": "#f9a8d4",
            "red_background": "#fb7185",
        }
    }
}