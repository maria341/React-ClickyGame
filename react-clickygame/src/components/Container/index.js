import React from 'react';
import "./style.css";

 function Container (props){ 
   
    //We declare an array with all the images and their id's and onClick function
    const array = [
        <img key="1" id="1" src={require(`../../images/dog1.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d1" height="200" width="200"/>,
        <img key="2" id="2" src={require(`../../images/dog2.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d2" height="200" width="200"/>,
        <img key="3" id="3" src={require(`../../images/dog3.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d3" height="200" width="200"/>,
        <img key="4" id="4" src={require(`../../images/dog4.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d4" height="200" width="200"/>,
        <img key="5" id="5" src={require(`../../images/dog5.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d5" height="200" width="200"/>,
        <img key="6" id="6" src={require(`../../images/dog6.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d6" height="200" width="200"/>,
        <img key="7" id="7" src={require(`../../images/dog7.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d7" height="200" width="200"/>,
        <img key="8" id="8" src={require(`../../images/dog8.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d8" height="200" width="200"/>,
        <img key="9" id="9" src={require(`../../images/dog9.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d9" height="200" width="200"/>,
        <img key="10" id="10" src={require(`../../images/dog10.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d10" height="200" width="200"/>,
        <img key="11" id="11" src={require(`../../images/dog11.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d11" height="200" width="200"/>,
        <img key="12" id="12" src={require(`../../images/dog12.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="d12" height="200" width="200"/>];
        
    //This function will shuffle the images once one of them is clicked
    function shuffle(arr1) {

        let counter = arr1.length;
        let temp;
        let index;

        while(counter>0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = arr1[counter];
            arr1[counter] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
    }

    //We set the variable images of the new array each time is clicked to be displayed
    let images = shuffle(array);

    return(
        <div className="images">
            <div className="container">
                {images}
            </div>
        </div>
    );
}

export default Container;