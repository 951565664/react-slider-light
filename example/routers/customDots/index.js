import React, { Component } from 'react'
import Slider from '../../../src'

const contentList = [
  { name:'content1'},
  { name:'content2'},
  { name:'content3'},
  { name:'content4'},
]
export default class CustomDots extends Component {
  render() {
    return (
        <Slider isDots={true}>
            {
              contentList.map( (item,key) => (<div key={key}> {item.name}</div>))
            }
        </Slider >
    )
  }
}
