import React from 'react';
import Button from './Button';
import Key from './Key';
class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.key = {};
        this.key.top = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        this.key.mid = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
        this.key.bot = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

        this.deleteHandler = this.deleteHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    deleteHandler() {
        this.props.removeCurrentGuess();
    }

    submitHandler() {
        this.props.submitCurrentGuess();
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        const disableGame = !this.props.playing;
        const disableDelete = !this.props.currentGuess.length;
        const disableSubmit = this.props.currentGuess.length === 0;
        const disableKeys = this.props.currentGuess.length >= 6;

        return (
            <>
                <div className="keyboard keyboard-top-row">
                    {this.key.top.map((v) => (
                        <Key
                            key={v}
                            letter={v}
                            {...this.props}
                            disabled={disableGame || disableKeys}
                        />
                    ))}
                </div>
                <div className="keyboard keyboard-middle-row">
                    {this.key.mid.map((v) => (
                        <Key
                            key={v}
                            letter={v}
                            {...this.props}
                            disabled={disableGame || disableKeys}
                        />
                    ))}
                </div>
                <div className="keyboard keyboard-bottom-row">
                    {this.key.bot.map((v) => (
                        <Key
                            key={v}
                            letter={v}
                            {...this.props}
                            disabled={disableGame || disableKeys}
                        />
                    ))}
                </div>
                <div className="keyboard">
                    <Button
                        handler={this.deleteHandler}
                        name={'delete'}
                        disabled={disableDelete}
                    />
                    <div className="divider"></div>
                    <Button
                        handler={this.submitHandler}
                        name={'submit'}
                        disabled={disableGame || disableSubmit || !disableKeys}
                    />
                </div>
            </>
        );
    }
}

export default Keyboard;
