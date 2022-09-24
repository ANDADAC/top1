const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  let machineName="the Machine";
  if (btn.textContent === `Start ${machineName}`) {
    btn.textContent = `Stop ${machineName}`;
    txt.textContent = `${machineName} has started!`;
  } else {
    btn.textContent = `Start ${machineName}`;
    txt.textContent = `${machineName} is stopped.`;
  }
}
