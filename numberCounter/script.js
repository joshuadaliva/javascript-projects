
const increase  = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const result = document.getElementById('result')

let count = 0

const updateCount = () => {
  result.textContent = count
}

increase.addEventListener('click' , ()=> {
  count++;
  updateCount()
})

decrease.addEventListener('click' , ()=> {
  if(count >= 1){
    count--;
    updateCount()
  }
})

reset.addEventListener('click' , ()=> {
  count = 0;
  updateCount()
})




