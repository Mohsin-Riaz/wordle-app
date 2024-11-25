import { QRCodeSVG } from 'qrcode.react';
import React, { useState } from 'react';
import { checkWord, getWord } from './api/wordsApi';
import Board from './components/Board';
import Dialog from './components/Dialog';
import ErrorDialog from './components/Error';
import Loading from './components/Loading';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            isError: false,
            selectedWord: '',
            openDialog: false,
            currentGuess: '',
            guessRow: 1,
            playing: true,
            winner: false,
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
        this.closeDialog = this.closeDialog.bind(this);
        this.addCurrentGuess = this.addCurrentGuess.bind(this);
        this.removeCurrentGuess = this.removeCurrentGuess.bind(this);
        this.submitCurrentGuess = this.submitCurrentGuess.bind(this);
    }

    componentDidMount() {
        if (!!this.state.selectedWord) return;
        (async () => {
            try {
                const response = await getWord();

                this.setState({
                    selectedWord: response.data.word,
                    isLoading: false,
                });
            } catch (error) {
                console.log('Error fetching word:', JSON.stringify(error));
                this.setState({
                    isLoading: false,
                });
            }
        })();
    }

    addCurrentGuess(letter) {
        const currentGuess = this.state.currentGuess;
        if (currentGuess.length >= 6) return;
        const update = currentGuess + letter;
        this.setState({ currentGuess: update });
    }

    removeCurrentGuess() {
        const currentGuess = this.state.currentGuess;
        if (currentGuess.length <= 0) return;
        const update = currentGuess.slice(0, -1);
        this.setState((prev) => {
            return { ...prev, currentGuess: update };
        });
    }

    async checkValidGuess(word) {
        this.setState({
            isLoading: true,
        });

        try {
            const response = await checkWord(word);
            return response;
        } catch (error) {
            console.log('not a valid word');
            return false;
        } finally {
            this.setState({
                isLoading: false,
            });
        }
    }

    async submitCurrentGuess() {
        try {
            const isValid = await this.checkValidGuess(this.state.currentGuess);

            if (!isValid) {
                this.setState({ isError: true });

                setTimeout(() => {
                    this.setState({ isError: false });
                }, 1750);
                return;
            }
        } catch (error) {
            console.error('Error submitting guess:', error);
            this.setState({ isLoading: false });
        }
        const currentGuess = Array.from(this.state.currentGuess);
        const word = Array.from(this.state.selectedWord);
        let winState = false;
        let playState = true;
        let newState = {};

        const checkArray = currentGuess.map((v, i) =>
            v === word[i] ? 2 : word.includes(v) ? 1 : 0
        );

        const classArray = this.updateClass(checkArray);
        if (checkArray.every((v) => v === 2)) winState = true;

        if (this.state.guessRow >= 6 && winState == false) playState = false;

        if (winState == true) {
            newState = {
                playing: false,
                winner: true,
                openDialog: true,
            };
        } else if (playState == false) {
            newState = {
                playing: false,
                winner: false,
                openDialog: true,
            };
        }

        this.setState((prev) => ({
            ...prev,
            currentGuess: '',
            guessRow: prev.guessRow + 1,
            [`guess${this.state.guessRow}`]: prev.currentGuess,
            [`guessClass${this.state.guessRow}`]: classArray,
            ...newState,
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

    closeDialog() {
        this.setState({
            openDialog: false,
        });
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <ErrorDialog isError={this.state.isError} />
                {this.state.isLoading ? (
                    <Loading isLoading={this.state.isLoading} />
                ) : (
                    <Dialog {...this.state} closeDialog={this.closeDialog} />
                )}
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
