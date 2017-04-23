import React from 'react'
import {titleChange}from './actions'
import { connect } from 'react-redux';


const InputPost =({titleChange,title})=>{



      return (
        <div>
          <input type="text" value={title} onChange={e=>titleChange(e.target.value)}/>
        </div>
      )



}

function mapStateToProps(state) {
  return state.editor;
}




export default connect(
  mapStateToProps)(InputPost)
