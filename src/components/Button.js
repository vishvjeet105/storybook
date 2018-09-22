import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonCategory=styled.button.attrs({
    margin:'5px',
    background:props=>props.background,
    color:props=>props.color,
    border:props=>props.bordercolor,
    outline:props=>props.outline?props.outline:null,
    borderradius:props=>props.borderradius?"50%":null
})`
      background:${props=>props.background};
      border-color:${props=>props.border};
      color:${props=>props.color};
      margin:${props=>props.margin};
      outline:${props=>props.outline}
      border-radius:${props=>props.borderradius};
`;

class Button extends Component{

    render(){
    console.log(this.props.state)
        
        var {title,color,background}=this.props.state;
        return(
       <ButtonCategory color={color}
                       background={background}
                       >{title}
       </ButtonCategory>
        )
    }
}
Button.propTypes={
    state:PropTypes.object
}
export default Button;