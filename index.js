const slide=document.querySelectorAll(".slideBar")


slide.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
}
);
var counter=0;
const slider=()=>{
    slide.forEach((slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`;
        }
    );
}

const move=()=>{
    if(counter>3){
        counter=0;
        slider();
    }
    else{
        slider();
        counter++;
    }
}
setInterval(move,4000);


const slide1=document.querySelectorAll(".slider3-item");
slide1.forEach((slide1,index)=>{
    slide1.style.left=`${index*100}%`
}
);
var counter1=0;
const slider1=()=>{
    slide1.forEach((slide1)=>{
            slide1.style.transform=`translateX(-${counter1*100}%)`;
        }
    );
}
const move1=()=>{
    if(counter1>4){
        counter1=0;
        slider1();
    }
    else{
        slider1();
        counter1++;
    }
}
setInterval(move1,4000);