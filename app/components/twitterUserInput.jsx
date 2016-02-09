import React from 'react';
import $ from 'jquery';
import { KEY_ENTER } from '../constants/keyCodes.js';

export default React.createClass({
    propTypes: {
        handleInput: React.PropTypes.func    
    },
    
    handleKeyDown(e) {
        if(e.keyCode === KEY_ENTER) {
            this.props.handleInput(this.input.value);
            this.input.value = '';
        }
    },
    
    componentDidMount: function() {
        $(document.body).on('keydown', this.handleKeyDown);
    },
    
    render() {
        return (
            <div className="twitter-user-input">
                <input type="text"
                       id="fixed-header-drawer-exp"
                       className="mdl-textfield__input"
                       ref={(c) => this.input = c} />
            </div>
        )
    }       
});