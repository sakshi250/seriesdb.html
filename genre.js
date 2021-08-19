let form=document.querySelector('#createform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/creategenre.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let GENRE = document.querySelector('#genre').value;
    
    let data ={

        "genre":GENRE,

    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('genre created');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(params); 
});
