import React from 'react';

class Clothe extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        if(this.props.temperature >= 5){
            return <h1>JARKO BLEAT PATAMUSHA {this.props.temperature} GRADUSAV!!!</h1>
        }
        else{
            return null
        }
    }
}
export default Clothe;