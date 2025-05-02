//Timer increments every second
let counter = document.getElementById("counter");
let count=parseInt(counter.innerText);
let intervalId= setInterval(()=>{
    counter.innerText= ++count
},1000);

//manually increment and decrement
let add= document.getElementById("plus")
add.addEventListener("click", ()=>{
    counter.innerText = ++count;
});
let subtract= document.getElementById("minus")
subtract.addEventListener("click",()=>{
    counter.innerText=--count;
});
//Like Numbers
const likesList=document.querySelector(".likes");
const likeCounts={};

document.getElementById("heart").addEventListener("click",()=>{
    if(!likeCounts[count]){
        likeCounts[count]=1;
        const li = document.createElement("li");
        li.dataset.number= count;
        li.innerText=`${count} has been liked 1 time`;
         likesList.appendChild(li);
    } else{
        likeCounts[count]++;
        const li= likesList.querySelector(`li[data-number='${count}']`);
        li.innerText=`${count} has been liked ${likeCounts[count]} times`;
    }
});

//Pause and Resume Timer
const pauseBtn = document.getElementById("pause");
let isPaused = false;

pauseBtn.addEventListener("click",()=>{
    isPaused=!isPaused;
    if(isPaused){
      clearInterval(intervalId);
      pauseBtn.innerText="resume";
      document.getElementById("plus").disabled=true;
      document.getElementById("minus").disabled=true;
      document.getElementById("heart").disabled=true;
      document.getElementById("submit").disabled=true;
    }else {
        intervalId= setInterval(()=>{
            counter.innerText = ++count;
        },1000);
        pauseBtn.innerText="pause";
        document.getElementById("plus").disabled=false;
        document.getElementById("minus").disabled=false;
        document.getElementById("heart").disabled=false;
        document.getElementById("submit").disabled=false;
    }
});

//submit comments
document.getElementById("comment-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;
    const commentList = document.getElementById("list");
    const p = document.createElement("p");
    p.innerText= commentText;
    commentList.appendChild(p);
    commentInput.value="";

});