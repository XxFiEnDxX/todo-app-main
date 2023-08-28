const theme = document.querySelector(".theme-toggle")
const body = document.querySelector("body")
const list = document.querySelector(".list")

const newTask = document.querySelector("input")
let chk = document.querySelectorAll(".chk-box")
const cnt_item = document.querySelector(".cnt")

const all_btn = document.querySelector(".all-btn")
const active_btn = document.querySelector(".active-btn")
const complete_btn = document.querySelector(".complete-btn")
const clear_btn = document.querySelector(".clear-btn")

let counter = 0;

newTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && newTask.value != "") {
    list.innerHTML += `
    <div class="chk-box duration-150 flex flex-row items-end border-b-[1px] bg-Very-Dark-Desaturated-Blue dark:bg-Very-Light-Gray py-3 px-4 border-Very-Dark-Grayish-Blue-2 dark:border-Very-Light-Grayish-Blue" id="active-status">

    <div class="duration-150 invis w-[19px] h-[19px] max-small:w-[19px] max-small:h-[19px] cursor-pointer border-2 rounded-full border-solid border-Very-Dark-Grayish-Blue  dark:hover:border-violet-500 hover:border-violet-500 dark:border-Light-Grayish-Blue-L grid place-items-center"></div>
      
      <p class="invis duration-150 leading-3 bg-Very-Dark-Desaturated-Blue dark:bg-Very-Light-Gray  text-Light-Grayish-Blue  dark:text-Very-Dark-Desaturated-Blue text-justify align-baseline outline-none w-[100%] px-4 text-sm">${newTask.value}</p>
      
      <img class="cursor-pointer" src="./images/icon-cross.svg" alt="">
      
      </div>
      `
      newTask.value = ""
      chk = document.querySelectorAll(".chk-box")

      ++counter;
      setChk()
      setCounter()
      if(list_status == "complete"){
        hideFunc("complete","active-status")
      }
      if(list_status == "active"){
        hideFunc("active","complete-status")
      }

  }
})

function setCounter(){
    cnt_item.innerHTML = counter;
}

function setChk() {
  chk.forEach((chk)=>{  
    chk.addEventListener('click',(e)=>{

      if(e.target.tagName == "IMG"){
        list.removeChild(e.target.parentNode)
        if(e.target.parentNode.children[1].classList.length == 13){
          --counter
          setCounter()
        }
      }
      else{
        e.target.children[0].classList.toggle('chk-btn-color')
        e.target.children[1].classList.toggle('todo-done')
        e.target.id = e.target.id == "active-status"?"complete-status":"active-status"
        
        if(e.target.children[1].classList.length == 13){
          e.target.children[0].innerHTML = ''
          counter++
          setCounter()
        }else{
          e.target.children[0].innerHTML = `<img class="invis w-[8px] h-[8px]" src="./images/icon-check.svg" alt=""></img>`
          counter--
          setCounter()
        }
      }
  })
  })
}

let list_status = "default"

function defaultFun() {
  list_status = "default"
  all_btn.classList.add("text-Bright-Blue")
  active_btn.classList.remove("active-color")
  complete_btn.classList.remove("active-color")
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].classList.remove("hide-item")
  }
}
function hideFunc(status,class_status) {
  list_status = status
  if(status == "active"){
    all_btn.classList.remove("text-Bright-Blue")
    active_btn.classList.add("active-color")
    complete_btn.classList.remove("active-color")
  }
  else{
    complete_btn.classList.add("active-color")
    active_btn.classList.remove("active-color")
    all_btn.classList.remove("text-Bright-Blue")
  }
  for (let i = 0; i < list.children.length; i++) {
    let ele = list.children[i]
    ele.id == class_status?ele.classList.add("hide-item"):ele.classList.remove("hide-item")
  }
}
function removeFunc() {
  console.log("inc");
  const size = list.children.length
  for (let i = size-1; i >= 0; i--) {
    if(list.children[i].id == "complete-status"){
      list.removeChild(list.children[i])
    }
  }
}

all_btn.addEventListener('click',()=>{defaultFun()})
active_btn.addEventListener('click',()=>{list_status != "active"?hideFunc("active","complete-status"):defaultFun()})
complete_btn.addEventListener('click',()=>{list_status != "complete"?hideFunc("complete","active-status"):defaultFun()})
clear_btn.addEventListener('click',()=>{removeFunc()})

theme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark")
})
