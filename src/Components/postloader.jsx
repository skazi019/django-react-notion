export default function PostLoader() {
    return (
        <div className="my-8 animate-pulse w-168">
            <div className="flex flex-col gap-6">
                {/* heading */}
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-44"></div>
                {/* para */}
                <div className="space-y-3">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-4"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-8"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>

                <div className="h-48 bg-slate-200 rounded"></div>
                <div className="mx-8 h-10 border-4 border-slate-200 rounded"></div>

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