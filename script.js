const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

let customer = [{id:1}]
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
    customer = []
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

const backbtn = document.getElementById('back1');

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


const toggle = document.getElementById('billingToggle');
const plan1 = document.getElementById('plan1');
const plan1p = plan1.querySelector('p');

const plan2 = document.getElementById('plan2');
const plan2p = plan2.querySelector('p');

const plan3 = document.getElementById('plan3');
const plan3p = plan3.querySelector('p');
const monthsFree = document.querySelectorAll('.monthInfo');
const plans = document.querySelectorAll('.plan')
const change = document.getElementById('yearly');
const change1 = document.getElementById('monthly');

toggle.addEventListener('change',()=>{
  if (toggle.checked) {

    change.classList.add('selectedSwitch');
    change1.classList.remove('selectedSwitch');
    // yearly options
    monthsFree.forEach((month)=>{
      month.classList.remove('monthsFreeHidden');
    })
    // plans.forEach((plan)=>{
    //   plan.style.gridTemplateRows = `2fr 1fr 1fr 1fr`;
    // })
    plan1p.textContent = '$90/yr'
    plan2p.textContent = '$120/yr'
    plan3p.textContent = '$150/yr'
  } else {
    const change = document.getElementById('yearly');
    const change1 = document.getElementById('monthly');

    change.classList.remove('selectedSwitch');
    change1.classList.add('selectedSwitch');

    // monthly options
    monthsFree.forEach((month)=>{
      month.classList.add('monthsFreeHidden');
    })
    plan1p.textContent = '$9/mo'
    plan2p.textContent = '$12/mo'
    plan3p.textContent = '$15/mo'
  }
})

const planBtn = document.getElementById('submit2');

planBtn.addEventListener('click',()=>{
  console.log(toggle.checked)
  if (toggle.checked === true){
    customer[0].status = 'yearly';
  } else {
    customer[0].status = 'monthly'
  }
  const active = document.querySelector('.active');
  const active2 = active.querySelector('h2').textContent;
  customer[0].package = active2;
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
  const service1custom = document.getElementById('service1custom');
  const service2custom = document.getElementById('service2custom');
  const service3custom = document.getElementById('service3custom');
  if (customer[0].status === 'yearly'){
    service1custom.textContent = '+$10/yr';
    service2custom.textContent = '+$20/yr';
    service3custom.textContent = '+$20/yr';
  } else {
    service1custom.textContent = '+$1/mo';
    service2custom.textContent = '+$2/mo';
    service3custom.textContent = '+$2/mo';
  }
})



const planBtn1 = document.getElementById('submit3');

planBtn1.addEventListener('click',()=>{
  console.log(customer)
  step3.classList.add('hidden');
  step4.classList.remove('hidden');
  const checkboxes = document.querySelectorAll('.serviceInputInner')
  let checkedboxesarr = []
  checkboxes.forEach((box)=>{
    if (box.checked == true){
      checkedboxesarr.push(box.id);
    }
  })
  if (customer === null || customer === undefined) return;
  customer[0].requiredServices = checkedboxesarr;
  console.log(customer);
})

const back2 = document.getElementById('back2');

back2.addEventListener(('click'),()=>{
  step3.classList.add('hidden');
  step2.classList.remove('hidden');
})

const back3 = document.getElementById('back3');

back3.addEventListener(('click'),()=>{
  step4.classList.add('hidden');
  step3.classList.remove('hidden');
})

const checkboxesToSelect = document.querySelectorAll('.serviceInputInner');
checkboxesToSelect.forEach((box)=>{
  box.addEventListener('change',()=>{
    console.log(box.checked);
    if (box.checked){
      const parent = box.closest('.service');
      parent.style.border = '2px solid hsl(213, 96%, 18%)';
      parent.style.backgroundColor = 'hsl(218, 100%, 97%)';
    } else {
      const parent = box.closest('.service');
      parent.style.border = '2px solid hsl(229, 24%, 87%)';
      parent.style.backgroundColor = 'hsla(0, 0%, 100%, 1.00)';
    }
  })
})

const cards = document.querySelectorAll('.service');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') return;
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked){
      const parent = checkbox.closest('.service');
      parent.style.border = '2px solid hsl(213, 96%, 18%)';
      parent.style.backgroundColor = 'hsl(218, 100%, 97%)';
    } else {
      const parent = checkbox.closest('.service');
      parent.style.border = '2px solid hsl(229, 24%, 87%)';
      parent.style.backgroundColor = 'hsla(0, 0%, 100%, 1.00)';
    }
  })
  });