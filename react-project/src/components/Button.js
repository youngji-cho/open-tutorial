import React from 'react';

export class Button extends React.Components{
  render(){
    <button
				className={ this.props.light ? 'light-button' : 'dark-button' }
        onClick={this.props.onClick}>
				Refresh
			</button>
  }
}
