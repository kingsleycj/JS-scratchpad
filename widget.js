var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class = "bulleted">';
    for (let i =0; i < employees.length; i++) {
        if (employees[i].in-office === true) {
          statusHTML += '<li class = "in">';
        } else {
          statusHTML += '<li class ="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
      }
    }
  };
xhr.open("GET", "data.json");
xhr.send();

