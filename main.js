let dropdown = document.getElementsByClassName("dropdown-btn");
// let arrow = document.querySelector("button > .arrow")
// let arrowCompany = document.querySelector("button > .arrow-company")
let i;
//  console.log(dropdown)
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
   
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      // arrow.style.transform = "rotate(0deg)"
      // arrowCompany.style.transform = "rotate(0deg)"
      
    } else {
      dropdownContent.style.display = "block";
      // arrow.style.transform = "rotate(-180deg)"
      // arrowCompany.style.transform = "rotate(-180deg)"
    }
  });
}


// arrow.addEventListener("click", arrowRotate)

// function arrowRotate(){
//   arrow.style.transform = "rotate(-180deg)"
// }