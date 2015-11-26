document.querySelector('img.preview').addEventListener('click',function(e){
    var lowRes=e.target.src;
    var myOverlay = document.querySelector('.overlay');
    var highRes=document.createElement('img');
    var mySpinner=document.createElement('img');
    
    myOverlay.style.display='block';
    highRes.className='bgImg';
    highRes.src = lowRes.substr(0,lowRes.length);
    console.log(lowRes);
    myOverlay.appendChild(highRes);
    
    mySpinner.className='spinner';
    mySpinner.src='images/spinner1.gif';
    myOverlay.appendChild(mySpinner);
    
    highRes.addEventListener('load',function(){
        mySpinner.parentNode.removeChild(mySpinner);
    },false);
    
},false);