import React, { Component } from 'react'
import spin from './loading.gif'
export default class Load extends Component {
  render() {
    return (
      <div className='text-center py-20'>
          <img className = 'my-5' src={spin}alt="loading" />
      </div>
    )
  }
}
