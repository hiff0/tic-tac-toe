import React from "react";

export class Square extends React.Component {
    constructor(props) {
        super(props); //вызвает родительский конструктор React.Component
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <button className="square"
                onClick={() => { this.setState({ value: 'X' }) }}>
                {this.state.value}
            </button>
        );
    }
}