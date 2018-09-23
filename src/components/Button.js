import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonCategory=styled.button.attrs({
    margin:'5px',
    padding:'15px',
    width:props=>props.width,
    background:props=>props.background,
    color:props=>props.color,
    border:props=>props.bordercolor,
    outline:props=>props.outline,
    borderradius:props=>props['border-radius'] ,
    opacity:props=>props.opacity
})`
      background:${props=>props.background};
      border-color:${props=>props.border};
      color:${props=>props.color};
      margin:${props=>props.margin};
      outline:${props=>props.outline};
      border-radius:${props => props.borderradius };
      padding:${props=>props.padding};
      width:${props=>props.width};
      opacity:${props=>props.opacity};
`;

class Button extends Component{

    render(){
        
        var {title,color,background,borderradius=null,outline=null,width=null,opacity=null}=this.props.state;
       // var other=Object.assign({},this.props.state)
        // console.log(test);
        return(
       <ButtonCategory color={color}
                    background={background}
                    border-radius = {borderradius}
                    outline={outline}
                    width={width}
                    opacity={opacity}
                       >{title}
       </ButtonCategory>
        )
    }
}
Button.defaultProps={
    color:'transparent',
}
Button.propTypes={
    state:PropTypes.object
}
export default Button;