import React from 'react';

const FeedCard = ({
    title,
    creator,
    description,
    pubDate,
    link
}) => (
    <div className="twit-card-wide mdl-card mdl-shadow--2dp"
         style={styles.card}>
        <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">{title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
            {description}
            {creator} <br />
            {pubDate}
        </div>
        <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            href={link} target="_blank">
            View Original Post
            </a>
        </div>
    </div>
);

const styles = {
    card: {
        width: 512,
        margin: '15px auto'
    }
}

export default FeedCard;