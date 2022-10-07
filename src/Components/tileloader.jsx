export default function TileLoader() {
    return (
        <div className="my-8 animate-pulse w-160">
            <div className="flex flex-col gap-6">
                <div className="h-2 bg-slate-200 rounded w-44"></div>
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    )
}