const registrationForm = document.getElementById("registration-form");
const avatarFile = document.getElementById("avatar").files[0];

// event listener for form
registrationForm.addEventListener("submit",handleForm);


//event handler for form
function handleForm(e) {
    e.preventDefault();
    console.log("Submitted Form...");

    const attendee = createTicket();
    saveUser(attendee);
    console.log(localStorage.getItem("attendee"));
    window.location.href = "ticket.html";

    if (file) {
        const reader = new FileReader();

        reader.onload = function() {
            attendee.avatar = reader.result;
            saveUser(attendee);
            window.location.href = "ticket.html";
        };

        reader.readAsDataURL(file);
    } else {
        saveUser(attendee);
        window.location.href = "ticket.html";
    }
}



//helper functions
function createTicket(){
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    let github = document.getElementById("github-username").value;
    const avatarFile = document.getElementById("avatar").files[0];
    console.log(avatarFile);

    //create new attendee object
    const attendee = {
        id:(Math.floor (Math.random() * 90000)),
        fullName,
        email,
        github,
        // avatar,
    };
    console.log("Information Collected...");
    return attendee;
}

function saveUser (attendee){
    localStorage.setItem("attendee", JSON.stringify(attendee));
    // sessionStorage.setItem("attendee", JSON.stringify(attendee));
    console.log("attendee saved to local Storage...")
}
