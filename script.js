let upArrowF = document.querySelector(".arrow-up-f");
let downArrowF = document.querySelector(".arrow-down-f");
let upArrowC = document.querySelector(".arrow-up-c");
let downArrowC = document.querySelector(".arrow-down-c");

function feature() {
	let featureList = document.querySelector("#features-list");
	if (featureList.style.display === "none") {
		featureList.style.display = "block";
	} else {
		featureList.style.display = "none";
	}
	downArrowF.classList.toggle("show-arrow-down");
	upArrowF.classList.toggle("show-arrow-up");
}

function company() {
	let companyList = document.querySelector("#company-list");
	if (companyList.style.display === "none") {
		companyList.style.display = "block";
	} else {
		companyList.style.display = "none";
	}
	downArrowC.classList.toggle("show-arrow-down");
	upArrowC.classList.toggle("show-arrow-up");
}

let navbar = document.querySelector(".navbar");
function menu() {
	navbar.style.right = "0px";
}

let closebtn = document.getElementById("close");
console.log(closebtn);

closebtn.addEventListener("click", () => {
	navbar.style.right = "-250px";
});
