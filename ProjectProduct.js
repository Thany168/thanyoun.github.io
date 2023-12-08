const Item=[
    {
        "Img":"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Name":"Americano",
        "des":"Americano cafe : 2$",

    },
    {
        "Img":"/img/Lemon.jpg",
        "Name":"Lemon Tea",
        "des":"Lemon Tea : 1.2$",
        
    },
    {
        "Img":"/img/Orange2.jpg",
        "Name":"Orange Juice",
        "des":"Fresh Orange Juice: 1$",
        
    },
    {
        "Img":"https://img.freepik.com/premium-photo/coffee-wallpaper-4k_937960-19.jpg",
        "Name":"Ice Latte",
        "des":"Ice Latte :1.5$",
        
    },
    {
        "Img":"/img/Orange3.webp",
        "Name":"Water",
        "des":"Natural Water: 0.5$",
        
    },
    {
        "Img":"/img/Bee.webp",
        "Name":"Queen Bee",
        "des":"Queen Bee :2.2$",
        
    },
    {
        "Img":"https://elanaspantry.com/wp-content/uploads/2020/07/The-Best-Milk-For-The-Keto-Diet.jpg",
        "Name":"Fresh Milk",
        "des":"Fresh Milk : 1$.",
        
    },
    {
        "Img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcPt3AwHl1ubimhY3Pnl3fJRQaBQSm3fZSw&usqp=CAU",
        "Name":"Milk",
        "des":"Neilson Milk: 1.2$.",
        
    },

];
getallProduct();
function getallProduct(){
    var data=""
    for (const i of Item) {
       data+=`
       <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 item-box g-3 ">
       <div class="box">
           <div class="box-img">
               <img src="${i.Img}" alt="">
           </div>
           <div class="box-title">
               <h1>${i.Name}</h1>
               <p style="color: gold;">
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
               </p>
               <p>${i.des}</p>
               <button class="btn btn-success text-light btn-outline-primary add_pro">Add Product</button>
                </div>
            </div>
        </div>
       ` 
    }
    document.getElementById("store").innerHTML=data;
}
var count=document.querySelector(".count");
var xmark=document.querySelector(".xmark");
var table_box=document.querySelector(".table-box");
var Add_pro=document.querySelectorAll(".add_pro");
var cart=document.getElementById("cart").addEventListener("click",function(){
    table_box.style.display="block";
})
xmark.addEventListener("click",function(){
    table_box.style.display="none";

})

function Gettbl(){
    var data="";
    var index=1;
    Add_pro.forEach((el,i) =>{
    
        el.addEventListener("click",function(){
            count.innerHTML=index;
            index++;
            data+=`
            <tr>
                <td><img src="${Item[i].Img}" alt="" width="50px" height="50px" style="object-fit: cover;"></td>
                <td>${Item[i].Name}</td>
                <td><button class="btn btn-danger delete">Delete</button></td>
                <td><button class="btn btn-success">Buy</button></td>
            </tr>
            `
                document.getElementById("tbl-data").innerHTML=data;
    Delete();
            
        })
    })
}
Gettbl();
function Delete(){
var Del=document.querySelectorAll(".delete");
Del.forEach((el,i)=>{
    el.addEventListener("click",function(){
        Item.splice(i,1); 
        Delete();
    })
})
}



