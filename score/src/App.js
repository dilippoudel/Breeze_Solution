import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
    state = {ppm:[], currentPPM:0 };

    async componentDidMount(){
        setInterval(async () => {
        let randomCO2 = {ppm: Math.floor(Math.random()*5000)+350};
        console.log(randomCO2)
        //here the function will generate the random CO2 PPm value and it will will be set as the current state value and that will post in the back end side.
        this.setState({currentPPM: randomCO2.ppm})
        await axios.post(`http://localhost:3001/ppm`, randomCO2);    
        //const ppm = await axios.get(`http://localhost:3001/ppm`);
    //     this.setState({currentPPM: randomCO2})
        }, 10000)
    }
 
    render() {
        const {currentPPM} =this.state;
        const result = (currentPPM < 1000) ? (<div><h2>Green</h2></div>) :
        (currentPPM > 1000 && currentPPM < 2000) ? (<div><h2>Yellow</h2></div>) :
        <div><h2>Red</h2></div>

            
       
        console.log(this.state.currentPPM)
        return (

            <div>
                <h2>Current PPM</h2>
                
                {result}
            </div>
        );
    }
}

export default App;