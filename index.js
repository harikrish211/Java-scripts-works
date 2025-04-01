function save(event)
{
    event.preventDefault();
    let name=document.getElementById('uname').value;
    let email=document.getElementById('gmail').value;
    let phone=document.getElementById('phone').value;
    let dob=document.getElementById('dob').value;
    let lists=document.getElementById('list1');
    const data={
        name,
        email,
        phone,
        dob  };

        localStorage.setItem(email,JSON.stringify(data));
        const list=document.createElement('li');
        const listcontent=document.createTextNode(" Name : "+name +" Email: "+ email+" Phone: "+phone+ " Dob:"+ dob);
        const del=document.createElement('button');
        
        const edit=document.createElement('button');
        edit.innerText="Edit";
        del.innerText="Delete";
        list.appendChild(listcontent);
        list.appendChild(del);
       
        list.appendChild(edit);
        lists.appendChild(list);



        del.addEventListener('click',()=>
    {
        list.remove();

    })

    edit.addEventListener('click',()=>{
        list.remove();
        localStorage.removeItem(email);

        document.getElementById('uname').value = name;
        document.getElementById('gmail').value = email;
        document.getElementById('phone').value = phone;


    })

    
    document.getElementById('uname').value = null;
    document.getElementById('gmail').value = null;
    document.getElementById('phone').value= null;


   
        
       

}