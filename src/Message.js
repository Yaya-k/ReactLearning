import React from 'react';

const Message=({ texte, porter })=> (
    <div className="message">
    <span className="titre">
        <p>{texte}</p>
        <p>{porter}</p>
    </span>
    </div>
    );



export default Message;
