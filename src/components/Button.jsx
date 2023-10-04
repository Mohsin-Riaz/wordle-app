import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disabled: true };
    }

    toggleDisable() {
        this.setState((prev) => {
            return {
                disabled: !prev.disabled,
            };
        });
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <button
                className="btn"
                id={this.props.name}
                disabled={this.props.disabled}
                onClick={this.props.handler}
            >
                {this.props.name}
            </button>
        );
    }
}

export default Button;
