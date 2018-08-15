let objects;
(function(){
    class Contact {
        // your class definition goes here 
          
    }

    function mine(first, last, cont, em) {
        this.firstName = first;
        this.lastName = last;
        this.contact = cont;
        this.email = em;
        this.name = function() {
            return this.firstName + " " + this.lastName
        };
    }

    var myname = new mine("ayush", "patel", 1111111111, "ayush21031999@gmail.com");
    // Display full name
    document.getElementsByClassName("display-6").innerHTML = "My name is " + myname.name(); 

    //trying to get in array 
     contacts[contacts.length] = mine;

        


    objects.Contact = Contact;

})(objects || (objects = {}));