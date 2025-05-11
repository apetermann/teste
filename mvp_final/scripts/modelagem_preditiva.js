document.addEventListener("DOMContentLoaded", () => {
    const simulationForm = document.getElementById("simulation-form");
    const simulateButton = document.getElementById("simulate-button");
    const reductionTargetInput = document.getElementById("reduction-target");
    const reductionTargetDisplayValue = document.getElementById("reduction-target-display-value");

    const loader = document.getElementById("loader");
    const resultsSummaryContainer = document.getElementById("results-summary-container");
    const emissionsChartContainer = document.getElementById("emissions-chart-container");
    const financialChartContainer = document.getElementById("financial-chart-container");
    const recommendationsSection = document.getElementById("recommendations-section");
    const nextStepsContainer = document.getElementById("next-steps-container");

    const totalReductionEl = document.getElementById("total-reduction");
    const creditsValueEl = document.getElementById("credits-value");
    const estimatedRoiEl = document.getElementById("estimated-roi");
    const recommendationsContainerEl = document.getElementById("recommendations-container");
    const nextStepsTextEl = document.getElementById("next-steps-text");

    let emissionsChartInstance = null;
    let financialChartInstance = null;

    // Atualizar valor do range slider
    if (reductionTargetInput && reductionTargetDisplayValue) {
        reductionTargetInput.addEventListener("input", (event) => {
            reductionTargetDisplayValue.textContent = `${event.target.value}%`;
        });
    }

    // Função para simular chamada de API
    async function simulateApiCall(formData) {
        loader.style.display = "block";
        resultsSummaryContainer.style.display = "none";
        emissionsChartContainer.style.display = "none";
        financialChartContainer.style.display = "none";
        recommendationsSection.style.display = "none";
        nextStepsContainer.style.display = "none";

        return new Promise(resolve => {
            setTimeout(() => {
                const currentEmissions = parseFloat(formData.get("current-emissions")) || 100000;
                const reductionTarget = parseFloat(formData.get("reduction-target")) / 100 || 0.3;
                const timeHorizon = parseInt(formData.get("time-horizon")) || 5;
                const budget = parseFloat(formData.get("available-budget")) || 20;
                const carbonPrice = parseFloat(formData.get("carbon-credit-price")) || 50;

                // Lógica de simulação simplificada
                const totalEmissionsReduced = currentEmissions * reductionTarget * timeHorizon * (Math.random() * 0.2 + 0.9); // Adiciona um fator aleatório
                const investmentCost = budget * 1000000 * (Math.random() * 0.3 + 0.85); // Custo pode variar
                const creditsGenerated = totalEmissionsReduced;
                const revenueFromCredits = creditsGenerated * carbonPrice;
                const roi = ((revenueFromCredits - investmentCost) / investmentCost) * 100;

                const simulatedData = {
                    totalReduction: totalEmissionsReduced.toFixed(0),
                    creditsValue: revenueFromCredits.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
                    estimatedRoi: roi.toFixed(1) + "%",
                    emissionsProjection: {
                        labels: Array.from({ length: timeHorizon + 1 }, (_, i) => `Ano ${i}`),
                        baseline: Array.from({ length: timeHorizon + 1 }, (_, i) => currentEmissions * (1 - (reductionTarget / timeHorizon) * i * 0.5)), // Redução mais lenta na linha base para contraste
                        projected: Array.from({ length: timeHorizon + 1 }, (_, i) => currentEmissions * (1 - (reductionTarget / timeHorizon) * i)),
                    },
                    financialProjection: {
                        labels: Array.from({ length: timeHorizon + 1 }, (_, i) => `Ano ${i}`),
                        cumulativeInvestment: Array.from({ length: timeHorizon + 1 }, (_, i) => (investmentCost / timeHorizon) * i),
                        cumulativeRevenue: Array.from({ length: timeHorizon + 1 }, (_, i) => (revenueFromCredits / timeHorizon) * i),
                    },
                    recommendations: [
                        {
                            title: "Implementar sistema de recuperação de calor residual",
                            details: `Potencial de redução: ${(totalEmissionsReduced * 0.4).toFixed(0)} tCO2e/ano | Investimento estimado: R$ ${(investmentCost * 0.5 / 1000000).toFixed(1)} milhões | Payback: ${(Math.random() * 2 + 2).toFixed(1)} anos`
                        },
                        {
                            title: "Substituir equipamentos de alta intensidade energética",
                            details: `Potencial de redução: ${(totalEmissionsReduced * 0.3).toFixed(0)} tCO2e/ano | Investimento estimado: R$ ${(investmentCost * 0.3 / 1000000).toFixed(1)} milhões | Payback: ${(Math.random() * 2 + 3).toFixed(1)} anos`
                        },
                        {
                            title: "Otimizar processos logísticos e de transporte",
                            details: `Potencial de redução: ${(totalEmissionsReduced * 0.15).toFixed(0)} tCO2e/ano | Investimento estimado: R$ ${(investmentCost * 0.1 / 1000000).toFixed(1)} milhões | Payback: ${(Math.random() * 1 + 2).toFixed(1)} anos`
                        }
                    ],
                    nextSteps: `Com base na sua simulação, recomendamos iniciar com os projetos de ${formData.get("industry-sector") === "mining" ? "otimização logística e recuperação de calor" : "eficiência energética e substituição de equipamentos"}, que oferecem o melhor equilíbrio entre investimento inicial, potencial de redução e tempo de retorno.`
                };
                loader.style.display = "none";
                resolve(simulatedData);
            }, 2000); // Simula 2 segundos de delay da API
        });
    }

    // Função para renderizar gráficos
    function renderCharts(emissionsData, financialData) {
        const emissionsCtx = document.getElementById("emissions-chart").getContext("2d");
        if (emissionsChartInstance) {
            emissionsChartInstance.destroy();
        }
        emissionsChartInstance = new Chart(emissionsCtx, {
            type: "line",
            data: {
                labels: emissionsData.labels,
                datasets: [
                    {
                        label: "Emissões Base (Sem Ação)",
                        data: emissionsData.baseline,
                        borderColor: "rgba(255, 99, 132, 1)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: "Emissões Projetadas (Com Ação)",
                        data: emissionsData.projected,
                        borderColor: "rgba(16, 185, 129, 1)", // Emerald
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        fill: false,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        title: { display: true, text: 'Emissões (tCO2e/ano)' }
                    }
                }
            }
        });

        const financialCtx = document.getElementById("financial-chart").getContext("2d");
        if (financialChartInstance) {
            financialChartInstance.destroy();
        }
        financialChartInstance = new Chart(financialCtx, {
            type: "bar", // Alterado para bar para melhor visualização de cumulativo
            data: {
                labels: financialData.labels,
                datasets: [
                    {
                        label: "Investimento Acumulado",
                        data: financialData.cumulativeInvestment,
                        backgroundColor: "rgba(255, 159, 64, 0.5)",
                        borderColor: "rgba(255, 159, 64, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Receita Acumulada (Créditos)",
                        data: financialData.cumulativeRevenue,
                        backgroundColor: "rgba(75, 192, 192, 0.5)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Valor (R$)' }
                    }
                }
            }
        });
    }

    // Função para exibir recomendações
    function displayRecommendations(recommendations) {
        recommendationsContainerEl.innerHTML = ""; // Limpa recomendações anteriores
        recommendations.forEach(rec => {
            const recDiv = document.createElement("div");
            recDiv.className = "flex items-start";
            recDiv.innerHTML = `
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-base font-medium text-gray-900">${rec.title}</h4>
                  <p class="text-sm text-gray-600">${rec.details}</p>
                </div>
            `;
            recommendationsContainerEl.appendChild(recDiv);
        });
    }

    if (simulateButton) {
        simulateButton.addEventListener("click", async () => {
            const formData = new FormData(simulationForm);
            const results = await simulateApiCall(formData);

            totalReductionEl.textContent = results.totalReduction + " tCO2e";
            creditsValueEl.textContent = results.creditsValue;
            estimatedRoiEl.textContent = results.estimatedRoi;

            renderCharts(results.emissionsProjection, results.financialProjection);
            displayRecommendations(results.recommendations);
            nextStepsTextEl.textContent = results.nextSteps;

            resultsSummaryContainer.style.display = "grid"; // ou o display original
            emissionsChartContainer.style.display = "block";
            financialChartContainer.style.display = "block";
            recommendationsSection.style.display = "block";
            nextStepsContainer.style.display = "block";
        });
    }
});

