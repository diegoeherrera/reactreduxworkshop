import React from 'react'
import Post from './Post'
import { connect } from 'react-redux';


const ListPosts=({posts,title,summary})=>{
  console.log(posts)
  return (

          <div>
                  {
                posts.map(p=>{

                  return  <Post key={p.id} {...p} />

                              }
                        )
                  }
          </div>
      )
}

export default connect(state=>state.posts,{})(ListPosts)
