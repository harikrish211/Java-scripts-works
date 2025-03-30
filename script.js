function sub()
{

    const username=document.getElementById('user').value;
const password=document.getElementById('pass').value;

localStorage.setItem('username',username);
localStorage.setItem('password',password);

}

function check()
{
    
const username=document.getElementById('userid').value;
const password=document.getElementById('passw').value;

const usernamels=localStorage.getItem('username');
const passls=localStorage.getItem('password');
if(username==usernamels)
{
    if(password==passls)
    {
        alert("login succesfullly");
    }
    else{

        alert("password is wrong");
    }
    

}
else{
    alert("username is wrong");

}



}