import React, { useState } from 'react'
import '../../utils/styles/Slideshow.css'

function Carrousel({ slideshow }) {
  let [displayPicture, changePicture] = useState(0)
  let pictureNumber = slideshow.length

  const nextSlide = () => {
    if (displayPicture === 0) {
      changePicture(pictureNumber - 1)
    } else {
      changePicture(displayPicture - 1)
    }
    return changePicture
  }

  const prevSlide = () => {
    if (displayPicture === pictureNumber - 1) {
      changePicture((pictureNumber = 0))
    } else {
      changePicture(displayPicture + 1)
    }
    return changePicture
  }

  return (
    <div className="slideshow_content">
      {slideshow.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === displayPicture
                ? 'slide slideshow_active-picture'
                : 'slide slideshow_inactive-picture'
            }
          >
            {index === displayPicture && (
              <img src={picture} alt="" className="slideshow_picture" />
            )}
          </div>
        )
      })}
      {/* if there's more than one picture  */}
      {pictureNumber > 1 ? (
        <div className="slideshow_arrows">
          <div className="slideshow_prev_arrow">
            <i
              className="fa-solid fa-chevron-left left_arrow"
              onClick={nextSlide}
            ></i>
          </div>
          <div className="slideshow_next_arrow">
            <i
              className="fa-solid fa-chevron-right right_arrow"
              onClick={prevSlide}
            ></i>
          </div>
        </div>
      ) : null}

      <span className="slideshow_number">
        {displayPicture + 1}/{slideshow.length}
      </span>
    </div>
  )
}

export default Carrousel
