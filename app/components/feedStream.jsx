import React from 'react';
import $ from 'jquery';

export default React.createClass({
    propTypes: {
        twitterUser: React.PropTypes.string    
    },
    
    componentDidUpdate(prevProps) {
        if(this.props.twitterUser !== prevProps.twitterUser) {
            $.ajax({
                url: '/twitterfeed/' + this.props.twitterUser,
                dataType: 'xml',
                success: this.handleNewTwitterFeed
            });    
        }
    },
    
    handleNewTwitterFeed(data) {
        var data = $(data);
        console.log(data);    	        
    },
    
    render() {
        return (
            <div className="feed">
                <header>{}</header>
            </div> 
        );
    }  
});