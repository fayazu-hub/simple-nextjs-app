export const metadata = {
  title: 'Simple Next.js App',
  description: 'A simple Dockerized Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}