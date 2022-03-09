import React, {useState} from 'react';
import './App.css';
import Aardbei from "./components/Aardbei/Aardbei";
import Appel from "./components/Appel/Appel";
import Banaan from "./components/Banaan/Banaan";
import Kiwi from "./components/Kiwi/Kiwi";
import Contactformulierinput from "./components/Contactformulierinput/Contactformulierinput";
import Button from "./components/Button/Button";
import Messagebox from "./components/Messagebox/Messagebox";
import Radiobutton from "./components/Radiobutton/Radiobutton";

function App() {
    const [counterAardbei,setCounterAardbei] = useState(0)
    const [counterAppel,setCounterAppel] = useState(0)
    const [counterBanaan,setCounterBanaan] = useState(0)
    const [counterKiwi,setCounterKiwi] = useState(0)


    const [voornaamValue,setVoornaamValue] = useState('')
    const [achternaamValue,setAchternaamValue] = useState('')
    const [leeftijdValue,setLeeftijdValue] = useState('0')
    const [postcodeValue,setPostcodeValue] = useState('')
    const [voorwaardenValue,toggleVoorwaardenValue] = useState(false)
    const [dagdeelValue,setDagdeelValue] = useState('')
    const [messageValue,setMessageValue] = useState('')
    const [bezorgValue,setBezorgValue] = useState('')
    const [clicked, toggleClicked] = React.useState(false);

    const handleBezorgChange = (e) => {
    setBezorgValue(e.target.value)
    };

    const  handleOverdagChange =() =>{
        setDagdeelValue ('Overdag')
    };
    const  handleAvondChange =() =>{
        setDagdeelValue ('Avond')
    };

    function handleClick(e){
        e.preventDefault()
        console.log(counterAardbei);
        console.log(counterBanaan);
        console.log(counterAppel);
        console.log(counterKiwi);
        console.log(voornaamValue);
        console.log(achternaamValue);
        console.log(leeftijdValue);
        console.log(postcodeValue);
        console.log(bezorgValue);
        console.log(dagdeelValue);
        console.log(messageValue);
        console.log(voorwaardenValue);
        toggleClicked(!clicked);
    }




  return (
        <>
      <h1>Fruitmand bezorgservice</h1>

        <div className="containerOne">
        <h2>🍓Aardbeien</h2>
        <Aardbei
            buttonType="button"
            buttonDisabled={counterAardbei  <1}
            clickHandler={() => {setCounterAardbei (counterAardbei -1)}}
        >
            -
        </Aardbei>
        <p>{counterAardbei}</p>
        <Aardbei
            buttonType="button"
            buttonDisabled={false}
            clickHandler={() => {setCounterAardbei (counterAardbei +1)}}>
            +
        </Aardbei>
        </div>
        <div className="containerThree">
        <h2>🍌Bananen</h2>
        <Banaan
            buttonType="button"
            buttonDisabled={counterBanaan <1}
            clickHandler={() => {setCounterBanaan (counterBanaan -1)}}
        >
            -
        </Banaan>
        <p>{counterBanaan}</p>
        <Banaan
            buttonType="button"
            buttonDisabled={false}
            clickHandler={() => {setCounterBanaan (counterBanaan +1)}}>
            +
        </Banaan>
        </div>
        <div className="containerTwo">
        <h2>🍏Appels</h2>
        <Appel
            buttonType="button"
            buttonDisabled={counterAppel <1}
            clickHandler={() => {setCounterAppel (counterAppel -1)}}
        >
            -
        </Appel>
        <p>{counterAppel}</p>
        <Appel
            buttonType="button"
            buttonDisabled={false}
            clickHandler={() => {setCounterAppel (counterAppel +1)}}>
            +
        </Appel>
         </div>
       <div className="containerFour">
        <h2>🥝Kiwi's</h2>
        <Kiwi
            buttonType="button"
            buttonDisabled={counterKiwi <1}
            clickHandler={() => {setCounterKiwi (counterKiwi -1)}}
        >
            -
        </Kiwi>
        <p>{counterKiwi}</p>
        <Kiwi
            buttonType="button"
            buttonDisabled={false}
            clickHandler={() => {setCounterKiwi (counterKiwi +1)}}>
            +
        </Kiwi>
       </div>

       <Button
            buttonType="button"
            buttonDisabled={false}
            clickHandler={ ()=> {
            setCounterAardbei(0)
            setCounterAppel(0)
            setCounterBanaan(0)
            setCounterKiwi(0)
                }
            }>
           Reset
       </Button>



            <form className= "contactformulier">
                    <fieldset>

                        <legend>Contactformulier</legend>

                        <label htmlFor="Voornaam">Voornaam:
                        <Contactformulierinput
                            inputType="text"
                            inputId="Surname"
                            inputValue={voornaamValue}
                            clickHandler={(e) => setVoornaamValue(e.target.value)}/>
                        </label>
                        <br/>

                        <label htmlFor="Achternaam"> Achternaam:
                        <Contactformulierinput
                            inputType="text"
                            inputId="Lastname"
                            inputValue={achternaamValue}
                            clickHandler={(e) => setAchternaamValue(e.target.value)}/>
                        </label>
                        <br/>

                        <label htmlFor="Leeftijd"> Leeftijd:
                        <Contactformulierinput
                            inputType="number"
                            inputId="Age"
                            inputValue={leeftijdValue}
                            clickHandler={(e) => setLeeftijdValue(e.target.value)}/>
                        </label>
                        <br/>
                        <label htmlFor="Postcode"> Postcode:
                        <Contactformulierinput
                                inputType="text"
                                inputId="zip-code"
                                inputValue={postcodeValue}
                                clickHandler={(e) => setPostcodeValue(e.target.value)}/>
                        </label>

                        <p>Bezorgfrequentie</p>
                       <div>
                           <select value={bezorgValue} onChange={handleBezorgChange}>
                               <option
                                   value= "Iedere week">Iedere week</option>
                               <option
                                   value="Om de week">Om de week</option>
                               <option
                                   value="Iedere maand">Iedere maand</option>
                           </select>

                       </div>
                        <br/>
                        <div className="radio-button">
                        <label htmlFor="Overdag">
                            <Radiobutton
                               radioButtonInput="radio"
                               radioButtonId="overdag"
                               radioButtonName="overdag"
                               radioButtonChecked={dagdeelValue === 'Overdag'}
                               clickHandler={handleOverdagChange}/> Overdag</label>
                        <br/>
                        <label htmlFor="Avond">
                            <Radiobutton
                                radioButtonInput="radio"
                                radioButtonId="avond"
                                radioButtonName="avond"
                                radioButtonChecked={dagdeelValue === 'Avond'}
                                clickHandler={handleAvondChange}/> s'Avonds</label>
                        </div>
                        <br/>

                         <label htmlFor="comments">Opmerkingen:</label>
                            <br/>
                         <Messagebox
                             messageBoxId="comments"
                             messageBoxName="comments"
                             messageBoxRows="6"
                             messageBoxCols="60"
                             messageBoxValue={messageValue}
                             clickHandler={(e) => setMessageValue(e.target.value)}/>


                        <label htmlFor="voorwaarden">
                         <Contactformulierinput
                             inputType="checkbox"
                             inputValue="voorwaarden"
                             clickHandler={()=> toggleVoorwaardenValue(!voorwaardenValue)}
                             checked={voorwaardenValue}/>
                            Ik ga akkoord met de voorwaarden
                        </label>

                         <Button
                             buttonType="submit"
                             buttonDisabled={!voorwaardenValue}
                             clickHandler={handleClick}>
                             Verzend
                         </Button>
                        </fieldset>
            </form>
        </>

  );
}

export default App;
