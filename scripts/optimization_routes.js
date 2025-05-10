document.addEventListener("DOMContentLoaded", () => {
    const routeOptimizationForm = document.getElementById("route-optimization-form");
    const optimizeRouteButton = document.getElementById("optimize-route-button");

    const routeLoader = document.getElementById("route-loader");
    const routeMapContainer = document.getElementById("route-map-container");
    const mapPlaceholder = document.getElementById("map-placeholder");
    const routeSummaryContainer = document.getElementById("route-summary-container");
    const routeOptionsTableEl = document.getElementById("route-options-table");
    const selectedRouteDetailsContainer = document.getElementById("selected-route-details-container");
    const selectedRouteInfoEl = document.getElementById("selected-route-info");

    // Função para simular chamada de API de otimização de rotas
    async function simulateRouteApiCall(formData) {
        routeLoader.style.display = "block";
        routeMapContainer.style.display = "none";
        routeSummaryContainer.style.display = "none";
        selectedRouteDetailsContainer.style.display = "none";

        return new Promise(resolve => {
            setTimeout(() => {
                const origin = formData.get("origin") || "Origem Padrão";
                const destination = formData.get("destination") || "Destino Padrão";
                const cargoVolume = parseFloat(formData.get("cargo-volume")) || 1000;
                const optimizationPriority = formData.get("optimization-priority") || "balanced";

                // Lógica de simulação de rotas
                const routes = [];
                for (let i = 1; i <= 3; i++) {
                    let costFactor = 1, emissionsFactor = 1, timeFactor = 1;
                    if (optimizationPriority === "cost") costFactor = 0.7;
                    else if (optimizationPriority === "emissions") emissionsFactor = 0.6;
                    else if (optimizationPriority === "time") timeFactor = 0.8;
                    else { // balanced
                        costFactor = Math.random() * 0.3 + 0.8;
                        emissionsFactor = Math.random() * 0.3 + 0.8;
                        timeFactor = Math.random() * 0.3 + 0.8;
                    }

                    routes.push({
                        id: i,
                        name: `Rota Otimizada ${i}`,
                        distance: (Math.random() * 1000 + 5000).toFixed(0), // km
                        time: ((Math.random() * 20 + 70) * timeFactor).toFixed(1), // horas
                        cost: ((cargoVolume * 0.5 + Math.random() * 5000) * costFactor).toFixed(2), // R$
                        emissions: ((cargoVolume * 0.02 + Math.random() * 100) * emissionsFactor).toFixed(2), // tCO2e
                        segments: [
                            `Segmento A: ${origin} para Ponto de Transbordo ${String.fromCharCode(65 + i)} - ${(Math.random() * 1000 + 1000).toFixed(0)}km`,
                            `Segmento B: Ponto de Transbordo ${String.fromCharCode(65 + i)} para ${destination} - ${(Math.random() * 2000 + 2000).toFixed(0)}km`
                        ],
                        warnings: i === 2 ? ["Atenção: Trecho com pedágio elevado", "Possível congestionamento em horário de pico"] : []
                    });
                }

                // Adicionar uma rota "Original/Padrão" para comparação
                routes.unshift({
                    id: 0,
                    name: "Rota Padrão (Não Otimizada)",
                    distance: (Math.random() * 1500 + 6000).toFixed(0),
                    time: (Math.random() * 30 + 90).toFixed(1),
                    cost: (cargoVolume * 0.6 + Math.random() * 7000).toFixed(2),
                    emissions: (cargoVolume * 0.025 + Math.random() * 150).toFixed(2),
                    segments: [`Segmento Único: ${origin} para ${destination} via Rota Convencional - ${(Math.random() * 1500 + 6000).toFixed(0)}km`],
                    warnings: []
                });

                const simulatedData = { routes };
                routeLoader.style.display = "none";
                resolve(simulatedData);
            }, 2500); // Simula 2.5 segundos de delay
        });
    }

    // Função para renderizar tabela de opções de rotas
    function displayRouteOptions(routes) {
        routeOptionsTableEl.innerHTML = ""; // Limpa tabela anterior
        const table = document.createElement("table");
        table.className = "min-w-full divide-y divide-gray-200";
        const thead = document.createElement("thead");
        thead.className = "bg-gray-50";
        thead.innerHTML = `
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rota</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distância (km)</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tempo (h)</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Custo (R$)</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emissões (tCO2e)</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
        `;
        table.appendChild(thead);
        const tbody = document.createElement("tbody");
        tbody.className = "bg-white divide-y divide-gray-200";

        routes.forEach(route => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${route.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${route.distance}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${route.time}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${route.cost}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${route.emissions}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button data-route-id="${route.id}" class="text-emerald-600 hover:text-emerald-900 view-route-details">Ver Detalhes</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        routeOptionsTableEl.appendChild(table);

        // Adicionar event listeners para os botões "Ver Detalhes"
        document.querySelectorAll(".view-route-details").forEach(button => {
            button.addEventListener("click", (e) => {
                const routeId = parseInt(e.target.getAttribute("data-route-id"));
                const selectedRoute = routes.find(r => r.id === routeId);
                displaySelectedRouteDetails(selectedRoute);
            });
        });
    }

    function displaySelectedRouteDetails(route) {
        if (!route) return;
        selectedRouteInfoEl.innerHTML = `
            <h4 class="text-md font-semibold text-gray-800 mb-2">${route.name}</h4>
            <p class="text-sm text-gray-600"><strong>Distância:</strong> ${route.distance} km</p>
            <p class="text-sm text-gray-600"><strong>Tempo Estimado:</strong> ${route.time} horas</p>
            <p class="text-sm text-gray-600"><strong>Custo Estimado:</strong> R$ ${route.cost}</p>
            <p class="text-sm text-gray-600"><strong>Emissões Estimadas:</strong> ${route.emissions} tCO2e</p>
            <h5 class="text-sm font-semibold text-gray-700 mt-3 mb-1">Segmentos da Rota:</h5>
            <ul class="list-disc list-inside text-sm text-gray-600 pl-4">
                ${route.segments.map(segment => `<li>${segment}</li>`).join("")}
            </ul>
            ${route.warnings && route.warnings.length > 0 ? `
            <h5 class="text-sm font-semibold text-red-600 mt-3 mb-1">Avisos:</h5>
            <ul class="list-disc list-inside text-sm text-red-500 pl-4">
                ${route.warnings.map(warning => `<li>${warning}</li>`).join("")}
            </ul>
            ` : ""}
        `;
        selectedRouteDetailsContainer.style.display = "block";
        mapPlaceholder.innerHTML = `<p>Visualização simulada da <strong>${route.name}</strong> no mapa.</p><p class="text-xs mt-2">Origem: ${document.getElementById("origin").value} | Destino: ${document.getElementById("destination").value}</p>`;
    }

    if (optimizeRouteButton) {
        optimizeRouteButton.addEventListener("click", async () => {
            const formData = new FormData(routeOptimizationForm);
            const results = await simulateRouteApiCall(formData);

            displayRouteOptions(results.routes);
            // Por padrão, exibe detalhes da primeira rota otimizada (se houver)
            if (results.routes.length > 1) {
                 displaySelectedRouteDetails(results.routes[1]); // A primeira rota é a "Padrão"
            } else if (results.routes.length > 0) {
                 displaySelectedRouteDetails(results.routes[0]);
            }


            routeMapContainer.style.display = "block";
            routeSummaryContainer.style.display = "block";
        });
    }
    
    // Script para menu mobile (reutilizado)
    const mobileMenuButtonOpt = document.getElementById("mobile-menu-button-opt");
    const mobileMenuOpt = document.getElementById("mobile-menu-opt");
    if (mobileMenuButtonOpt && mobileMenuOpt) {
        mobileMenuButtonOpt.addEventListener("click", () => {
            mobileMenuOpt.classList.toggle("hidden");
        });
    }
});

