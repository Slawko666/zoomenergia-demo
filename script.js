// Basic interactions: modal, calculator, small UX helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const modalClose = document.getElementById('modalClose');
openModalBtn.addEventListener('click', ()=>{ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); });
modalClose.addEventListener('click', ()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });
modal.addEventListener('click',(e)=>{ if(e.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }});

// Calculator
function computeSavings(){
  const kwh = parseFloat(document.getElementById('kwh').value) || 0;
  const price = parseFloat(document.getElementById('price').value) || 0;
  const coverage = parseFloat(document.getElementById('coverage').value) || 0.7;
  // yearly consumption
  const yearly = kwh * 12;
  const savedKwh = yearly * coverage;
  const savings = Math.round(savedKwh * price);
  document.getElementById('savings').textContent = savings.toLocaleString('pl-PL');
}

document.getElementById('calcBtn').addEventListener('click',(e)=>{ e.preventDefault(); computeSavings(); });
document.getElementById('autoFill').addEventListener('click',(e)=>{ e.preventDefault(); document.getElementById('kwh').value = 350; document.getElementById('price').value = 0.85; document.getElementById('coverage').value = 0.7; computeSavings(); });

// Auto compute on load
computeSavings();