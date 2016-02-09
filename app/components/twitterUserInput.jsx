import React from 'react';
import { KEY_ENTER } from '../constants/keyCodes.js';

export default React.createClass({
    propTypes: {
        handleInput: React.PropTypes.func    
    },
    
    handleKeyPress(e) {
        const newTwitterUser = this.input.value;
        console.log('Handling the input');
        
        if(e.charCode === KEY_ENTER && newTwitterUser !== '') {
            this.props.handleInput(newTwitterUser);
            this.input.value = '';
        }
    },
    
    render() {
        return (
            <div className="twitter-user-input">
                <input type="text"
                       id="fixed-header-drawer-exp"
                       className="mdl-textfield__input"
                       ref={(c) => this.input = c}
                       onKeyDown={this.handleKeyPress} />
            </div>
        )
    }       
});