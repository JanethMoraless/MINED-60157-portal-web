/**
 * Centro Escolar Cantón Mizata - Dashboard KPIS
 * Lógica centralizada y profesional
 */

const AppStore = {
  grados: [
    { nombre: "Parvularia 4 años", m: 1, f: 3 },
    { nombre: "Parvularia 5 años", m: 3, f: 4 },
    { nombre: "Parvularia 6 años", m: 11, f: 4 },
    { nombre: "Primer Grado", m: 7, f: 13 },
    { nombre: "Segundo Grado", m: 11, f: 5 },
    { nombre: "Tercer Grado", m: 16, f: 9 },
    { nombre: "Cuarto Grado", m: 17, f: 19 },
    { nombre: "Quinto Grado", m: 20, f: 11 },
    { nombre: "Sexto Grado", m: 12, f: 10 },
    { nombre: "Séptimo Grado", m: 16, f: 13 },
    { nombre: "Octavo Grado", m: 14, f: 10 },
    { nombre: "Noveno Grado", m: 14, f: 11 },
  ],

  chartInstances: {},

  get Totales() {
    return this.grados.reduce(
      (acc, g) => {
        acc.m += g.m;
        acc.f += g.f;
        acc.t += g.m + g.f;
        return acc;
      },
      { m: 0, f: 0, t: 0 },
    );
  },
};

// Navegación
function navigateTo(sectionId) {
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("active"));
  document
    .querySelectorAll(".nav-link-apple")
    .forEach((link) => link.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");
  document
    .querySelectorAll(`[data-target="${sectionId}"]`)
    .forEach((btn) => btn.classList.add("active"));

  renderSectionCharts(sectionId);
}

// Renderizado de gráficos
function renderSectionCharts(sectionId) {
  const totals = AppStore.Totales;

  // Destruir gráficos anteriores
  if (AppStore.chartInstances[sectionId]) {
    AppStore.chartInstances[sectionId].forEach((chart) => chart.destroy());
  }
  AppStore.chartInstances[sectionId] = [];

  const fontConfig = {
    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
    size: 12,
  };

  if (sectionId === "inicio") {
    // Gráfico de Género
    const ctxGen = document
      .getElementById("generoChartInicio")
      ?.getContext("2d");
    if (ctxGen) {
      AppStore.chartInstances["inicio"].push(
        new Chart(ctxGen, {
          type: "doughnut",
          data: {
            labels: ["Masculino", "Femenino"],
            datasets: [
              {
                data: [totals.m, totals.f],
                backgroundColor: ["#002f6c", "#0ea5e9"],
                borderWidth: 5,
                borderColor: "#ffffff",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "72%",
          },
        }),
      );
    }

    // Gráfico de Grados
    const ctxGrad = document
      .getElementById("gradoChartInicio")
      ?.getContext("2d");
    if (ctxGrad) {
      AppStore.chartInstances["inicio"].push(
        new Chart(ctxGrad, {
          type: "bar",
          data: {
            labels: AppStore.grados.map((g) => g.nombre),
            datasets: [
              {
                label: "Matrícula",
                data: AppStore.grados.map((g) => g.m + g.f),
                backgroundColor: "#002f6c",
                borderRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          },
        }),
      );
    }
  } else if (sectionId === "estadisticas") {
    const ctxComp = document
      .getElementById("comparativoChartDetalle")
      ?.getContext("2d");
    if (ctxComp) {
      AppStore.chartInstances["estadisticas"].push(
        new Chart(ctxComp, {
          type: "bar",
          data: {
            labels: AppStore.grados.map((g) => g.nombre),
            datasets: [
              {
                label: "Masculino",
                data: AppStore.grados.map((g) => g.m),
                backgroundColor: "#002f6c",
              },
              {
                label: "Femenino",
                data: AppStore.grados.map((g) => g.f),
                backgroundColor: "#0ea5e9",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        }),
      );
    }
  }
}

// Renderizar Tabla
function renderTableData() {
  const tbody = document.querySelector("#matrizTable tbody");
  const totals = AppStore.Totales;

  tbody.innerHTML = AppStore.grados
    .map(
      (g) => `
        <tr class="hover:bg-slate-50">
            <td class="px-6 py-4">${g.nombre}</td>
            <td class="px-6 py-4 text-center">${g.m}</td>
            <td class="px-6 py-4 text-center">${g.f}</td>
            <td class="px-6 py-4 text-center font-semibold">${g.m + g.f}</td>
        </tr>
    `,
    )
    .join("");

  document.getElementById("tableTotalM").textContent = totals.m;
  document.getElementById("tableTotalF").textContent = totals.f;
  document.getElementById("tableTotalG").textContent = totals.t;
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  const totals = AppStore.Totales;

  // Alimentar KPIs
  document.getElementById("totalKPI").textContent = totals.t;
  document.getElementById("maleKPI").textContent = totals.m;
  document.getElementById("femaleKPI").textContent = totals.f;

  // Render inicial
  renderTableData();
  renderSectionCharts("inicio");

  // Listeners de navegación
  document.querySelectorAll(".nav-link-apple").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-target");
      navigateTo(target);
      document.getElementById("mobileMenu").classList.add("hidden");
    });
  });

  // Menú móvil
  document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  });
});
