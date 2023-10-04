import React from 'react';

class GuessRow extends React.Component {
    constructor(props) {
        super(props);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <div className="guess" id={`guess-${this.props.row}`}>
                <div
                    className={this.props.guessClass[0] || 'guess-box no-match'}
                >
                    {this.props.guess[0]}
                </div>
                <div
                    className={this.props.guessClass[1] || 'guess-box no-match'}
                >
                    {this.props.guess[1]}
                </div>
                <div
                    className={this.props.guessClass[2] || 'guess-box no-match'}
                >
                    {this.props.guess[2]}
                </div>
                <div
                    className={this.props.guessClass[3] || 'guess-box no-match'}
                >
                    {this.props.guess[3]}
                </div>
                <div
                    className={this.props.guessClass[4] || 'guess-box no-match'}
                >
                    {this.props.guess[4]}
                </div>
                <div
                    className={this.props.guessClass[5] || 'guess-box no-match'}
                >
                    {this.props.guess[5]}
                </div>
            </div>
        );
    }
}

export default GuessRow;
