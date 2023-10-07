import React from "react";
import Quotes from "../src/Quotes.json"
export default class Quote extends React.Component {
    //renk ayarlamasini yap rengini degistirmek istedin seylere bi class var color diye onu 
    //javascript document ile cek ve icindeki color rengini degistirmek istefigin renge ver
    colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857',
        "#232D3F",
        "#93B1A6",
        "#0E2954",
        "#0A2647",
        "#E7F6F2",
        "#2D4263"
      ];
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
        let color = Math.floor(Math.random() * this.colors.length)
        console.log(color)
        if(this.lastIndex != index){
            this.setState({
                quote:Quotes.quotes[index].quote,
                author:Quotes.quotes[index].author
            })   
            document.body.style.backgroundColor = this.colors[color];
            document.getElementById("color1").style.color = this.colors[color];
            document.getElementById("color2").style.color = this.colors[color];
            
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
            document.body.style.backgroundColor = this.colors[color];
            document.getElementById("color1").style.color = this.colors[color];
            document.getElementById("color2").style.color = this.colors[color];
        }   
        this.lastIndex = index;
        
    }
    render(){
        return(
            <div >
              <h1 className="center title">Random Quote Machine</h1>
              <br />
              <p className="center developer">Developed By Doruk Aytekin</p>
                <div className="quote-div">
                    <p id="color1" className="center quote-p">{this.state.quote}</p>
                    <p id="color2" className="center">{this.state.author}</p>
                    <button  className="right button" onClick={this.handleClick}>New Quote</button>
                </div>  
            </div>
            
        );
    }
}