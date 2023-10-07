import React from "react";
import Quotes from "../src/Quotes.json"
export default class Quote extends React.Component {
    //renk ayarlamasini yap rengini degistirmek istedin seylere bi class var color diye onu 
    //javascript document ile cek ve icindeki color rengini degistirmek istefigin renge ver
    constructor(props) {
        let lastIndex = 0;
        super(props);
        this.state = {
            quote:Quotes.quotes[0].quote,
            author:Quotes.quotes[0].author
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let index = Math.floor(Math.random() * Quotes.quotes.length);
        console.log("index"+index)
        if(this.lastIndex != index){
            
            this.setState({
                quote:Quotes.quotes[index].quote,
                author:Quotes.quotes[index].author
            })   
        }
        else{
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
                author:Quotes.quotes[index].author
            })  
        }   
        this.lastIndex = index;
        
    }
    render(){
        console.log("lastindex"+this.lastIndex)
        
        return(
            <div >
              <h1 className="center title">Random Quote Machine</h1>
              <br />
              <p className="center developer">Developed By Doruk Aytekin</p>
                <div className="quote-div">
                    <p className="center quote-p">{this.state.quote}</p>
                    <p className="center">{this.state.author}</p>
                    <button  className="right button" onClick={this.handleClick}>New Quote</button>
                </div>  
            </div>
            
        );
    }
}