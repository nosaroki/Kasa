import '../../utils/styles/Rating.css'

function Rating(rating) {
  let content = []

  for (let i = 0; i < 5; i++) {
    console.log(rating)
    if (i < parseInt(rating.rating)) {
      console.log(i)
      content.push(<i key={i} className="fa-solid fa-star fullStar"></i>)
    } else {
      console.log(i)
      console.log(parseInt(rating.rating))
      content.push(<i key={i} className="fa-solid fa-star emptyStar"></i>)
    }
  }
  console.log(content)

  return (
    <div className="host_rating">
      {content.map((star) => {
        return star
      })}
    </div>
  )
}

export default Rating
