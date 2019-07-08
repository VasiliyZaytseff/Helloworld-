import React from 'react';
import './App.css';

export class Text extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        edit: false,
        string: ""
      };
  };

  onEdit = () => {
    this.setState({ edit: true });
  };

  setName = (event) => {
    this.setState({string: event.target.value});
  };

  onSave = () => {
    this.setState({ edit: false });
  };

  check = () => {
   var str = this.state.string;
   if (str){
    return str[0] === str[0].toUpperCase();
   }
  };

  render() {
    return ( 
			<div>
				<div>
					<h1> Hello, world!!! </h1>  
					<p className = { this.check() ? "bold" : "oblique" } hidden = { this.state.edit } >{ this.state.string }</p>  
					<textarea hidden = { this.state.edit } onChange = { this.setName } ></textarea>  
				</div>  
				<button hidden = { this.state.edit } onClick = { this.onEdit } > Ввести имя </button>  
				<button hidden = {!this.state.edit } onClick = { this.onSave } > Ok </button>  
			</div>
    );
  }
}
export default Text ;
