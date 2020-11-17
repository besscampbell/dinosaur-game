import $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoAPI from './dino-service.js'

function clearFields() {
  $("#letterGuess").val("");
}

$(document).ready(function() {
  $('#guessButton').submit(function() {
    let letterGuess = $('#letterGuess').val;
    clearFields();
    let promise = DinoAPI.getName();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#dinoWord').text(`${body[0][0]}`);
      $("#letter").text(`You guessed ${letterGuess}`);
    }, function(error) {
      $("#error").text(`There was an error processing your request: ${error}`);
    })
  })
})