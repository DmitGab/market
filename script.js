/** @format */

"use strict";
class ProductItem {
  constructor(product, img = "http://via.placeholder.com/200x150") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }
  render() {
    return `<div class = "product-item" data-id =" ${this.id}">
      <img src="${this.img}" alt= "Some img">
        <div class= "desc" >
          <h3>${this.title}</h3>
          <p>${this.price}</p>
          <button class = "cart-button">Купить</button>
        </div>
    </div>`;
  }
}
class ProductList {
  constructor(container = ".products") {
    this.container = document.querySelector(container);
    this.goods = [];
    this.allProducts = [];
  }
  init() {
    this.fetchGoods();
    this.render();
  }

  fetchGoods() {
    this.goods = [
      {id: 1, title: "Burger-1", price: 80000},
      {id: 2, title: "Burger-2", price: 1500},
      {id: 3, title: "Burger-3", price: 5000},
      {id: 4, title: "Burger-4", price: 18000},
    ];
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
