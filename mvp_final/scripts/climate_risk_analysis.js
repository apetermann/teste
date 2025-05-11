document.addEventListener("DOMContentLoaded", () => {
    const climateRiskForm = document.getElementById("climate-risk-form");
    const analyzeRiskButton = document.getElementById("analyze-risk-button");

    const riskLoader = document.getElementById("risk-loader");
    const riskSummaryContainer = document.getElementById("risk-summary-container");
    const physicalRiskScoreEl = document.getElementById("physical-risk-score");
    const transitionRiskScoreEl = document.getElementById("transition-risk-score");
    const physicalRisksListEl = document.getElementById("physical-risks-list");
    const transitionRisksListEl = document.getElementById("transition-risks-list");
    const heatmapPlaceholderEl = document.getElementById("heatmap-placeholder");
    const mitigationRecommendationsContainer = document.getElementById("mitigation-recommendations-container");
    const recommendationsListEl = document.getElementById("recommendations-list");

    // Função para simular chamada de API de análise de risco climático
    async function simulateClimateRiskApiCall(formData) {
        riskLoader.style.display = "block";
        riskSummaryContainer.style.display = "none";
        mitigationRecommendationsContainer.style.display = "none";

        return new Promise(resolve => {
            setTimeout(() => {
                const assetType = formData.get("asset-type") || "mining_operation";
                const location = formData.get("asset-location") || "Sudeste, Brasil";
                const scenario = formData.get("climate-scenario") || "rcp45";

                let physicalScore = Math.random(); // 0 to 1
                let transitionScore = Math.random();

                // Adjust scores based on scenario (simplified)
                if (scenario === "rcp85") {
                    physicalScore = Math.min(1, physicalScore * 1.5);
                    transitionScore = Math.min(1, transitionScore * 1.2);
                } else if (scenario === "rcp26") {
                    physicalScore *= 0.7;
                    transitionScore *= 0.8;
                }

                const physicalRiskLevel = physicalScore > 0.66 ? "Alto" : physicalScore > 0.33 ? "Médio" : "Baixo";
                const transitionRiskLevel = transitionScore > 0.66 ? "Alto" : transitionScore > 0.33 ? "Médio" : "Baixo";

                const physicalRisks = [
                    { name: "Aumento da frequência de eventos climáticos extremos (ex: tempestades, inundações)", likelihood: "Média", impact: "Alto" },
                    { name: "Escassez hídrica e secas prolongadas", likelihood: "Alta", impact: "Médio-Alto" },
                    { name: "Elevação do nível do mar (para ativos costeiros)", likelihood: "Baixa-Média", impact: "Alto" },
                    { name: "Impacto na biodiversidade e ecossistemas locais", likelihood: "Média", impact: "Médio" }
                ];

                const transitionRisks = [
                    { name: "Mudanças regulatórias e precificação de carbono", likelihood: "Alta", impact: "Alto" },
                    { name: "Avanços tecnológicos e obsolescência de ativos", likelihood: "Média-Alta", impact: "Médio-Alto" },
                    { name: "Mudanças nas preferências de mercado e consumidores", likelihood: "Média", impact: "Médio" },
                    { name: "Riscos reputacionais e de litígio", likelihood: "Baixa-Média", impact: "Médio" }
                ];

                const recommendations = [
                    "Desenvolver planos de adaptação para eventos climáticos extremos, incluindo reforço de infraestrutura.",
                    "Investir em tecnologias de uso eficiente da água e fontes alternativas.",
                    "Diversificar portfólio de ativos e explorar oportunidades em tecnologias de baixo carbono.",
                    "Monitorar ativamente mudanças regulatórias e engajar com stakeholders sobre a transição energética.",
                    "Aumentar a transparência nos relatórios de sustentabilidade e riscos climáticos (TCFD)."
                ];

                // Filter risks based on scores (simplified)
                const numPhysicalRisks = physicalScore > 0.66 ? 3 : physicalScore > 0.33 ? 2 : 1;
                const numTransitionRisks = transitionScore > 0.66 ? 3 : transitionScore > 0.33 ? 2 : 1;

                const simulatedData = {
                    physicalRiskScore: physicalRiskLevel,
                    transitionRiskScore: transitionRiskLevel,
                    physicalRisks: physicalRisks.slice(0, numPhysicalRisks),
                    transitionRisks: transitionRisks.slice(0, numTransitionRisks),
                    recommendations: recommendations.slice(0, Math.floor(Math.random() * 3) + 2) // 2 to 4 recommendations
                };
                riskLoader.style.display = "none";
                resolve(simulatedData);
            }, 2200); // Simula 2.2 segundos de delay
        });
    }

    function getRiskScoreClass(level) {
        if (level === "Alto") return "risk-high";
        if (level === "Médio") return "risk-medium";
        return "risk-low";
    }

    // Função para exibir resultados da análise
    function displayRiskAnalysisResults(results) {
        physicalRiskScoreEl.textContent = results.physicalRiskScore;
        physicalRiskScoreEl.className = `risk-score ${getRiskScoreClass(results.physicalRiskScore)}`;
        transitionRiskScoreEl.textContent = results.transitionRiskScore;
        transitionRiskScoreEl.className = `risk-score ${getRiskScoreClass(results.transitionRiskScore)}`;

        physicalRisksListEl.innerHTML = "";
        results.physicalRisks.forEach(risk => {
            const li = document.createElement("li");
            li.innerHTML = `${risk.name} (Probabilidade: <span class="font-semibold">${risk.likelihood}</span>, Impacto: <span class="font-semibold">${risk.impact}</span>)`;
            physicalRisksListEl.appendChild(li);
        });

        transitionRisksListEl.innerHTML = "";
        results.transitionRisks.forEach(risk => {
            const li = document.createElement("li");
            li.innerHTML = `${risk.name} (Probabilidade: <span class="font-semibold">${risk.likelihood}</span>, Impacto: <span class="font-semibold">${risk.impact}</span>)`;
            transitionRisksListEl.appendChild(li);
        });

        heatmapPlaceholderEl.innerHTML = `<p>Mapa de calor simulado para ${document.getElementById("asset-location").value} com cenário ${document.getElementById("climate-scenario").value}.</p><p class="text-xs mt-2">Risco Físico: ${results.physicalRiskScore}, Risco de Transição: ${results.transitionRiskScore}</p>`;

        recommendationsListEl.innerHTML = "";
        results.recommendations.forEach(rec => {
            const recDiv = document.createElement("div");
            recDiv.className = "flex items-start p-3 bg-emerald-50 rounded-md border border-emerald-200";
            recDiv.innerHTML = `
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-700">${rec}</p>
                </div>
            `;
            recommendationsListEl.appendChild(recDiv);
        });

        riskSummaryContainer.style.display = "block";
        mitigationRecommendationsContainer.style.display = "block";
    }

    if (analyzeRiskButton) {
        analyzeRiskButton.addEventListener("click", async () => {
            const formData = new FormData(climateRiskForm);
            const results = await simulateClimateRiskApiCall(formData);
            displayRiskAnalysisResults(results);
        });
    }
    
    // Script para menu mobile (reutilizado)
    const mobileMenuButtonRisk = document.getElementById("mobile-menu-button-risk");
    const mobileMenuRisk = document.getElementById("mobile-menu-risk");
    if (mobileMenuButtonRisk && mobileMenuRisk) {
        mobileMenuButtonRisk.addEventListener("click", () => {
            mobileMenuRisk.classList.toggle("hidden");
        });
    }
});

