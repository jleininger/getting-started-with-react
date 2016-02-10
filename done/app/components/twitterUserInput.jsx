import React from 'react';
import $ from 'jquery';
import { KEY_ENTER } from '../constants/keyCodes.js';

var TwitterUserInput = React.createClass({
    propTypes: {
        handleInput: React.PropTypes.func    
    },
    
    handleKeyDown: function(e) {
        if(e.keyCode === KEY_ENTER) {
            this.props.handleInput(this.input.value);
            this.input.value = '';
        }
    },
    
    componentDidMount: function() {
        $(document.body).on('keydown', this.handleKeyDown);
    },
    
    render: function() {
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

export default TwitterUserInput;