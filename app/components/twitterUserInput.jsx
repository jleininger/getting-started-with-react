import React from 'react';
import { KEY_ENTER } from '../constants/keyCodes.js';

export default React.createClass({
    render() {
        return (
            <div className="twitter-user-input">
                <input type="text"
                       ref={(c) => this.input = c}
                       onKeyPress={e => e.charCode === KEY_ENTER ? this.props.handleInput(this.input.value) : null} />
                <button onClick={() => {this.props.handleInput(this.input.value)}}>Find User</button>
            </div>
        )
    }       
});