const menuBtn=document.getElementById("menuBtn");const nav=document.getElementById("nav");menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".accordion button").forEach(btn=>{btn.addEventListener("click",()=>{const active=btn.classList.contains("active");document.querySelectorAll(".accordion button").forEach(b=>b.classList.remove("active"));if(!active)btn.classList.add("active");});});

const facts=[
"O Ultimate valoriza o “Spirit of the Game”: respeito, honestidade e responsabilidade dos jogadores.",
"No Ultimate, quem está com o disco não pode correr com ele; precisa procurar um companheiro para fazer o passe.",
"O Disc Golf usa diferentes tipos de disco para situações diferentes durante o percurso.",
"O Frisbee pode ser praticado em campos, praias e parques, tanto de forma recreativa quanto competitiva.",
"A precisão de um lançamento depende de fatores como ângulo, força, rotação e direção."
];
let factIndex=0;const fact=document.getElementById("fact");document.getElementById("factBtn").addEventListener("click",()=>{factIndex=(factIndex+1)%facts.length;fact.style.opacity=0;setTimeout(()=>{fact.textContent=facts[factIndex];fact.style.opacity=1},180)});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".section").forEach(s=>{s.style.opacity="0";s.style.transform="translateY(20px)";s.style.transition="opacity .7s ease,transform .7s ease";observer.observe(s)});const style=document.createElement("style");style.textContent=".section.visible{opacity:1!important;transform:none!important}";document.head.appendChild(style);