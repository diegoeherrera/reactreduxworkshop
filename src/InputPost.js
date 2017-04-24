import React from 'react'
import {titleChange, summaryChange} from './actions'
import { connect } from 'react-redux';


const InputPost =({summaryChange,titleChange,title,summary})=>{

      return (
        <div>
          <input type="text" value={title} onChange={e=>titleChange(e.target.value)}/>
          <input type="text" value={summary} onChange={e=>summaryChange(e.target.value)}/>
        </div>
      )

}






export default connect(
  state=>state.editor,{titleChange,summaryChange})(InputPost)
