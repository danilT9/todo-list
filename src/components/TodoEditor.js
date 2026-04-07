import { Component } from "react";
import style from "./TodoEditor.module.css";

export class TodoEditor extends Component {
    state = {
        text: ""
    };

    handleChange = (e) => {
        this.setState({text: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length !== 0) {
            this.props.onAdd(this.state.text);
            this.setState({ text: "" });
        };
    };

    render() {
        return (
            <form className={style.form} onSubmit={this.handleSubmit}>
                <input value={this.state.text} onChange={this.handleChange}/>
                <button>add</button>
            </form>
        )
    }
}