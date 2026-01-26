const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

let customer = []
const step1btn = document.getElementById('submit1');
const step2btn = document.getElementById('submit2');

const step1form = document.getElementById('step1Form');
// step1btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('btn pressed');
// })

step1form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(step1form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone')
    }
    customer.push(data);
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

