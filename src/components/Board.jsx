import React from 'react';
import CurrentGuess from './CurrentGuess';
import GuessRow from './GuessRow';
import Keyboard from './Keyboard';
class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <form className="guesses" id="wordle-guesses">
                    <div className="past-guesses" id="wordle-past-guess">
                        <GuessRow
                            row={1}
                            updateClass={this.props.updateClass}
                            guess={this.props.guess1}
                            guessClass={this.props.guessClass1}
                        />
                        <GuessRow
                            row={2}
                            updateClass={this.props.updateClass}
                            guess={this.props.guess2}
                            guessClass={this.props.guessClass2}
                        />
                        <GuessRow
                            row={3}
                            updateClass={this.props.updateClass}
                            guess={this.props.guess3}
                            guessClass={this.props.guessClass3}
                        />
                        <GuessRow
                            row={4}
                            updateClass={this.props.updateClass}
                            guess={this.props.guess4}
                            guessClass={this.props.guessClass4}
                        />
                        <GuessRow
                            row={5}
                            updateClass={this.props.updateClass}
                            guess={this.props.guess5}
                            guessClass={this.props.guessClass5}
                        />
                        <GuessRow
                            row={6}
                            updateClass={this.props.updateClass}
                            guess={this.props.guess6}
                            guessClass={this.props.guessClass6}
                        />
                    </div>
                </form>
                <footer className="footer" id="keys">
                    <CurrentGuess {...this.props} />
                    <Keyboard {...this.props} />
                </footer>
            </>
        );
    }
}

export default Board;
