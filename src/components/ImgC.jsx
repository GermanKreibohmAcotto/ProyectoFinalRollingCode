import React from 'react'

const ImgC = ({ urlImage, alt, width }) => {
  return (
    <img src={urlImage} alt={alt} width={width} />
  )
}

export default ImgC