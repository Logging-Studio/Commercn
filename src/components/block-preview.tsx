export function BlockPreview({children, fullWidth = false}: {children: React.ReactNode, fullWidth?: boolean}) {
    if (fullWidth) {
        return (
            <div className="min-h-[200px] not-prose border rounded-xl overflow-hidden">
                {children}
            </div>
        )
    }
    
    return (
        <div className="min-h-[500px] not-prose flex flex-col justify-center items-center p-4 lg:p-8 border rounded-xl">
            {children}
        </div>
    )
}