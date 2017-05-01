import React from 'react'
import { connect } from 'react-redux';
import Comments from './Comments'



const Post=({comments,title,summary,id})=>{

  return(

    <div>
      <h2>{title}</h2>
      <h3>{summary}</h3>
      <Comments id={id}/>

    </div>

  )
}

export default connect(state=>state,{})(Post)
