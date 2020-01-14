import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';



class App extends Component {
  // We set the variables that change during the game as states
  state = {
    score : 0,
    topScore: 0,
    idsSelected: [],
    message: "Click any image to start the game!!"
  }
  
  //Function for when user clicks on any image
  handleImageClick = event => {
    
    //Variable that holds ID of the clicked image
    const imageID = event.target.id;

    //Conditional for when user clicks on the same image more than once
    //If the arrays of clicked images includes the last image clicked id...
    if(this.state.idsSelected.includes(imageID)) {
      //..the user loose, so set the score to 0 again and empty the ID array
      this.setState({
        score: 0, 
        idsSelected: [],
        message: "Image already been clicked!!",
      });

    } else {
      //If the user clicks on an image for the first time, that ID is saved on the arrays of images ID
      this.state.idsSelected.push(imageID);

      
      if(this.state.topScore <= this.state.score) {
        this.setState({
          topScore: this.state.score + 1,
          message: "Image never selected!",
          score: this.state.score + 1
        })
      } else {
        
        this.setState({
          message: "Image never selected!",
          score: this.state.score + 1
        })
      }
    }
  }
  
  render() {
    return (
      <div>
        {/* We pass the message, score and high score to the Nav component while playing */}
        <Navbar message={this.state.message} />
        <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        {/* We pass the click function to the Images container */}
        <Container handleImageClick={this.handleImageClick}/>
        <Footer />
      </div>
    );
  }
 
}

export default App;