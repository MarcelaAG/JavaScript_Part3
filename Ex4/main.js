// let password = 'MuggaMugga'


// function check() {
//     return checkPass();
// }

// function checkPass() {
    
//     var response = document.getElementById('pwd').value;
    
//     if (response != password) {
//         document.getElementById('pwd').style.border = '8px solid red';
//         document.getElementById('uname').style.border = '8px solid red';
//         return true;
//     } 
//     else if(response === password){
//     document.getElementById('pwd').style.border = '8px solid green';
//     document.getElementById('uname').style.border = '8px solid green';
//         return false;
//     }
// }

function check(){
    return checkPass();
}

function checkPass(){
    if (document.getElementById('pwd').value != document.getElementById('uname').value){
        document.getElementById('pwd').style.border = '8px solid red';
        document.getElementById('uname').style.border = '8px solid red';
    }
    else{
        document.getElementById('pwd').style.border = '8px solid green';
        document.getElementById('uname').style.border = '8px solid green';

}
}