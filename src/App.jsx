import { QRCodeSVG } from 'qrcode.react';
import React, { useState } from 'react';
import Board from './components/Board';
import selectedWord from './functions/word-select';

class App extends React.Component {
    constructor() {
        super();
        this.selectedWord = selectedWord;
        this.openDialog = false;
        this.state = {
            state_openDialog: false,
            state_currentGuess: '',
            state_guessRow: 1,
            state_playing: true,
            state_winner: null,
            guess1: '',
            guessClass1: [],
            guess2: '',
            guessClass2: [],
            guess3: '',
            guessClass3: [],
            guess4: '',
            guessClass4: [],
            guess5: '',
            guessClass5: [],
            guess6: '',
            guessClass6: [],
        };
        this.addCurrentGuess = this.addCurrentGuess.bind(this);
        this.removeCurrentGuess = this.removeCurrentGuess.bind(this);
        this.submitCurrentGuess = this.submitCurrentGuess.bind(this);
    }

    addCurrentGuess(letter) {
        const { state_currentGuess } = this.state;
        if (state_currentGuess.length >= 6) return;
        const update = state_currentGuess + letter;
        this.setState((prev) => {
            return { ...prev, state_currentGuess: update };
        });
    }

    removeCurrentGuess() {
        const { state_currentGuess } = this.state;
        if (state_currentGuess.length <= 0) return;
        const update = state_currentGuess.slice(0, -1);
        this.setState((prev) => {
            return { ...prev, state_currentGuess: update };
        });
    }

    submitCurrentGuess() {
        const currentGuess = Array.from(this.state.state_currentGuess);
        const word = Array.from(this.selectedWord);
        const checkArray = currentGuess.map((v, i) =>
            v === word[i] ? 2 : word.includes(v) ? 1 : 0
        );

        const classArray = this.updateClass(checkArray);

        if (checkArray.every((v) => v === 2)) {
            console.log('winner');
            this.setState((prev) => ({
                ...prev,
                state_playing: false,
                state_winner: true,
                state_openDialog: true,
            }));
        }

        if (
            this.state.state_guessRow >= 6 &&
            this.state.state_winner === null
        ) {
            this.setState((prev) => ({
                ...prev,
                state_playing: false,
                state_winner: false,
                state_openDialog: true,
            }));
        }

        this.setState((prev) => ({
            ...prev,
            state_currentGuess: '',
            state_guessRow: prev.state_guessRow + 1,
            [`guess${this.state.state_guessRow}`]: prev.state_currentGuess,
            [`guessClass${this.state.state_guessRow}`]: classArray,
        }));
    }

    updateClass(updateArray) {
        const classTypes = {
            0: 'guess-box no-match',
            1: 'guess-box some-match',
            2: 'guess-box exact-match',
        };
        return updateArray.map((v) => classTypes[v]);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }
    render() {
        return (
            <>
                <dialog
                    className="popup"
                    id="popup"
                    open={this.state.state_openDialog}
                >
                    <button
                        className="close-popup-button"
                        onClick={() => {
                            this.setState((prev) => ({
                                ...prev,
                                state_openDialog: false,
                            }));
                        }}
                    >
                        X
                    </button>
                    {this.state.state_winner ? (
                        <>
                            <h1>Congrats</h1>
                            <p>
                                You guessed correctly in{' '}
                                <strong>
                                    {this.state.state_guessRow < 3
                                        ? `${this.state.state_guessRow - 1} try`
                                        : `${
                                              this.state.state_guessRow - 1
                                          } tries`}
                                </strong>
                            </p>
                        </>
                    ) : (
                        <>
                            <h1>Sorry, you guessed incorrectly</h1>
                            <p>
                                The word was: {this.selectedWord}, refresh to
                                try again with a new word.
                            </p>
                        </>
                    )}
                </dialog>
                <div className="qr">
                    <div>This site is meant for mobile, try it!</div>
                    <QRCodeSVG
                        className="qrcode"
                        value={window.location.href}
                    />
                </div>

                <header>Wordle Clone</header>
                <Board
                    {...this.state}
                    addCurrentGuess={this.addCurrentGuess}
                    removeCurrentGuess={this.removeCurrentGuess}
                    submitCurrentGuess={this.submitCurrentGuess}
                    updateClass={this.updateClass}
                />
            </>
        );
    }
}

export default App;
