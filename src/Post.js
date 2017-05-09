import React from 'react'
import { connect } from 'react-redux';
import Comments from './Comments'



const Post=({title,summary,id,posts})=>{

  return(

    <div>
      <h2>{title}</h2>
      <h3>{summary}</h3>
      <Comments id={id}/>

    </div>

  )
}

export default connect(state=>state,{})(Post)
