const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "french",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Idli Vada",
    category: "indian",
    price: 19.99,
    img: "https://img.freepik.com/premium-photo/idli-vada-south-indian-food_57665-11440.jpg?w=2000",
    desc: `idli vada with chutney sambar will be super lol xyz.`,
  }
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
let filterBtns;
window.addEventListener("DOMContentLoaded",function(){
  updateMenus(menu);
  const categories = menu.reduce(function(values,item){
      if(!values.includes(item.category)){
        values.push(item.category)
      }

      return values;
  },["all"])

  generateFilterBtn(categories)
  filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn)=>{
    btn.addEventListener("click",function(){
      const category = this.dataset.id;
      let fliteredMenu = menu.filter((item)=>{
        return item.category === category;
      })
  
      if(category === 'all') {
        updateMenus(menu);
        return;
      }
      updateMenus(fliteredMenu);
    })
  
  
  })

})


//generate filter buttons
function generateFilterBtn(categories){
  categoryElements = categories.map((category)=>{
    return `
    <button class="filter-btn" data-id="${category}">${category}</button>
    `
  })

  categoryElements = categoryElements.join("");
  btnContainer.innerHTML = categoryElements;
}





//updating menus logic







function updateMenus(menuItems){
  let displayMenu = menuItems.map((menuItem)=>{
    return `
    <article class="menu-item">
      <img src="${menuItem.img}" class="photo" alt="menu item">
      <div class="item-info">
        <header>
          <h4>${menuItem.title}</h4>
          <h4 class="price">$${menuItem.price}</h4>
        </header>
        <p class="item-text">${menuItem.desc}</p>
      </div>
    </article>
    `
  });

  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}