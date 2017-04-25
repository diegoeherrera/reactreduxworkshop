import React from 'react'
import { connect } from 'react-redux';




const Post=({title})=>{
  console.log("title")
  return(
    <div>
      <h2>{title[0]}</h2>
    </div>
  )
}

export default Post
