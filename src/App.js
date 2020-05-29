import React, { Component } from 'react';
import {Button , Container,Row,Col} from 'react-bootstrap';
import * as tf from '@tensorflow/tfjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

var model = null;

var drawing = false;

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { pred: "" };
  }

  modelP = async () => {
    model = await tf.loadLayersModel('https://arohlen.github.io/filehosttest/tfjs_model1/model.json');
  }

  clear() {
    var table = document.querySelectorAll("td");

    for(let td of table){
      td.setAttribute("style", `background-color: ${'#000000'}`)
    }
  }

  predict() {
  
    var table = document.querySelectorAll("td");

    var arr = Array.from(table).map( (td) => {
      return td.style.backgroundColor === 'rgb(0, 0, 0)' ? 0 : 1;
    })

    var image = tf.tensor(arr,[1,28,28,1])

    var prediction = model.predict(image).argMax(1).arraySync()[0];

    var s = "";

    if (prediction === 8) {
      s = "You drew an "+prediction.toString()+"!";
    }else{
      s = "You drew a "+prediction.toString()+"!";
    }

    this.setState(state => ({
      pred: new s
    }));
    //console.log(pred);

  }


  mDown () {
    drawing = true;
    this.setAttribute("style", `background-color: ${'#FFFFFF'}`);
  }

  mUp () {
    drawing = false;
  }


  mEnter () {
    if (drawing) {
      this.setAttribute("style", `background-color: ${'#FFFFFF'}`);
            
    }
  }

  componentDidMount()  {

    //this.modelP();

    for (let r=0; r<28; r++){
        const row = this.table.insertRow(r);
        for (let c=0; c<28; c++){
            const cell = row.insertCell(c);
            cell.setAttribute("style", `background-color: ${'#000000'}`);
            cell.addEventListener("mousedown", this.mDown);
            cell.addEventListener("mouseup", this.mUp);
            cell.addEventListener("mouseenter", this.mEnter);
        }
    }
}

  render() {

    return (

      <div>

      

      <Container>

      <h3 id="mnisthead">Draw a digit in the box and hit the predict button to see if the AI can tell what it is!</h3>

      <table id="tab" ref={(ref) => (this.table = ref)}>
       </table>

        <Row id="mnistbuttons">
          <Col md={2}>
          <Button variant="primary" onClick = {() => {this.predict()}}>Predict</Button>
          </Col>
          <Col md={2}>
          <Button variant="primary" onClick = {this.clear}>Clear</Button>
          </Col>
        </Row>

        <Row id="mnistpred">
          <Col>
          <h2>{this.state.pred}</h2>
          </Col>
        </Row>
        </Container>
      
      
      </div>

      
    
    );
    
  }
}

export default App;

