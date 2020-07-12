
import React, {Component} from 'react';
import './App.css';
import Message from "./Message";
import NavBar from "./NavBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.setLight_mode = this.setLight_mode.bind(this);
        this.hideMessage = this.hideMessage.bind(this);
        this.deleteMessage=this.deleteMessage.bind(this);
        this.recoverDeletedMessage=this.recoverDeletedMessage.bind(this);



        this.state= {isLight_mode: true, hideMessagesArehidden: false,messages:this.makeMessages()}


    }

    doesMessageDeleted=false;

    makeMessages() {
        const result = []
        const user=["Ykamis","Zeleph","Zoro","Toto"]
        const val=["visible","hidden"]

        while (result.length < 10) {
            result.push({id:result.length,show:true,txt: "Sed cautela niSed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.\n" +
                    "\nmia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ignotus, acerbum et inplacabilem et in hoc causarum titulo dissimilem sui.\n" +
                    "\n",
                prt: val[Math.floor(Math.random() * val.length)],
                user:user[Math.floor(Math.random() * user.length)]
            })



        }
        return result
    }

    setLight_mode(){
        this.setState({isLight_mode:!this.state.isLight_mode})

    }
    hideMessage(){
        this.setState({hideMessagesArehidden:!this.state.hideMessagesArehidden})

    }

    deleteMessage(idM){
        this.doesMessageDeleted=true;

        let interMes=this.state.messages;
        let interMe=interMes[idM];
        interMe.show=false;
        interMes[idM]=interMe;
        this.setState({messages:interMes})

    }

    recoverDeletedMessage(){
        //deux solution salon la taille de la liste de messages
        let interMes=this.state.messages;//this.state.messages;
        for (let i = 0; i < interMes.length; i++) {
            interMes[i].show=true;
        }
        this.doesMessageDeleted=false;
        this.setState({messages:interMes})

    }

    render() {

    return (

        <div className={this.state.isLight_mode ? "light-mode":"dark-mode"}>
            <NavBar setLight_mode={this.setLight_mode} hideMessage={this.hideMessage} />


            <button type="button" disabled={!this.doesMessageDeleted } className="btn btn-primary"
                    onClick= {() => this.recoverDeletedMessage()}>Recover deleted Messages

            </button>

            {this.state.messages.map(({txt,prt,user,show,id},index)=>(
                show ?
                <Message onClick={this.deleteMessage} id={id} userName={user}  texte={

                    this.state.hideMessagesArehidden && prt==="hidden"?"this is a hidden message":txt
                } porter={prt}

                />:""

            ))}


        </div>

    )
  }
}

export default App;
