import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortWay = sort;

  const sortedPosts = useMemo(() => {
    if (sortWay) {
      return [...posts].sort((a, b) =>
        a[sortWay].localeCompare(b[sortWay]))
    }
    return posts
  }, [sortWay, posts])

  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    const searchToLower = query.toLowerCase()
    return sortedPosts.filter(({ title, body }) => (
      title.toLowerCase().includes(searchToLower) ||
      body.toLowerCase().includes(searchToLower)
    ))
  }, [query, sortedPosts])

  return sortedAndSearchedPosts;
}