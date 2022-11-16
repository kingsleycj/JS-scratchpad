let portland = {
    bridges: 12,
    airport: 1,
    soccerTeams: 1,
    logNumberOfBridges: function () {
        console.log("There are " + this.bridges + " bridges in portland!")
    }
};

function logTeams () {
    console.log(this)
}
portland.foo = logTeams;
portland.foo();
logTeams();