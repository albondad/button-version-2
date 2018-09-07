import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LmaoButton extends React.Component {
    state = {
    }
    render() {
        return(
            <div className="buttonContent">
                <p>button</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.addButton = this.addButton.bind(this);
        this.getMainStyle = this.getMainStyle.bind(this);
        this.getStyle = this.getStyle.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
    }
    state = {
        buttons: [],
        initialMainButtonStyle: false,
        counter: 0
    };
    render() {
        return (
            <div className="">
                <div className="buttonShell" onClick={this.addButton} style={this.getMainStyle()}>
                    <LmaoButton/>
                </div>
                {this.state.buttons.map(button => <div className="buttonShell" onClick={this.addButton} style={this.getStyle()}>{button}</div>)}
            </div>
        );
    }
    addButton() {
        console.log(this.state.counter);
        if (this.state.counter >= 10) { //stage two
            this.state.buttons.push(<LmaoButton/>);
        }
        this.setState({buttons: this.state.buttons, initialMainButtonStyle: true, counter: this.state.counter+1});
    }
    getMainStyle() {
        var style = {};
        if (this.state.initialMainButtonStyle) {
            style = this.getStyle();
        }
        return style;
    }
    getStyle() {
        var style = {};
        if (this.state.counter < 30) { //stage one, default
            style = {
                position: "fixed",
                left: "calc(100vw * " + Math.random() + " - 100px)",
                top: "calc(100vh * " + Math.random() + " - 50px)",
                width: "200px",
                height: "100px",
            }
        }
        else if (this.state.counter >= 30) { //stage three, adds rotation
            style = {
                position: "fixed",
                left: "calc(100vw * " + Math.random() + " - 100px)",
                top: "calc(100vh * " + Math.random() + " - 50px)",
                width: "200px",
                height: "100px",
                transform: this.getRandomRotation()
            }
        }
        else if (this.state.counter >= 40) { //stage four, adds color
            style = {
                position: "fixed",
                backgroundColor: this.getRandomColor(),
                left: "calc(100vw * " + Math.random() + " - 100px)",
                top: "calc(100vh * " + Math.random() + " - 50px)",
                width: "200px",
                height: "100px",
                transform: this.getRandomRotation()
            }
        }
        else if (this.state.counter >= 50) { //stage four, adds color
            style = {
                position: "fixed",
                backgroundColor: this.getRandomColor(),
                left: "calc(100vw * " + Math.random() + " - 100px)",
                top: "calc(100vh * " + Math.random() + " - 50px)",
                width: "200px",
                height: "100px",
                transform: this.getRandomScale() + this.getRandomRotation()
            }
        }
        return style;
    }
    getRandomColor() {
        var color = "rgb(calc(255 * " + Math.random() + "), calc(255 * " + Math.random() + "), calc(255 * " + Math.random() + "))";
        return color;
    }
    getRandomRotation() {
        var rotation = "rotate(calc(360deg * " + Math.random() + "))";
        return rotation;
    }
    getRandomScale() {
        var scale = "scale(calc(2 * " + Math.random() + " + .5))";
        return scale;
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
