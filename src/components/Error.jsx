import React from 'react';
class ErrorDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.dialogRef = React.createRef();
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isError !== this.props.isError) {
            if (this.props.isError) {
                this.setState({ visible: true }); // Fade in
            } else {
                this.fadeOut(); // Trigger fade-out
            }
        }
    }

    fadeOut() {
        const dialog = this.dialogRef.current;
        if (dialog) {
            dialog.classList.remove('fade-in');
            dialog.classList.add('fade-out');
            setTimeout(() => this.setState({ visible: false }), 500); // Match the CSS fade duration
        }
    }

    render() {
        return this.state.visible ? (
            <dialog
                ref={this.dialogRef}
                className={`error-popup ${
                    this.props.isError ? 'fade-in' : 'fade-out'
                }`}
                id="error-popup"
                open={this.props.isError || false}
            >
                NOT A REAL WORD
            </dialog>
        ) : null;
    }
}

export default ErrorDialog;
