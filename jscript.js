document.addEventListener('DOMContentLoaded', function(event) {
  
  const form = document.getElementById('b-form');
  const button = document.getElementById('book-bus');
  
  
  //this function for posting 
  button.addEventListener('click', function(event) {
      event.preventDefault(); 
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const bus = document.getElementById('select-bus').value;
      const obj = {
          username,
          email,
          phone,
          bus
      };
axios.post('https://crudcrud.com/api/5f74a18173c3453da138a17ca8c4a2f4/busbook',obj).then(response=>{console.log(response);
}).catch(err=>{console.log(err);
})
  });
  //post function end section


  const data=axios.get('https://crudcrud.com/api/5f74a18173c3453da138a17ca8c4a2f4/busbook').then(response=>{console.log(response);
    console.log("success");
    
    for(let i=0;i<response.data.length;i++)
    {
      console.log(i+"suceess running");
      displaydetails(response.data[i]);
    }
  }).catch(err=>{console.log(err);
  })


  function displaydetails(res)
  {

    const edit=document.createElement('button');
    const del=document.createElement('button');
    edit.textContent = " Edit ";
    del.textContent = " Delete ";
     
    
     
  
    const li=document.createElement('li');
    const data=document.createTextNode('Name:'+res.username+'  Email:'+res.email+'  Phone:'+res.phone+'  Bus:'+res.bus +" ");
    
    li.appendChild(data);
    li.appendChild(edit);
    li.appendChild(del);
    const ul=document.getElementById('ull');
    ul.appendChild(li);

  }







});
