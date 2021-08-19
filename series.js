let form=document.querySelector('#createform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/createseries.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ID = document.querySelector('#id').value;
    let NAME = document.querySelector('#name').value;
    let GENRE= document.querySelector('#genre').value;
    let DIRECTOR= document.querySelector('#director').vaue;
 let YOR = document.querySelector('#yor').value;
  let YOE = document.querySelector('#yoe').value;
   let STATUS = document.querySelector('#status').value;
    let data ={
        "id":ID,
        "name":NAME,
        "genre":GENRE,
        "director":DIRECTOR,
        "yor":YOR,
        "yoe":YOE,
        "status":STATUS,
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('series created');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(params); 
});
