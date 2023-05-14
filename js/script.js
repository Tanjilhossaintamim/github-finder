const searchbox = document.querySelector('#search');
const searchbtn = document.querySelector('.srcbtn');
const alertbox = document.querySelector('.alart')

searchbtn.addEventListener('click', getdata);
searchbox.addEventListener('focusin', () => {
    searchbox.value = '';
})
let userprofiledata = new User();

async function getdata() {
    try {

        let userdata = searchbox.value.trim();
        if (userdata == '') {
            //alart
            showalert('Add User Name first !')
        }
        else {
            //show profile
            const response = await fetch(`https://api.github.com/users/${userdata}`);
            const data = await response.json();
            if (data.message == 'Not Found') {
                showalert('No User Found !')
            }
            else {
                userprofiledata.showprofile(data);
            }
        }
    }
    catch {
        showalert('Please Check Your Internet Connection !');
        setTimeout(()=>{

            window.location.reload();
        },2000)
    }
}



function showalert(message) {
    alertbox.innerHTML = `<h4 style="background:red; color:#fff ;padding:5px">${message}</h4>`;
    setTimeout(function () {
        alertbox.innerHTML = '';
    }, 2000)


}
