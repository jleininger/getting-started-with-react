import React from 'react';

export default React.createClass({
   render() {
       return (
           <div className="greeting">
                Hello, {this.props.name}!
           </div>
       );
   } 
});