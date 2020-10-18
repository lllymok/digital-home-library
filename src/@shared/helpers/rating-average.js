const countRatingAverage = (reviews) => {
  const numArray = reviews.map(({ rating }) => rating)
  const rating = numArray.reduce((acc, value) => {
    return acc + value
  }, 0)

  const num = rating / reviews.length
  return num.toFixed(2)
}

export default countRatingAverage
