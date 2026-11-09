// catch elements
var username = document.getElementById('userName')
var userphone = document.getElementById('userPhone')
var useremail = document.getElementById('userEmail')
var createBtn = document.getElementById('createBtn')
var cartoona
var users;

if (localStorage.getItem('Data') !== null) {
    users = JSON.parse(localStorage.getItem('Data'))
    displayData()
}
else {
    users = [];
}
function add() {
    // collecting values into object
    var newuser = {
        name: username.value,
        phone: userphone.value,
        email: useremail.value,
    };
    if(document.getElementById('createBtn').innerHTML==='Create'){
    users.push(newuser);
    }
    else{
        users.splice(currentIndex,1,newuser)
        document.getElementById('createBtn').innerHTML='Create'
    }
    localStorage.setItem('Data', JSON.stringify(users))
    displayData()
    resett()

}
// dispaly function
function displayData() {
    cartoona = ``
    for (var i = 0; i < users.length; i++) {
        cartoona += `<tr>
                <td>${users[i].name}</td>
                <td>${users[i].phone}</td>
                <td>${users[i].email}</td>
                <td>
                    <button class="btn btn-outline-danger mx-1" onclick="remove(${i})"><i class="fa fa-trash"></i></button>
                    <button class="btn btn-outline-primary" onclick="update(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                </td>
            </tr>`
    }
    document.getElementById('Tbody').innerHTML = cartoona;
}
function resett() {
    username.value = null
    userphone.value = null
    useremail.value = null
}
function reset() {
    username.value = null
    userphone.value = null
    useremail.value = null
    document.getElementById('Tbody').innerHTML = ``;
    localStorage.clear('Data')
}

function remove(index) {
    users.splice(index, 1)
    displayData()
    localStorage.setItem('Data', JSON.stringify(users))
}
var currentIndex
function update(index){
    currentIndex=index
    username.value=users[index].name
    userphone.vlaue=users[index].phone
    useremail.value=users[index].email
    document.getElementById('createBtn').innerHTML='UPDATE'
}





