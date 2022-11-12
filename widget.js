var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
      let employees = JSON.parse(xhr.responseText);
      let statusHTML = '<ul class = "bulleted">';
      for (let i =0; i < employees.length; i++) {
        if (employees[i].inoffice === true) {
          statusHTML += '<li class = "in">';
        } else {
          statusHTML += '<li class ="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
      }
      statusHTML += '</ul>';
      document.getElementById("employeeList").innerHTML = statusHTML;
    }
  };
xhr.open("GET", "./data.json");
xhr.send();

var roomCheck = new XMLHttpRequest();
roomCheck.onreadystatechange = function () {
  if (roomCheck.readyState === 4) {
    let check = JSON.parse(xhr.responseText);
    let statusHTM = '<ul class = "rooms">';
    for (let i = 0; i < check.length; i++) {
      if (check[i].status === true) {
        statusHTM += '<li class = "empty">';
      } else {
        statusHTM += '<li class ="full">';
      }
      statusHTM += check[i].name;
      statusHTM += "</li>";
    }
    statusHTM += "</ul>";
    document.getElementById("checkRooms").innerHTML = statusHTM;
  }
};
xhr.open("GET", "./rooms.json");
xhr.send();