import React from 'react';
class CurrentGuess extends React.Component {
    constructor(props) {
        super(props);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <div className="current-guess" id="current-guess">
                <div>{this.props.state_currentGuess || ''}</div>
            </div>
        );
    }
}

export default CurrentGuess;
