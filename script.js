const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const website = document.getElementById("website").value;
  const url = document.getElementById("url").value;
  const price = document.getElementById("price").value;
  tbodyEl.innerHTML += `
      <tr>
          <td>${url}</td>
          <td>${website}</td>
          <td>${price}</td>
          <td><button class="deleteBtn btn">Delete</button></td>
      </tr>
  `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);

function clearForm(){
    document.getElementById("url").value = "";
    document.getElementById("website").value = "";
    document.getElementById("price").value = "";
}

function checkEmptyInput() {
    var isEmpty = false;
    var itemname = document.getElementById("itemname").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    if (itemname === "") {
        alert("Item Name Connot Be Empty");
        isEmpty = true;
    }
    else if (quantity === "") {
        alert("Quantity Connot Be Empty");
        isEmpty = true;
    }
    else if (price === "") {
        alert("price Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}          
            
        