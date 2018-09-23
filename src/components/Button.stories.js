import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button'

storiesOf('Button', module)
  .add('kinds', () => (
      <React.Fragment>
    <Button state={{title:"filled button",
            color:"white",
            background:"blue"
          }}
            />
    <Button state={{title:"filled button",
      color:"white",
      background:"yellow",
     }}
    />
    <Button state={{title:"outlined",
            color:"green",
            background:"white",
            outline:"2px solid green"}}/>
    </React.Fragment>
  ))
  .add('Shapes',()=>(
      <React.Fragment>
          <Button state={{title:"Capsular",
            color:"white",
            background:"green",
            borderradius:"40%"}}
          />
          <Button state={{title:"Circle",
            color:"white",
            background:"green",
            borderradius:"50%"}}/>
          <Button state={{title:"SharpEdge",
            color:"white",
            background:"green",
            borderradius:"0px"}}/>
         <Button state={{title:"BluntEdge",
            color:"white",
            background:"green",
            borderradius:"4px"}}/>
      </React.Fragment>
  ))
  .add('Sizes',()=>(
    <React.Fragment>
    <Button state={{
      title:"SMALL BUTTON",
      color:"white",
      background:"green",
      width:"30%"
    }}/>
    <Button state={{
      title:"MEDIUM BUTTON",
      color:"white",
      background:"green",
      width:"50%"
    }}/>
     <Button state={{
      title:"LARGE BUTTON",
      color:"white",
      background:"green",
      width:"70%"
    }}/>
   </React.Fragment>
  ))
  .add('Block',()=>(
    <React.Fragment>
    <Button state={{
      title:"BLOCK BUTTON",
      color:"white",
      background:"green",
      width:"100%"
    }}/>
    </React.Fragment>))
  .add('Disabled',()=>(
    <React.Fragment>
    <Button state={{
      title:"Disabled BUTTON",
      color:"white",
      background:"green",
      width:"50%",
      opacity:".25"
    }}/>
    </React.Fragment>))