function buscar() {
  const termo = document.getElementById("busca").value.trim();
  const resultado = document.getElementById("resultado");

  if (termo === "") {
    resultado.innerHTML = "<p>Digite um produto.</p>";
    return;
  }

  const farmacias = [
    "Farmácia Central",
    "Drogaria São José",
    "Farmácia Popular"
  ];

  resultado.innerHTML = "";

  farmacias.forEach(farmacia => {
    const chance = Math.random();

    let status, classe;

    if (chance > 0.65) {
      status = "Provavelmente disponível";
      classe = "status-ok";
    } else if (chance > 0.35) {
      status = "Consulte a farmácia";
      classe = "status-mid";
    } else {
      status = "Baixa disponibilidade";
      classe = "status-low";
    }

    resultado.innerHTML += `
      <div class="card">
        <strong>${farmacia}</strong>
        <p class="${classe}">${status}</p>
        <a target="_blank"
           href="https://wa.me/5500000000000?text=Olá,%20quero%20${encodeURIComponent(termo)}.%20Vi%20no%20CompreAqui.">
           Pedir agora
        </a>
      </div>
    `;
  });
}

