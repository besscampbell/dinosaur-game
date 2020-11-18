import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoAPI from './dino-service.js';
// import Dino from './dinosaur';

function clearFields() {
  $("#letterGuess").val("");
}

$(document).ready(function() {
  $('#getWord').click(function() {  
    let promise = DinoAPI.getName();
    console.log(promise);
    promise.then(function(response) {
      const body = JSON.parse(response);
      
      console.log(`${body[0][0]}`);
      $('#dinoWord').text(`${body[0][0]}`);
    }, function(error) {
      $("#error").text(`There was an error processing your request: ${error}`);
    });
  });  
  $('#userGuesses').submit(function(event) {
    event.preventDefault();
    let letterGuess = $('#letterGuess').val();
    $("#letter").text(`You guessed ${letterGuess}`);
    clearFields();
  });
});