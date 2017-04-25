import React from 'react'
import { connect } from 'react-redux';




const Post=({title,summary})=>{

  return(

    <div>
      <h2>{title}</h2>
      <h3>{summary}</h3>

    </div>

  )
}

export default connect(state=>state,{})(Post)
