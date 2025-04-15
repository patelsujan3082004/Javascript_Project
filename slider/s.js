const slide=document.querySelectorAll(".slide");
console.log(slide);
slide.forEach((text,ind)=>{
    // console.log(ind);
    
text.style.left=`${ind*100}%`;
});
let temp=0;
let temp1=0;
const slider=(()=>{
    
    slide.forEach((x,y)=>{
    
        // temp1++;
        
        if(temp1==5){
            temp=0;
            temp1=0
        }
        if(temp1==-1){
            temp1=4;
            temp=4;
        }
        
        
      x.style.transform=`translateX(-${100*temp}%)`;
   
    })
})
const prev=(()=>{
   
    temp1--;
    console.log(`${temp1}`);
    
    temp--;
    slider();
})
const next=(()=>{
    temp1++;
    console.log(`${temp1}`);
    temp++;
  slider();
})

setInterval(()=>{
    temp1++;
    console.log(`${temp1}`);
    temp++;
  slider();
},2000)