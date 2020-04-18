//Wait for window to load
document.addEventListerner("DOMContentLoaded", function(event)){

let header = document.getElementById("header-id")

setTimeout(() => {
header.classList.remove("hidden");
}, 3000)

}

