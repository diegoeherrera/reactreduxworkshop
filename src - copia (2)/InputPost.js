import React from 'react'
import {titleChange, summaryChange,addPost} from './actions'
import { connect } from 'react-redux';


const InputPost =({summaryChange,titleChange,addPost,title,summary})=>{

      return (

        <div>
        <h2>Titulo: {title}</h2>
          <div>
          <span>Ingrese Titulo: </span> <input type="text"  onChange={e=>titleChange(e.target.value)}/>
          </div>
          <div>
          <br/><span>Ingrese Texto: </span><input type="text"  onChange={e=>summaryChange(e.target.value)}/>
          </div>
          <div>
            <button onClick={e=>addPost(title,summary)}>Cargar Post!</button>
          </div>


        </div>
      )

}






export default connect(
  state=>state.postEditor,{titleChange,summaryChange,addPost})(InputPost)
