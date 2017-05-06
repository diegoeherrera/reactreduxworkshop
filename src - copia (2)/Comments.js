import React from 'react'
import {addComment,commentChange} from './actions'
import { connect } from 'react-redux';




const Comments=({props,comments,comment,commentChange,addComment,id})=>{
console.log(comments)


  return(
      <div>
        <h5>Comentarios:</h5>
        <textarea rows="4" cols="50"  onChange={(e)=>commentChange(e.target.value,id)}/>


        <div>
          <button onClick={e=>addComment(comment,id)}>Agregar Comentario</button>

        </div>
      </div>
  )
}

export default connect(state=>state.postEditor,{addComment,commentChange})(Comments)
