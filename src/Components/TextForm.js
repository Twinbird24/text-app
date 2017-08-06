import React, { Component } from 'react';
import { Grid, Col, Well, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../SCSS/TextForm.css';

class TextForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	inputValue: ''
	    };
	    this.sendText = this.sendText.bind(this);
	    this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleKeyPress(target) {
		if(target.charCode === 13) {
			this.sendText();
		}
	}

	sendText() {
	    let messageArea = document.getElementsByClassName('messageArea')[0];
	    let text = document.createElement('p');
	    text.innerHTML = this.state.inputValue;
	    messageArea.appendChild(text);
	    this.setState({
	    	inputValue: ''
	    });
	}

	updateInputValue(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

  	render() {
	    return (
	      <Grid>
	      	<Col xs={6} xsOffset={3}>
	      		<Well>
	      			<div className="messageArea">

	      			</div>
	      			<FormGroup>
	      				<FormControl
	      					value={this.state.inputValue}
	      					onChange={e => this.updateInputValue(e)}
	      					onKeyPress={this.handleKeyPress}
	      				/>
	      				<Button color="primary" onClick={this.sendText}>Send</Button>
	      			</FormGroup>
	      		</Well>
	      	</Col>
	      </Grid>
	    );
  	}
}

export default TextForm;