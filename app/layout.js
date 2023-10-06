import './globals.css'

export const metadata = {
  title: 'Dxni Template',
  description: 'Wonderful website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}
