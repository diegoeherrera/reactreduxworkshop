import React from 'react'
import {addComment,commentChange} from './actions'
import { connect } from 'react-redux';





const Comments=({props,comments,comment,commentChange,addComment,id})=>{
console.log(comments)

document.addEventListener("click", function(){
    document.getElementById("comments").value = "";
});

let inputComent=""
const testear = function(comment,id){
  addComment(comment,id)
  inputComent.value=""
}
  return(
      <div>
        <h5>Comentarios:</h5>
        <textarea rows="4" id="comments" ref={(input) => { inputComent = input; }} cols="50" onChange={(e)=>commentChange(e.target.value,id)}/>

         <button  onClick={(e)=>testear(comment,id)}>Agregar Comentario</button>
        <div>

          {
            console.log("comments from comments: ",comments)
          }

        </div>
      </div>
  )
}

export default connect(state=>state.postEditor,{addComment,commentChange})(Comments)


/*    <button onClick={e=>addComment(comment,id)}>Agregar Comentario</button>*/
