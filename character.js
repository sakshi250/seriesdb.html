let form=document.querySelector('#createform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/createcharacter.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let NAME = document.querySelector('#name').value;
      let SERIES = document.querySelector('#series').value;
    let data ={

        "name":NAME,
        "series":SERIES

    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('character created');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(params); 
});
