
// catching elementes from dom
let Sitename = document.getElementById('sitename')
let SiteURL = document.getElementById('siteurl')
let SubmitBtn = document.getElementById('submit')
let sitesList = []

if (localStorage.getItem('sites') !== null) {
    sitesList = JSON.parse(localStorage.getItem('sites'))
    display()
}
else {
    sitesList = []
}

SubmitBtn.onclick = getsite

// function for getsites by storing object in array 
function getsite() {
    let dataobject = {
        name: Sitename.value,
        url: SiteURL.value,
    }
    sitesList.push(dataobject)
    localStorage.setItem('sites', JSON.stringify(sitesList))
    display()

    Sitename.value = '';
    SiteURL.value = '';
}
// display function
function display() {
    let cartona = ``
    for (let i = 0; i < sitesList.length; i++) {
        let name = sitesList[i].name;
        let rawUrl = sitesList[i].url.trim();
        let finalUrl = rawUrl;
        if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
            finalUrl = "https://" + rawUrl;
        }


        cartona += `<tr>
                        <td>${i + 1}</td>
                        <td>${sitesList[i].name}</td>
                        <td>
                            <button onclick="visitSite('${sitesList[i].url}')" class="btn btn-visit">
                            <i class="fa-solid fa-eye"></i> Visit
                            </button>
                        </td>
                        <td>
                           <button onclick="deleteSite(${i})" class="btn btn-delete">
                                <i class="fa-solid fa-trash"></i> Delete
                            </button>
                        </td>
                    </tr>`
    } document.getElementById('Tbody').innerHTML = cartona;
}

// delete
function deleteSite(index) {
    sitesList.splice(index, 1);
    localStorage.setItem('sites', JSON.stringify(sitesList));
    display();
}
// open url
function visitSite(rawUrl) {
    if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
        rawUrl = "https://" + rawUrl;
    }
    window.open(rawUrl, '_blank');
}