const attendee = JSON.parse(localStorage.getItem("attendee"));


localStorage.removeItem("attendee");
if (attendee){
        document.getElementById("fullName").textContent = attendee.fullName;
        document.getElementById("email").textContent = attendee.email;
        document.getElementById("attendee-git").textContent = "@" + attendee.github;
        document.getElementById("ticket-number").textContent = attendee.id + "#";
        document.getElementById("attendee-name").textContent = attendee.fullName;
    }

if (attendee.avatar) {
    document.getElementById("avatar").src = attendee.avatar;


}