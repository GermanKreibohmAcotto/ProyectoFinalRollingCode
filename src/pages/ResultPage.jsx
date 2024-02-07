import React from 'react'
import { useParams } from 'react-router-dom'

const ResultPage = () => {
    const params = useParams()
    console.log(params.res)

  return (
    <div>ResultPage</div>
  )
}

export default ResultPage