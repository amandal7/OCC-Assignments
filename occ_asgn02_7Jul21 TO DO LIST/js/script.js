function addMore()
{
    document.getElementById('error').innerHTML='';


    let name=document.getElementById('name').value;
    if(name=='')
    {
        document.getElementById('error').innerHTML='Please Enter The Value';
    }else
    {
        let box=document.getElementById('box');

        let li=document.createElement('li');
        li.textContent=name;


        let position=box.firstElementChild;
        if(position==null)
        {
            box.appendChild(li);
        }
        else
        {
            box.appendChild(li,position);
        }
        

        let a=document.createElement('a');
        a.textContent='X';
        a.href='javascript:void(0)';
        a.className='remove';
        li.appendChild(a);



    }
    document.getElementById('name').value='';

}

let btn=document.querySelector('ul');
btn.addEventListener('click',function(e)
{
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
});
