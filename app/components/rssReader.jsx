import React from 'react';
import Header from './header.jsx';
import FeedStream from './feedStream.jsx';

export default React.createClass({
    getInitialState() {
        return {
            appName: 'TwitFeed',
            twitterUser: ''
        }    
    },
    
    handleNewTwitterUser(user) {
        this.setState({ twitterUser: user }); 
    },
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={this.state.appName} handleInput={this.handleNewTwitterUser} />
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <FeedStream twitterUser={this.state.twitterUser} />    
                    </div>
                </main>
            </div>
        );
    } 
});