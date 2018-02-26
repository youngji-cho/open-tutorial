import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Basic extends Component{
  constructor() {
    super();
    this.state = {
      hidden: false,
    };
    this.name="Nara";
  }

  render() {
    return (
      <div>
        <span>저는 {this.props.lang} 전문 {this.props.name}입니다.</span>
        {!this.state.hidden && <span>{this.props.birth}년에 태어났습니다 </span>}
        <br />
        <br />
        <button onClick={()=>this.setState(()=>({hidden:true}))}>
        숨기기
        </button>
        <div>{this.props.chilren}</div>
      </div>
    );
  }
}

Basic.propTypes={
  name : PropTypes.string.isRequired,
  birth : PropTypes.string.isRequired,
  lang: PropTypes.string
}
Basic.defaultProps ={
  lang:'Javascript'
}
