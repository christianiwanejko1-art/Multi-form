const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

let customer = []
const step1btn = document.getElementById('submit1');
const step2btn = document.getElementById('submit2');

const step1Form = document.getElementById('step1Form');
// step1btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('btn pressed');
// })

step1Form.addEventListener('submit', (e) => {
e.preventDefault();
if (!step1Form.checkValidity()) return;
    const formData = new FormData(step1Form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone')
    }
    customer.push(data);
    console.log(customer)
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
})

const backbtn = document.getElementById('back');

backbtn.addEventListener('click', () => {
  const steps = [...document.querySelectorAll('.steps')];
  const currentIndex = steps.findIndex(
    step => !step.classList.contains('hidden')
  );

  if (currentIndex <= 0) return;

  steps[currentIndex].classList.add('hidden');
  steps[currentIndex - 1].classList.remove('hidden');
});

const email1 = document.getElementById('email');
const name1 = document.getElementById('name');
const phone1 = document.getElementById('phone');



name1.addEventListener('invalid',()=>{
  nameError.textContent = 'This field is required';
  name1.style.border = '1px solid hsl(354, 84%, 57%)';
})

name1.addEventListener('input',()=>{
  if (name1.checkValidity()){
    nameError.textContent = '';
    name1.style.border = '1px solid hsl(213, 96%, 18%);'
  }
})

email1.addEventListener('invalid',()=>{
  emailError.textContent = 'This field is required';
  email1.style.border = '1px solid hsl(354, 84%, 57%)';
})

email1.addEventListener('input',()=>{
  if (email1.checkValidity()){
    emailError.textContent = '';
    email1.style.border = '1px solid hsl(213, 96%, 18%)';
  }
})

phone1.addEventListener('invalid',()=>{
  phoneError.textContent = 'This field is required';
  phone1.style.border = '1px solid hsl(354, 84%, 57%)';
})

phone1.addEventListener('input',()=>{
  if (phone1.checkValidity()){
    phoneError.textContent = '';
    phone1.style.border = '1px solid hsl(213, 96%, 18%);'
  }
})

const cardGroup = document.getElementById('plans');

cardGroup.addEventListener('click', (e) => {
  const card = e.target.closest('.plan');
  if (!card) return;
  console.log(card);
  cardGroup.querySelectorAll('.plan').forEach((c)=>{
    c.classList.remove('active');
  })
  card.classList.add('active');
})
