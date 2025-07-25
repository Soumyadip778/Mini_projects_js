const form = document.querySelector('form')

// const formHeight = document.querySelector('#height').value
// this use case will give empty value

form.addEventListener('submit' , (e) => {
  e.preventDefault()
    const result = document.querySelector('.result')
  const formHeight = document.querySelector('#height').value
  const height = (formHeight /100)
  const weight = document.querySelector('#weight').value
  
  if (formHeight === "" || height <0 || isNaN(height)) {
   result.innerHTML = "Please enter a valid height"
  }else if (weight === "" || weight <0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight"
  }else{
  const formula = (weight/(height*height))
const bmi = formula.toFixed(2)
result.innerHTML = bmi
console.log(result)
const guide = document.querySelector('.guide-value')
  
         if (bmi <= 18.5) {
    guide.innerHTML = "You have underweight "
  } else if (bmi <= 24.9) {
    guide.innerHTML = "You have Healthy Weight"
  } else if (bmi <= 29.9) {
    guide.innerHTML = "You have over Weight"
  } else {
    guide.innerHTML = "You have obessity"
  }
  }
})
