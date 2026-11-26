/* ===== CONFIGURAÇÃO — edite aqui ===== */
const WHATSAPP = "5531983898009";   // DDI + DDD + número, só dígitos (ex.: 5531987654321)
const INSTAGRAM = "https://www.instagram.com/_fainformatica?avpt=MW56endmZ24xa3d6aA==";               // ex.: "https://instagram.com/seuperfil"
/* ====================================== */

const waLink = (msg = "Olá! Vim pelo site da FA Informática e gostaria de um orçamento.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Links do WhatsApp e Instagram
document.getElementById("waDirect").href = waLink();
document.getElementById("waFloat").href = waLink();
const ig = document.getElementById("igLink");
if (INSTAGRAM) ig.href = INSTAGRAM; else ig.style.display = "none";

// Menu mobile
const menu = document.getElementById("menu");
const btn = document.getElementById("menuBtn");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open");
  btn.setAttribute("aria-expanded", false);
}));

// Formulário -> mensagem pronta no WhatsApp
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const equip = document.getElementById("equip").value;
  const problema = document.getElementById("problema").value.trim();
  const msg = `Olá! Meu nome é ${nome}.\nEquipamento: ${equip}\nProblema: ${problema}\n\nGostaria de um orçamento.`;
  window.open(waLink(msg), "_blank", "noopener");
});

// Animação ao rolar a página
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
