import React from 'react';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: ''
        }
        this.onChange = this.onChange.bind(this);
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
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.inputText} onChange={this.onChange}/>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}