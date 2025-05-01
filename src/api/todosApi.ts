async function fetchTodos() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return posts
}
export { fetchTodos }