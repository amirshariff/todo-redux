import React, { Component } from 'react';
import { addStudent } from './action';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:""
        }
    }
    
	addStudent = () => {
		// e.prevent.default()
		this.props.dispatch({
			type: 'ADDSTUDENT',
			payLoad: { firstName: this.state.firstName },
		});
    };
    
    handleChange = (e) => {
        let firstName = e.target.value
        this.setState({firstName})
    }

	render() {
		return (
			<form>
                <input name="firstName" value={this.state.firstName} onChange={(e) => {
                    this.handleChange(e)
                }}/>
				<button onClick={this.addStudent} type="button">submit</button>
			</form>
		);
	}
}
const mapToState = (state) => {
	return {
		students: state.students,
	};
};

export default connect(mapToState)(Form);
