const tg = window.Telegram.WebApp;
tg.expand();

let products = [
  { id: 1, name: "Elf Bar 5000", price: 2500 },
  { id: 2, name: "HQD Cuvie", price: 2000 },
  { id: 3, name: "Maskking High", price: 2200 }
];

let cart = [];
const list = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<b>${p.name}</b> — ${p.price}₸ <button>+</button>`;
  div.querySelector("button").onclick = () => {
    cart.push(p);
    alert(p.name + " добавлен в заказ!");
    localStorage.setItem("tg_cart", JSON.stringify(cart));
  };
  list.appendChild(div);
});

document.getElementById("checkoutBtn").onclick = () => {
  if (!cart.length) return alert("Корзина пуста");
  window.location.href = "checkout.html";
};