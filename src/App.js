import React, { Component } from 'react';
import InputPost from './InputPost'
import ListPosts from './ListPosts'
import {connect} from 'react'




class App extends Component {
  render() {
    return (<div>
      <InputPost />
      <ListPosts/>
      </div>
    );
  }
}

export default App
