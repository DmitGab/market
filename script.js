/** @format */

"use strict";
function makeGETRequest(url, callback) {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
class ProductItem {
  constructor(product, img = "http://via.placeholder.com/200x150") {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }
  render() {
    return `<div class = "product-item" data-id =" ${this.id}">
      <img src="${this.img}" alt= "Some img">
        <div class= "desc" >
          <h3>${this.product_name}</h3>
          <p>${this.price}</p>
          <button class = "cart-button">Купить</button>
        </div>
    </div>`;
  }
}
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
class ProductList {
  constructor(container = ".products") {
    this.container = document.querySelector(container);
    this.goods = [];
    this.allProducts = [];
  }
  init() {
    this.fetchGoods(() => {
      list.render();
    });
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      cb();
    });
  }
  render() {
    for (const product of this.goods) {
      let productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      this.container.insertAdjacentHTML("beforeend", productObject.render());
    }
  }
}

const list = new ProductList();
list.init();
