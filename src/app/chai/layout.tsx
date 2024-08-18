
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;  // React.ReactNode is a type that represents a valid React node(Typescript type)
}>) {
    return (
        <>
            <h2>ChaiPage Layout Item</h2>
            {children}
        </>
    );
}
