const body = document.querySelector('body')
const buttons = document.querySelectorAll('.buttons')
buttons.forEach( (button) =>{
  // console.log(button)
  button.addEventListener('click' , (event)=> {
    // console.log(event)
   //  console.log(event.target)
   switch (event.target.id) {
     case 'grey':
    body.style.backgroundColor = "grey"
       break;
            case 'blue':
       body.style.backgroundColor = "blue"

       break;
            case 'white':
    body.style.backgroundColor = "white"

     break;
          case 'yellow':
     body.style.backgroundColor = "yellow"

     break;
     case 'new_colour':
       body.style.backgroundColor = "#006A8DFF"

       break;
     
     
     default:
       // Tab to edit
   }
  })
})
