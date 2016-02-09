import React from 'react';
import $ from 'jquery';

export default React.createClass({
    propTypes: {
        twitterUser: React.PropTypes.string    
    },
    
    getInitialState() {
        return {
            feedItems: []    
        }    
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
        data.find("item").each(function() {
            var $this = $(this),
            item = {
                creator: $this.find("creator").text(),
                    
            };
        });    	        
    },
    
    render() {
        
        return (
            <div className="feed">
                <header>{}</header>
            </div> 
        );
    }  
});