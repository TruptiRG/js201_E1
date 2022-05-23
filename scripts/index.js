//store the products array in localstorage as "products"

function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function p1(){
    let type=document.querySelector("#type").value;
    let desc=document.querySelector("#desc").value;
    let price=document.querySelector("#price").value;
    let image=document.querySelector("#image").value;

    let t1= new product(type,desc,price,image);
    let arr= JSON.parse(localStorage.getItem("products"))||[]
    arr.push(t1);
    console.log(t1);
    localStorage.setItem("products",JSON.stringify(arr));

    document.getElementById("type").value=null;
    document.getElementById("desc").value=null;
    document.getElementById("price").value=null;
    document.getElementById("image").value=null;
}
