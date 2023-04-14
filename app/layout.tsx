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
      <body className='max-w-7xl mx-auto'>
        <AppBar />
        {children}
      </body>
    </html>
  )
}
