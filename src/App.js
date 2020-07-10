
import React, {Component} from 'react';
import './App.css';
import Message from "./Message";
class App extends Component {
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
    render() {
    return (
        <div className="App">
            {this.messages.map(({txt,prt,user})=>(
                <Message userName={user} porter={prt} texte={txt}/>
            ))}

        </div>
    )
  }
}

export default App;
