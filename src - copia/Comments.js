import React from 'react'
import {addComment,commentChange} from './actions'
import { connect } from 'react-redux';




const Comments=({props,comments,commentChange,addComment,id})=>{
console.log(comments)
const elid=id;
  return(
      <div>
        <h5>Comentarios</h5>
        <textarea rows="4" cols="50"  value={comments} onChange={(e)=>commentChange(e.target.value,elid)}/>


        <div>
          <button onClick={e=>addComment(comments,id)}>Agregar Comentario</button>
          <p>Comentario:{comments}</p>
        </div>
      </div>
  )
}

export default connect(state=>state,{addComment,commentChange})(Comments)
