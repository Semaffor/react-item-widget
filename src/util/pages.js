export const getPageCount = (totalCount, limit) => {
  console.log(totalCount, limit)
  return Math.ceil(totalCount/limit)
}
