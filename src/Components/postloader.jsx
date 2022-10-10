export default function PostLoader() {
    return (
        <div className="my-8 animate-pulse px-6 md:px-0 mx-auto md:w-sm lg:w-md lg:max-w-4xl">
            <div className="flex flex-col gap-6">
                {/* heading */}
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-44 md:w-44"></div>
                {/* para */}
                <div className="space-y-3">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-4"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-8"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>

                <div className="h-48 md:h-64 lg:h-96 bg-slate-200 rounded"></div>
                <div className="mx-8 h-14 md:h-24 lg:h-38 border-4 border-slate-200 rounded"></div>

                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>

                <div className="h-4 bg-slate-200 rounded w-64"></div>
                {/* para */}
                <div className="space-y-3">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-4"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-8"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    )
}