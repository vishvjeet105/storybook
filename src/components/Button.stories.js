import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button'

storiesOf('Button', module)
  .add('kinds', () => (
      <React.Fragment>
    <Button state={{title:"filled button",
            color:"white",
            background:"green"}}
            />
  
    </React.Fragment>
  ))
  .add('Shapes',()=>(
      <React.Fragment>
          <Button state={{title:"Capsular",
            color:"white",
            background:"green",
            borderradius:"30px"}}
          />
          <Button state={{title:"Circle",
            color:"white",
            background:"green",
            borderradius:"30px"}}/>
      </React.Fragment>
  ))
//   .add('Sizes',()=>(
//     <React.Fragment>
//     <Button/>
//     <Button/>
//    </React.Fragment>
//   ))
