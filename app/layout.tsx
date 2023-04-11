import AppBar from './components/appbar'
import './globals.css'

export const metadata = {
  title: 'Nauzet\'s Portfolio',
  description: 'Nauzet Hernández Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
        </h1>
        {children}
        <p>adios</p>
      </body>
    </html>
  )
}
