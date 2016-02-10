import React from 'react';
import $ from 'jquery';
import FeedCard from './feedCard.jsx';

export default React.createClass({
    propTypes: {
        twitterUser: React.PropTypes.string    
    },
    
    getInitialState() {
        return {
            feedItems: [],
            loading: false  
        }    
    },
    
    componentDidUpdate(prevProps) {
        if(this.props.twitterUser !== prevProps.twitterUser) {
            this.setState({ loading: true });
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
        
        this.setState({ 
            feedItems: items,
            loading: false
        });        
    },
    
    render() {
        const feedCards = this.state.feedItems.map((item, i) => {
            return <FeedCard key={i}
                             title={item.title}
                             creator={item.creator}
                             pubDate={item.pubDate}
                             link={item.link} />
        });
        const loadingMsg = <h4 style={{textAlign: 'center', marginTop: 50}}>Fetching Twitter Feed...</h4>;
        const nothingToDisplayMsg = <h4 style={{textAlign: 'center', marginTop: 50}}>Sorry, nothing to show here :(</h4>
        
        return (
            <div className="feed">
                {(this.state.loading) ? loadingMsg : 
                    (feedCards.length) ? feedCards : nothingToDisplayMsg}
            </div> 
        );
    }  
});