const PRODUCTS_LIST = [
    {
        name: "Milk",
        quantity: 15,
        price: '£'+1.2+'0'
    },
    {
        name: "Candy",
        quantity: 9,
        price: '£'+0.35
    },
    {
        name: "Chocolate",
        quantity: 20,
        price: '£'+0.6+'0'
    }
];

function addProductToList(product){
    // check javascript "arrays" for more information : https://www.w3schools.com/jsref/jsref_obj_array.asp
    PRODUCTS_LIST.push(product);
}

function removeProductFromList(productIndex){
    //check https://www.w3schools.com/jsref/jsref_splice.asp
    PRODUCTS_LIST.splice(productIndex, 1);
}

function displayProducts(){
    const productsTableEl = document.getElementById('productsTable'); 

    //clear existing rows of products
    removeAllRowsOfProduct(productsTableEl);
    addProductsToTable(productsTableEl);
}

function addProductsToTable(tableElement){
    const numberOfRows = tableElement.rows.length;
    for (let index = 0; index < PRODUCTS_LIST.length; index++) {
        const product = PRODUCTS_LIST[index];

        // build and add a new row of product
        const newRowIndex = numberOfRows + index; // index after the header
        const newRow = tableElement.insertRow(newRowIndex); 
        newRow.insertCell(0).innerHTML = product.name; //column 1
        newRow.insertCell(1).innerHTML = product.quantity; //column 2
        newRow.insertCell(2).innerHTML = product.price; //column 3
        const deleteButtonHTML = `<button class="deleteBtn btn" 
            onclick="removeProductFromList(${index});removeAllRowsOfProduct(${index}); displayProducts();" 
            >Delete</button>`;  
        newRow.insertCell(3).innerHTML = deleteButtonHTML; //column 4
    }
}/**/

function removeAllRowsOfProduct(tableElement){
    let numberOfRows = tableElement.rows.length;
    while(numberOfRows > 1){
        tableElement.deleteRow(1); //row after the header
        numberOfRows = numberOfRows - 1;
    }
}

function saveOrUpdateProduct(event){
    var itemName = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    if (itemName === "") {
        document.getElementById("popup").style.display="block";
        document.getElementById("name").style.borderBottomColor="red";
    }
    else if (quantity === "") {
        document.getElementById("popupQuantity").style.display="block";
        document.getElementById("quantity").style.borderBottomColor="red";
    }
    else if (price === "") {
        document.getElementById("popupPrice").style.display="block";
        document.getElementById("price").style.borderBottomColor="red";
    }
    else{
        event.preventDefault();
        //get details from the form
        const formName = document.getElementById("name").value;
        const formQuantity = document.getElementById("quantity").value;
        const formPrice = document.getElementById("price").value;
        //set new product object
        const newProduct = {
                name: formName,
                quantity: formQuantity,
                price: formPrice
            };
        console.log(newProduct);
         //add product and refresh display 
        addProductToList(newProduct);
        displayProducts();
        return true;
    }
clearForm();
console.log(PRODUCTS_LIST);
}

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}