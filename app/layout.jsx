import '@styles/globals.css';

export const metadata = {
    title: "Random Cat",
    description: "Generate random cat images!"
}

const Root = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                {/* Changing the background */}
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default Root;