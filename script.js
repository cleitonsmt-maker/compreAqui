// ======================================
// CONFIGURAÇÃO GLOBAL
// ======================================

// WhatsApp para testes (mesmo número para todos os lojistas)
const WHATSAPP_NUMBER = "5538999835050";

// Farmácias simuladas (MVP)
const farmacias = [
  "Farmácia Central",
  "Drogaria São João",
  "Farmácia Popular"
];

// ======================================
// FUNÇÃO DE BUSCA — FARMÁCIAS
// ======================================

function buscarFarmacia() {
  const termo = document.getElementById("busca").value.trim();
  const resultados = document.getElementById("resultados");

  resultados.innerHTML = "";

  if (!termo) {
    resultados.innerHTML = "<p>Digite o nome do produto.</p>";
    return;
  }

  farmacias.forEach((nomeFarmacia) => {
    const card = document.createElement("div");
    card.className = "result-card";

    const mensagem = `Olá, quero ${termo}. Vi no CompreAqui.`;
    const linkWhatsApp =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    card.innerHTML = `
      <h3>${nomeFarmacia}</h3>
      <p class="status">🟡 Produto provavelmente disponível</p>
      <a class="whatsapp"
         href="${linkWhatsApp}"
         target="_blank">
         Pedir agora
      </a>
    `;

    resultados.appendChild(card);
  });
}

