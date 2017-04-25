import React from 'react'
import Post from './Post'
import { connect } from 'react-redux';


const ListPosts=({posts})=>{
  return (

          <div>


          console.log("aca esta "+posts)
                //   {
                // posts.map(p=>{
                //
                //   <Post {...p} />
                //
                //               }
                //         )
                //   }

          </div>
      )
}




export default connect(state=>state,{})(ListPosts)
