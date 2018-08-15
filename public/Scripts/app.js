(function(){

    function Start() {
        console.log(`%c App Started...`,"color:blue; font-size: 30px; font-weight:bold;");
       // Your Code goes here
        
    }
    //stuck in source url 
    function insertHTML(sourceurl, destTag) {
        let target = document.querySelector(destTag);
    
        ///Getting data from the html files and injecting it to page.
        let XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function() {
          if (this.status === 200) {
            if (this.readyState === 4) {
              target.innerHTML = this.responseText;
              //setActiveNavLink();
            }
          }
        });
        XHR.open("GET",data.jason);
        XHR.send();
      }

      function myFunction(destTag) {
        document.getElementsByClassName("display-6").innerHTML =
        xhttp.responseText;
      }


      

    window.addEventListener("load", Start);
})();