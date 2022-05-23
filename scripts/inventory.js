

let p_data=JSON.parse(localStorage.getItem("products"));
console.log(p_data);
let container=document.getElementById("all_products");
p_data.map(function(el,index){
    let box=document.createElement("div");
    box.setAttribute("class","box");
    let box1=document.createElement("div");
    box1.setAttribute("class","box1");
    let image=document.createElement("img");
    image.src=el.image;
    image.setAttribute("class","image");
    let type=document.createElement("h4");
    type.innerText=el.type;
    let desc=document.createElement("p");
    desc.innerText=el.desc;
    let price=document.createElement("p");
    price.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
        remove_(el,index);
    });
    box.append(image,box1);
    box1.append(type,desc,price,btn);
    container.append(box);
});

function remove_(el,index){
    p_data.splice(index,1);
    console.log(p_data);
    localStorage.setItem("products",JSON.stringify(p_data));
    window.location.reload();
}