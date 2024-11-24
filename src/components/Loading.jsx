import React from 'react';
import { CgSpinner } from 'react-icons/cg';
class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <dialog
                className="loading-popup"
                id="loading-popup"
                open={this.props.isLoading}
            >
                <CgSpinner className="spinner" />
            </dialog>
        );
    }
}

export default Loading;
