import React from "react";
import Quotes from "../src/Quotes.json"
export default class Quote extends React.Component {
    
    constructor(props) {
        let lastIndex = 0;
        super(props);
        this.state = {
            quote:Quotes.quotes[0].quote,
            owner:Quotes.quotes[0].owner
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let index = Math.floor(Math.random() * Quotes.quotes.length);
        console.log("index"+index)
        if(this.lastIndex != index){
            this.setState({
                quote:Quotes.quotes[index].quote,
                owner:Quotes.quotes[index].owner
            })   
        }
        else{
            console.log("buraya girdi");
            if(index == 0){
                index += 1;
            }
            else if(index == Quotes.quotes.length-1){
                index -=1;
            }
            else{
                index+=1
            }
            this.setState({
            
                quote:Quotes.quotes[index].quote,
                owner:Quotes.quotes[index].owner
            })  
        }   
        this.lastIndex = index;
        
    }
    render(){
        console.log("lastindex"+this.lastIndex)
        
        return(
            <div className="quote-div">
                <p className="center quote-p">{this.state.quote}</p>
                <p className="center">{this.state.owner}</p>
                <button  className="right button" onClick={this.handleClick}>New Quote</button>
            </div>
        );
    }
}