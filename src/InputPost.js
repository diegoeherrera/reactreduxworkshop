import React from 'react'
import {titleChange, summaryChange,addPost} from './actions'
import { connect } from 'react-redux';


const InputPost =({summaryChange,titleChange,title,summary,addPost})=>{

      return (
        <div>
          <div>
          <span>Ingrese Titulo: </span> <input type="text" value={title} onChange={e=>titleChange(e.target.value)}/>
          </div>
          <div>
          <br/><span>Ingrese Texto: </span><input type="text" value={summary} onChange={e=>summaryChange(e.target.value)}/>
          </div>
          <div>
            <button onClick={e=>addPost({title,summary})}>Cargar Post!</button>
          </div>
          

        </div>
      )

}






export default connect(
  state=>state.editor,{titleChange,summaryChange,addPost})(InputPost)
