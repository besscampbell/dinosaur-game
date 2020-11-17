export default class DinoAPI {
  static getName() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1";
      request.onload = function(){
        if (this.status === 200) {
          console.log("resolve");
          resolve(request.response);
        } else {
          console.log("reject");
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}