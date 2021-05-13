/* Staff Password */
function validate() {
    // access the value inside the textbox
    var staffPassword = document.getElementById('StaffPW').value;

    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (regex.test(staffPassword)) {

        document.getElementById('Valid').style.visibility = "visible";

        document.getElementById('inValid').style.visibility = "hidden";
    }

    else {

        document.getElementById('inValid').style.visibility = "visible";

        document.getElementById('Valid').style.visibility = "hidden";
    }
}



/* Customers Information Button */
$(document).ready(function () {

    $("#btHide").click(function () {

        $("#hide").slideToggle();

        $("#btHide").toggleClass("active");

    });
});



/* Customers */
$(document).ready(function () {

    var url = "https://randomuser.me/api/?results=5";
    var u = "";

    getUsers(url);

    function getUsers(url) {
        fetch(url)
            .then((response) => (response.json()))
            .then(function (data) {
                console.log(data);

                data.results.forEach(user => {

                    u = `<div class ="user">

                    <img src = "${user.picture.thumbnail}" class= "user-photo"><br>

                    <span>${user.name.title + '. ' + user.name.fitst + ' ' + user.name.last}</span>
                    <p>${'DOB: ' + user.dob.date}</p>
                    <p>${'Gender: ' + user.gender + ' / Age: ' + user.dob.age}</p>
                    <p>${'Phone: ' + user.phone + ' / ' + user.cell}</p>
                    <p>${'Email: ' + user.email}</p>
                    <p>${'Country: ' + user.location.country}</p>
                    <p>${'PostCode: ' + user.location.postcode}</p>
                    <p>${'Address: ' + user.location.street.number + ' ' + user.location.street.name + ' , ' + user.location.city + ' . ' + user.location.state}</p>
                    
                    </div>
                    `;

                    $("#results").append(u);
                })
            });
    }
});


/* Menu */
var total_items = 4;

function CalculateItemsValue() {
    var total = 0;

    for (let i = 1; i <= total_items; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    document.getElementById('ItemsTotal').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
});






/* Services */
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.surveyForm.name.value;
    var email = document.surveyForm.email.value;


    var starter = [];
    var checkboxes = document.getElementsByName("starter[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            starter.push(checkboxes[i].value);
        }
    }

    var main = [];
    var checkboxes = document.getElementsByName("main[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            main.push(checkboxes[i].value);
        }
    }

    var dessert = [];
    var checkboxes = document.getElementsByName("dessert[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            dessert.push(checkboxes[i].value);
        }
    }


    var food = [];
    var checkboxes = document.getElementsByName("food[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            food.push(checkboxes[i].value);
        }
    }


    var server = [];
    var checkboxes = document.getElementsByName("server[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            server.push(checkboxes[i].value);
        }
    }



    var nameErr = emailErr = mobileErr = genderErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "<span style='color:red'> Please enter name </span>");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "<span style='color:red'> Please enter a valid name </span>");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "<span style='color:red'> Please enter email </span>");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "<span style='color:red'> Please enter a valid email address </span>");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }




    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || genderErr) == true) {
        return false;
    }

    else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n";


        alert('Form Succesfully Submitted!');

    }
};




