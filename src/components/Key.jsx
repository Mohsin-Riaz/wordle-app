import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.letter = props.letter;
        this.state = { disabled: false };
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <button
                    className="btn"
                    id={this.letter}
                    onClick={() => this.props.addCurrentGuess(this.letter)}
                    disabled={this.props.disabled}
                    key={this.letter}
                >
                    {this.letter}
                </button>
                <div className="divider"></div>
            </>
        );
    }
}

export default Key;
