const button = document.getElementById("add-one") // gets the button stores it in a variable
   
// takes button adds event listener now the button listens for a click 
button.addEventListener("click",() => {
   const p = document.getElementById("results")// gets p element from HTML file runs a fuction everytime the button is clicked
p.textContent = Number(p.textContent) +1 // takes content of P tag turns it into a number and increases it by one 
})