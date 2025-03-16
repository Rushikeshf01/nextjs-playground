export default function ProductLayout({
    children
    }: {
        children : React.ReactNode;
    }) {
    return (
        <div>
            {children}
            <p>Featured Product section</p>
        </div>
    )
}