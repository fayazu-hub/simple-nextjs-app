export default function Home() {
  return (
    <main>
      <h1>Hello from Dockerized Next.js!</h1>
      <p>This is a simple Next.js application running in a Docker container.</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </main>
  )
}