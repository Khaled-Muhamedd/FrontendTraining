// catch tags from HTML
var productName = document.getElementById('productName')
var productPrice = document.getElementById('productPrice')
var productCatogery = document.getElementById('productCatogery')
var productDesc = document.getElementById('productDesc')
var productImage = document.getElementById('productImage')
var addBtn = document.getElementById('addBtn')
// الاراي اللي بيبقي فاضي عشان نخرن فيه ال الاوبجكتس
var productList;
// نفحص هل الوكال ستوردج لو مليان يبقي نحط الداتا داخل الاراي ولو فاضي يبقي الاراي فاضي
if (localStorage.getItem('product') !== null) {
    productList = JSON.parse(localStorage.getItem('product'));
    displaypro()
}
else {
    productList = [];
}

// method for adding by recivivng vaaaaluuue (_values_)
addBtn.onclick = addproduct
function addproduct() {
    // نخزن في اوبجكت
    var product = {
        pName: productName.value,
        price: productPrice.value,
        catogery: productCatogery.value,
        desc: productDesc.value,
        image: 'img.JPG'
    }
    // طباعة الاوبجكت
    if (document.getElementById('addBtn').innerHTML === 'Add product') {
        // تخزين الاراي في لوكال ستوردج وتحويله لسترنج
        productList.push(product)
    }
    else {
        productList.splice(currentIndex, 1, product)
        document.getElementById('addBtn').innerHTML = 'Add product'
    }
    localStorage.setItem('product', JSON.stringify(productList))
    displaypro();
    console.log(productList);
    reset();
}
//dispaly products

function displaypro() {
    var cartoona = ``;
    for (var i = 0; i < productList.length; i++) {
        cartoona += ` <div class="col-md-4 col-sm-6">
                <div class="product border p-2 shadow rounded-3 ">
                    <img src="../images/1.jpg" alt="" class="w-100 border">
                    <h2 class="h4 text-center text-capitalize">${productList[i].pName}</h2>
                    <p class="text-secondary border-bottom  p-2">${productList[i].desc}</p>
                    <p class="border p-4"><span class="fw-bold">price :</span><span class="text-primary fw-bold ms-2">${productList[i].price}</span></p>
                    <p class="p-4 border"><span class="fw-bold ">catogery :</span><span class="text-primary fw-bold ms-2">${productList[i].catogery}</span></p>
                    <div class="text-center">
                    <button onclick="deletePro(${i})" class="btn btn-outline-danger w-50 my-2">Delete <i class="fa fa-trash mx-2"></i></button>
                    <button onclick="updatePro(${i})" class="btn btn-outline-primary w-50 my-2">Update <i class="fa fa-edit mx-2"></i></button>
                    </div>
                </div>
            </div>`
    }
    document.getElementById('rowBody').innerHTML = cartoona;
}
// reset function
function reset() {
    productName.value = null,
        productPrice.value = null,
        productCatogery.value = null,
        productDesc.value = null;
}

// delete product
function deletePro(index) {
    // مسح من الاراي
    productList.splice(index, 1)
    // تعديل علي الديسبلاي
    displaypro();
    // رجوع الوكال الاراي ل اوبجكت
    localStorage.setItem('product', JSON.stringify(productList))
}
// update product 
var currentIndex;
function updatePro(index) {
    currentIndex = index
    productName.value = productList[index].pName;
    productPrice.value = productList[index].price;
    productCatogery.value = productList[index].catogery;
    productDesc.value = productList[index].desc;
    document.getElementById('addBtn').innerHTML = 'UPDATE';
}

// searching function and chatching search input id

var search = document.getElementById('Search')
function searchProduct() {
    var cartoona = ``;
    var searchValue=search.value;
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].pName.toLowerCase().includes(search.value.toLowerCase) == true) {
            cartoona += ` <div class="col-md-4 col-sm-6">
                <div class="product border p-2 shadow rounded-3 ">
                    <img src="../images/1.jpg" alt="" class="w-100 border">
                    <h2 class="h4 text-center text-capitalize">${productList[i].pName}</h2>
                    <p class="text-secondary border-bottom  p-2">${productList[i].desc}</p>
                    <p class="border p-4"><span class="fw-bold">price :</span><span class="text-primary fw-bold ms-2">${productList[i].price}</span></p>
                    <p class="p-4 border"><span class="fw-bold ">catogery :</span><span class="text-primary fw-bold ms-2">${productList[i].catogery}</span></p>
                    <div class="text-center">
                    <button onclick="deletePro(${i})" class="btn btn-outline-danger w-50 my-2">Delete <i class="fa fa-trash mx-2"></i></button>
                    <button onclick="updatePro(${i})" class="btn btn-outline-primary w-50 my-2">Update <i class="fa fa-edit mx-2"></i></button>
                    </div>
                </div>
            </div>`
        }
    }
    document.getElementById('rowBody').innerHTML = cartoona;

}