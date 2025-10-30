const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let prices=document.querySelectorAll(".price");
let Total=0;
prices.forEach((i)=>{
	Total+=parseFloat(i.textContent);
})
let table=document.querySelector("table");
let newrow=document.createElement("tr");
let labelcell=document.createElement("td");
let totalcell=document.createElement("td");
labelcell.textContent= "Total Price: ";
totalcell.textContent=Total;
newrow.id='ans';
newrow.append(labelcell,totalcell);
table.appendChild(newrow);

  
};

getSumBtn.addEventListener("click", getSum);

