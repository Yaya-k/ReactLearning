
import React, {Component} from 'react';
import './App.css';
import Message from "./Message";
import NavBar from "./NavBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.setLight_mode = this.setLight_mode.bind(this);
        this.hideMessage = this.hideMessage.bind(this);


        this.state= {isLight_mode: true, hideMessagesArehidden: false}


    }

    messages=this.makeMessages()


    makeMessages() {
        const result = []
        const user=["Ykamis","Zeleph","Zoro","Toto"]
        const val=["visible","hidden"]

        while (result.length < 10) {
            result.push({txt: "Sed cautela niSed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.\n" +
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



    render() {

    return (

        <div className={this.state.isLight_mode ? "light-mode":"dark-mode"}>
            <NavBar setLight_mode={this.setLight_mode} hideMessage={this.hideMessage} />


         {/*   <button type="button" className="btn btn-danger"
                    onClick= {() => this.setState({hideMessagesArehidden:!this.state.hideMessagesArehidden})}>
                {this.state.hideMessagesArehidden ? "Show hidden message":"hide hidden message"}
            </button>*/}

            {this.messages.map(({txt,prt,user})=>(
                <Message userName={user} porter={prt} texte={

                    this.state.hideMessagesArehidden && prt==="hidden"?"this is a hidden message":txt
                }/>

            ))}


        </div>

    )
  }
}

export default App;
