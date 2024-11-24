import React from 'react';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    closeDialog() {
        this.props.closeDialog();
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <dialog className="popup" id="popup" open={this.props.openDialog}>
                <button
                    className="close-popup-button"
                    onClick={() => {
                        this.closeDialog();
                    }}
                >
                    X
                </button>
                {this.props.winner ? (
                    <>
                        <h1>Congrats</h1>
                        <p>
                            You guessed correctly in{' '}
                            <strong>
                                {this.props.guessRow < 3
                                    ? `${this.props.guessRow - 1} try`
                                    : `${this.props.guessRow - 1} tries`}
                            </strong>
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Sorry, you guessed incorrectly</h1>
                        <p>
                            The word was:{' '}
                            <a
                                href={`https://www.dictionary.com/browse/${this.props.selectedWord}`}
                            >
                                {this.props.selectedWord}
                            </a>
                            , refresh to try again with a new word.
                        </p>
                    </>
                )}
            </dialog>
        );
    }
}

export default Dialog;
