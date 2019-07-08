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

  edit = () => {
    this.setState({ edit: true });
  };

  setname = (event) => {
    this.setState({string: event.target.value});
  };

  save = () => {
    this.setState({ edit: false });
  };

  check = () => {
   if (str != null){
    var str = this.state.string;
    if (str[0] === str[0].toUpperCase()) {
      return (true);
    } else {
      return (false);
    } 
   }
  };

  render() {
    return ( 
			<div>
				<div>
					<h1> Hello, world!!! </h1>  
					<p className = { this.check() ? "bold" : "oblique" } hidden = { this.state.edit } >{ this.state.string }</p>  
					<textarea hidden = { this.state.edit } onChange = { this.setname } ></textarea>  
				</div>  
				<button hidden = { this.state.edit } onClick = { this.edit } > Ввести имя </button>  
				<button hidden = {!this.state.edit } onClick = { this.save } > Ok </button>  
			</div>
    );
  }
}
export default Text ;
