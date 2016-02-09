import React from 'react';
import $ from 'jquery';
import FeedCard from './feedCard.jsx';

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
        var data = $(data),
            items = [];
        data.find("item").each(function() {
            var itemData = $(this);
            items.push({
                title: itemData.find("title").text(),
                creator: itemData.find("creator").text(),
                pubDate: itemData.find("pubDate").text(),
                link: itemData.find("link").text()
            });
        });
        
        this.setState({ feedItems: items });        
    },
    
    render() {
        const feedCards = this.state.feedItems.map((item, i) => {
            return <FeedCard key={i}
                             title={item.title}
                             creator={item.creator}
                             pubDate={item.pubDate}
                             link={item.link}
                             imageUrl={'nothing'} />
        });
        return (
            <div className="feed">
                {feedCards}
            </div> 
        );
    }  
});