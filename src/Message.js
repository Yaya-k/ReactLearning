import React from 'react';
import './Message.css';


const Message=(props)=> (

    <div className="message">

        <div className="list-group" >
            <div  className="list-group-item list-group-item-action flex-column align-items-start" id="list-group">
                <div className="d-flex w-100 justify-content-between">
                    <h5 > "userName"</h5>
                </div>
                <p >texte</p>
                <div>
                    <button type="button" className="btn btn-danger" id="btn" onClick={() => props.deleteMessage()}>
                        Delete
                    </button>
                    <small>porter</small>

                </div>

            </div>

        </div>
    </div>
    );



export default Message;
