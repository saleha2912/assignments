let products = {
    data: [
        {
            productName : "Regular T-shirt",
            category : "Topwear",
            price : "50",
            Image: "white-tshirt.jpg",
        },
        {
            productName : "Beige Short Skirt",
            category : "Bottomwear",
            price : "55",
            Image: "short-skirt.jpg",
        },
        {
            productName : "Sporty smartWatch",
            category : "Watch",
            price : "99",
            Image: "sporty-smartwatch.jpg",
        },
        {
            productName : "Basic Knitted Top",
            category : "Topwear",
            price : "45",
            Image: "short-skirt.jpg",
        },
        {
            productName : "Black Leather Jacket",
            category : "Jacket",
            price : "155",
            Image: "black-leather-jacket.jpg",
        },
        {
            productName : "Stylish Pink Trousers",
            category : "Bottomwear",
            price : "98",
            Image: "pink-trousers.jpg",
        },
        {
            productName : "Brown Men's Jacket",
            category : "Jacket",
            price : "195",
            Image: "brown-jacket.jpg",
        },
        {
            productName : "Comfy Gray Pants",
            category : "Bottomwear",
            price : "50",
            Image: "comfy-gray-pants.jpg",
        },
    ],
};
for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card","i.category", "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");

    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value){
    let buttons = document.querySelectorAll(
        ".button-value"
    );
    buttons.forEach((button) => {
        if (valu.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

let elements = document.querySelectorAll(".card");
elements.forEach((element) => {
    if(value == "all") {
        element.classList.remove("hide");
    }else{
        if(element.classList.contains(value)){
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
    }
    });
}

document.getElementById("search").addEventListener
("click", () => {
    let searchInput = document.getElementById
    ("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    elements.forEach((element,index) => {
        if(element.innertext.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        }else {
            cards[index].classList.add("hide");
        }
    
    });
});
