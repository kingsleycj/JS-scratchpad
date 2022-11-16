var city = function (name, state) {
    this.name  = name || 'Portland';
    this.state = state || 'Oregon';
    this.printMyCityAndState = function () {
      console.log("My city is " + this.name + ", and my state is " + this.state);
    };

};

portland = new city();
seattle = new city('Seattle', 'Washington');
salem = new city('Salem');
vancouver = new city('Vancouver', 'Nevada');

portland.printMyCityAndState();
seattle.printMyCityAndState();
salem.printMyCityAndState();
vancouver.printMyCityAndState();