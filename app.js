console.log("page is working")
 // ==========================================================================================
//is array me object save hoga.
// var data= []
// //is object me user ka input data ayega.
// var AddUserData =(ev) =>{
// ev.preventDefault() //form submit ni hoga on reloading pe
// var userData={
//     name: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     id:  Date(),
// }
// // ub object ka data hum empty array me push krden gy jo uper declare hai data[]
// data.push(userData);
// document.forms[0].reset(); //form ko clear krdya.

// console.log('added your data', {userData})
// // var pre= document.querySelector('#msg pre');
// // pre.textContent= '\n' + JSON.stringify(data, '\t', 2)

// // now localStorage
//ocalStorage.setItem('mydata', JSON.stringify(data))
//}
// ==========================================================================================




function SaveDataToLocalStorage(userData)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    var userData={
        id:  Date(),
        name: document.getElementById("username").value,
        email: document.getElementById("email").value,
    }
    
    a = JSON.parse(localStorage.getItem('mydata')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(userData);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('mydata', JSON.stringify(a));
}





// table me data dalna hai 

$(document).ready(function(){
    var arr1 = new Array();
    arr1 = JSON.parse(localStorage.getItem('mydata'));
    var tbl = document.getElementById('tbody');

    for(i = 0; i < arr1.length ; i++){
        var r = tbl.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        
        cell2.innerHTML = arr1[i].id;
        cell1.innerHTML = arr1[i].name;
        cell3.innerHTML = arr1[i].email;       
    }
});
// table close 
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("btn").addEventListener('click', SaveDataToLocalStorage)
});
