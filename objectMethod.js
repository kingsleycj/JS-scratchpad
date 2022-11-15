const portland = {
    bridges: 12,
    airport: 1,
    soccerTeams: 1,
    logNumberOfBridges: function () {
        console.log("There are " + this.bridges + " bridges in portland!")
    },
    logTeams: function () {
        console.log(this)
    }
};
portland.logNumberOfBridges();