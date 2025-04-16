document.addEventListener("DOMContentLoaded", function (event) {
  const URL =
    "https://crudcrud.com/api/b3095896a43a4cadba2ffc3127265963/busbook";
  const form = document.getElementById("b-form");
  const button = document.getElementById("book-bus");
  const filterBus = document.getElementById("filterBus");

  // posting
  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (button.textContent == "Update") {
      return;
    } else {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const bus = document.getElementById("select-bus").value;
      const obj = {
        username,
        email,
        phone,
        bus,
      };
      // Use the common URL here
      // axios
      //   .post(URL, obj)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      async function post()
      {
        try{
          const p= await axios.post(URL, obj);
          console.log("success while post");

        }
        catch{
          console.log("error while posting");
          

        }
        

      }
    }
  });
  //post function end section

  async function load() {
    try {
      const response = await axios.get(URL);
      console.log(response);

      for (let i = 0; i < response.data.length; i++) {
        console.log(i + "success running");
        displaydetails(response.data[i]);
      }
    } catch {
      console.log("error in fetching api");
    }
  }
  load();

  //load end

  function displaydetails(res) {
    const edit = document.createElement("button");
    const del = document.createElement("button");
    const li = document.createElement("li");
    const data = document.createTextNode(
      "Name:" +
      res.username +
      "  Email:" +
      res.email +
      "  Phone:" +
      res.phone +
      "  Bus:" +
      res.bus +
      " "
    );
    const ul = document.getElementById("ull");
    edit.textContent = " Edit ";
    del.textContent = " Delete ";

    li.appendChild(data);
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);

    //delete function
    del.addEventListener("click", function () {
      console.log("deleting");

      deletes();
      async function deletes() {
        try {
          await axios.delete(`${URL}/${res._id}`);
          console.log("Deleted");
        } catch {
          console.log("error while deleting");
        }
      }
    });

    //edit function
    edit.addEventListener("click", function () {
      console.log("Editing");
      document.getElementById("username").value = res.username;
      document.getElementById("email").value = res.email;
      document.getElementById("phone").value = res.phone;
      document.getElementById("select-bus").value = res.bus;

      button.textContent = "Update";

      button.addEventListener("click", function update(event) {
        event.preventDefault();

        const upobj = {
          username: document.getElementById("username").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          bus: document.getElementById("select-bus").value,
        };
        edit();
        async function edit() {
          try {
            console.log("!!33333");
            const eds = await axios.put(`${URL}/${res._id}`, upobj);
            button.textContent = "Book Bus";
            li.firstChild.textContent = `Name: ${upobj.username}  Email: ${upobj.email}  Phone: ${upobj.phone}  Bus: ${upobj.bus}`;
          } catch {
            console.log("editing gonna error");
          }
        }
      });
    });
  } // end of display details

  ///////filter
  filterBus.addEventListener("change", function () {
    const busvalue = filterBus.value;
    console.log(busvalue);
    const ul = document.getElementById("ull");
    ul.innerHTML = "";
    getfil();
    async function getfil() {
      try {
        const getf = await axios.get(URL);
        console.log(getf);
        console.log("Filter is working fine");
        for (let i = 0; i < getf.data.length; i++) {
          if (busvalue === "all" || getf.data[i].bus === busvalue) {
            displaydetails(getf.data[i]);
          }
        }
      } catch {
        console.log("Filter not working");
      }
    }
  });
});
