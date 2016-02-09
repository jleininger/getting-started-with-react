import React from 'react';

const FeedCard = ({
    postTitle,
    description,
    postLink
}) => {
    <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">{postTitle}</h2>
        </div>
        <div className="mdl-card__supporting-text">
            {description}
        </div>
        <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
               href={postLink} >
                View Original Post
            </a>
        </div>
    </div>
}

const styles = {
    mdlCard: {
        width: 320,
        height: 320
    },
    mdlCardTitle: {
        color: '#fff',
        background: "url('" + imageUrl  + "') bottom right 15% no-repeat #46B6AC";
    }
}

export default FeedCard;