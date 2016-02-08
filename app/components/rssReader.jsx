import React from 'react';
import TwitterUserInput from './twitterUserInput.jsx';
import FeedStream from './feedStream.jsx';

export default React.createClass({
    getInitialState() {
        return {
            twitterUser: ''
        }    
    },
    
    handleNewTwitterUser(user) {
        this.setState({ twitterUser: user });    
    },
    
    render() {
        return (
            <div className="rss-reader">
                <TwitterUserInput handleInput={this.handleNewTwitterUser} />
                <FeedStream twitterUser={this.state.twitterUser} />
            </div>
        );
    } 
});