let prodactNameInput = document.querySelector(".name input");
let prodactCategoryInput = document.querySelector(".category input");
let prodactPriceInput = document.querySelector(".price input");
let prodactDiscountInput = document.querySelector(".discount input");
let prodactQuantityInput = document.querySelector(".quantity input");
let prodactDescriptionInput = document.querySelector("#area");
let addButton = document.querySelector("#Add");
let searchBtn = document.querySelector("#searchBtn");
let showData = document.querySelector("#showData");
let alertT = document.querySelector("#alertT");
let uppDate = document.querySelector("#uppDate");

let prodactContainer = [];

if (localStorage.getItem("prodacts")) {
  prodactContainer = JSON.parse(localStorage.getItem("prodacts"));
  displayProduct();
}

let onAdd = function () {
  let prodact = {
    name: prodactNameInput.value,
    category: prodactCategoryInput.value,
    price: prodactPriceInput.value,
    discount: prodactDiscountInput.value,
    quantity: prodactQuantityInput.value,
    description: prodactDescriptionInput.value,
  };
  if (prodact.name === "" || prodact.price === "") {
    console.log("string");
    prodactNameInput.style.border = "1px solid red";
    prodactPriceInput.style.border = "1px solid red";

    alertT.style.display = "block";
  } else {
    prodactContainer.push(prodact);
    console.log(prodactContainer);
    localStorage.setItem("prodacts", JSON.stringify(prodactContainer));
    displayProduct();
    clearInputs();
    searchBtn.style.display = "block";
    prodactNameInput.style.border = "none";
    prodactPriceInput.style.border = "none";
    alertT.style.display = "none";
  }
};
// let onAdd = function () {
//   let prodact = {
//     name: prodactNameInput.value,
//     category: prodactCategoryInput.value,
//     price: prodactPriceInput.value,
//     discount: prodactDiscountInput.value,
//     quantity: prodactQuantityInput.value,
//     description: prodactDescriptionInput.value,
//   };
//   prodactContainer.push(prodact);
//   console.log(prodactContainer);
//   localStorage.setItem("prodacts", JSON.stringify(prodactContainer));
//   displayProduct();
//   clearInputs();

//   searchBtn.style.display = "block";
// };
addButton.addEventListener("click", onAdd);
addButton.addEventListener("click", onAdd);

function displayProduct() {
  let zo7 = "";
  for (let i = 0; i < prodactContainer.length; i++) {
    zo7 += `
            <tr>
              <td>${prodactContainer[i].name}</td>
              <td>${prodactContainer[i].category}</td>
              <td>${prodactContainer[i].price}</td>
              <td>${prodactContainer[i].discount}</td>
              <td>${prodactContainer[i].quantity}</td>
              <td>${prodactContainer[i].description}</td>
              <td><i onclick="setForm(${i})" class="fas fa-edit" id="upDate"></i></td>
              <td><i  class="fas fa-trash-alt" onclick='deletProduct(${i})'></i></td>
            </tr >
            `;
  }
  document.getElementById("showData").innerHTML = zo7;
}

// Remove products
function deletProduct(productIndex) {
  prodactContainer.splice(productIndex, 1);
  localStorage.setItem("prodacts", JSON.stringify(prodactContainer));
  displayProduct();
}

// Clear iputs
function clearInputs() {
  prodactNameInput.value = "";
  prodactCategoryInput.value = "";
  prodactPriceInput.value = "";
  prodactDiscountInput.value = "";
  prodactQuantityInput.value = "";
  prodactDescriptionInput.value = "";
}

// Search Product

function searchProduct(term) {
  // console.log("True");
  // if(prodactContainer.toLowerCase().includes(term.toLowerCase()))

  let zo7 = "";
  for (let i = 0; i < prodactContainer.length; i++) {
    if (
      prodactContainer[i].name.toLowerCase().includes(term.toLowerCase()) ||
      prodactContainer[i].price.toLowerCase().includes(term.toLowerCase())
    ) {
      zo7 += `
            <tr>
              <td>${prodactContainer[i].name}</td>
              <td>${prodactContainer[i].category}</td>
              <td>${prodactContainer[i].price}</td>
              <td>${prodactContainer[i].discount}</td>
              <td>${prodactContainer[i].quantity}</td>
              <td>${prodactContainer[i].description}</td>
              <td><i class="fas fa-edit" id="upDate"></i></td>
              <td><i  class="fas fa-trash-alt" onclick='deletProduct(${i})'></i></td>
            </tr >
            `;
    }
    document.getElementById("showData").innerHTML = zo7;
  }
}

searchBtn.addEventListener("input", () => {
  searchProduct(searchBtn.value);
});

// set data
let x = 0;

function setForm(productIndex) {
  x = productIndex;
  // console.log("set form " + productIndex);
  prodactNameInput.value = prodactContainer[productIndex].name;
  prodactCategoryInput.value = prodactContainer[productIndex].category;
  prodactPriceInput.value = prodactContainer[productIndex].price;
  prodactDiscountInput.value = prodactContainer[productIndex].discount;
  prodactQuantityInput.value = prodactContainer[productIndex].quantity;
  prodactDescriptionInput.value = prodactContainer[productIndex].description;

  addButton.style.display = "none";
  uppDate.style.display = "block";
}
// On upDate information
uppDate.addEventListener("click", () => {
  console.log(x);
  prodactContainer[x].name = prodactNameInput.value;
  prodactContainer[x].category = prodactCategoryInput.value;
  prodactContainer[x].price = prodactPriceInput.value;
  prodactContainer[x].discount = prodactDiscountInput.value;
  prodactContainer[x].quantity = prodactQuantityInput.value;
  prodactContainer[x].description = prodactDescriptionInput.value;
  localStorage.setItem("prodacts", JSON.stringify(prodactContainer));
  displayProduct();
  clearInputs();
  addButton.style.display = "block";
  uppDate.style.display = "none";
});
