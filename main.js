//plusbtn
let totalPrice= document.getElementById("totalp")
let sum=0


function plusClick(id){
    console.log(id)// p1/p2/p3
    console.log(id[1]) // 1/2/3
    let quantity=document.getElementById("q"+id[1])
    quantity.innerHTML= Number(quantity.innerHTML)+1

    let total= document.getElementById("t"+id[1])
    let price = document.getElementById("s"+id[1])
    
    total.innerHTML= +total.innerHTML + Number(price.innerHTML)

    sum= Number(price.innerHTML)+sum
    
    totalPrice.innerHTML=sum


}