import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addTodo} from '../actions';

//import './style.css';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(ev){
        this.setState({
            inputText: ev.target.value
        })
    }
    
    onSubmit(ev){
        ev.preventDefault(); //
        const inputText = this.state.inputText;
        if(!inputText.trim()){
            return
        }
        this.props.onAdd(inputText);
        this.setState({ inputText: ''});
    }

    render(){
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.inputText} onChange={this.onChange} className="new-todo" />
                    <button type="submit" className="add-btn">添加</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

const mapDispachToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispachToProps)(AddTodo);