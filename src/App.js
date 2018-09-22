import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight,faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleRight,faArrowCircleDown)


class App extends Component {
  render() {
    return (
      <div className="App">
      {this.props.sideBarProperty.title}
      </div>
    );
  }
}
App.defaultProps={
  sideBarProperty:{class:"SideBar",title:"styled-button-ui",
  Buttonprops:{title:"Buttons",buttontypes:["kind","shapes","sizes","block"]},
  inputType:"text"
  },
  buttonproperty:"title",
}
export default App;
