export function BlockPreview({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-[500px] not-prose flex flex-col justify-center items-center p-4 lg:p-8 border rounded-xl">
            {children}
        </div>
    )
}