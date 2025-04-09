document.addEventListener('DOMContentLoaded', function(event) {

    //set the url as commmon
  const URL = 'https://crudcrud.com/api/5376829cee3042a6bf95830f8b453a81/busbook';

  const form = document.getElementById('b-form');
  const button = document.getElementById('book-bus');
  const filterBus = document.getElementById('filterBus');
  
  // posting 
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
      // Use the common URL here
      axios.post(URL, obj).then(response => {
          console.log(response);
      }).catch(err => {
          console.log(err);
      })
  });
  //post function end section

  //loading of data from cloud
  const data = axios.get(URL).then(response => {
    console.log(response);
    console.log("success");
    console.log(data);

    for(let i = 0; i < response.data.length; i++) {
      console.log(i + "success running");
      displaydetails(response.data[i]);
    }
  }).catch(err => {
    console.log(err);
  })
  //load end

  function displaydetails(res) {
    const edit = document.createElement('button');
    const del = document.createElement('button');
    const li = document.createElement('li');
    const data = document.createTextNode('Name:' + res.username + '  Email:' + res.email + '  Phone:' + res.phone + '  Bus:' + res.bus + " ");
    const ul = document.getElementById('ull');
    edit.textContent = " Edit ";
    del.textContent = " Delete ";
    
    li.appendChild(data);
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);

    //delete function
    del.addEventListener('click', function() {
      console.log("deleting");
      // Use the common URL here
      axios.delete(`${URL}/${res._id}`).then(response => {
        console.log(response);
        ul.removeChild(li);
      }).catch(err => {
        console.log(err);
      })
    })

    //edit function
    edit.addEventListener('click', function() {
      console.log("Editing");

      document.getElementById('username').value = res.username;
      document.getElementById('email').value = res.email;
      document.getElementById('phone').value = res.phone;
      document.getElementById('select-bus').value = res.bus;

      
      button.textContent = "Update";

      
      button.addEventListener('click', function update(event) {
        event.preventDefault();
        const upobj = {
          username: document.getElementById('username').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          bus: document.getElementById('select-bus').value
        };

        
        
        axios.put(`${URL}/${res._id}`, upobj)
          .then(response => {
            console.log(response);
            
            button.textContent = "Book Bus";
           
            li.firstChild.textContent = `Name: ${upobj.username}  Email: ${upobj.email}  Phone: ${upobj.phone}  Bus: ${upobj.bus}`;
          })
          .catch(err => {
            console.log(err);
          });
      });
    });
  }

  ///////filter
  filterBus.addEventListener('change', function() {
    const busvalue = filterBus.value;
    console.log(busvalue);

    const ul = document.getElementById('ull');
    ul.innerHTML = '';

    
    const data1 = axios.get(URL).then(response => {
      console.log(response);

      for (let i = 0; i < response.data.length; i++) {
        
          if (busvalue === 'all' || response.data[i].bus === busvalue) {
          displaydetails(response.data[i]);
        }
      }
    }).catch(err => {
      console.log(err);
    })
  })
});
