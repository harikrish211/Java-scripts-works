const get=document.getElementById('get');
const put=document.getElementById('pt');
const post=document.getElementById('pst');
const del=document.getElementById('del');

post.addEventListener('click',posttodo);
function posttodo()
{
  axios.post('https://crudcrud.com/api/122747631c434d5db4409fd484044ce9/todo',{
    username:"ammu",
    age:25,
    gender:"m",
  }).then((response)=>{console.log(response)}).catch((err)=>{console.log(err)});
}

get.addEventListener('click',getdata);

function getdata()
{

  axios.get('https://crudcrud.com/api/122747631c434d5db4409fd484044ce9/todo')
  .then(response=>{console.log(response);
  }).catch(eror=>{console.log(eror);
  })
}

put.addEventListener('click',putdata);

function putdata()
{
    axios.put('https://crudcrud.com/api/122747631c434d5db4409fd484044ce9/todo/67f368fec12ab503e86d244c',
    {
        username:"appu kuttan",
        age:24,
        gender:"m",

    }
).then(res=>{console.log(res);}).catch(er=>{console.log(er);}
);
}

