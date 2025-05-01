import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function RiscosClimaticos() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Análise de Riscos Climáticos</h1>
          <p className="text-xl max-w-3xl">
            Avalie os riscos climáticos associados a diferentes projetos e investimentos, 
            com simulações de cenários e impactos financeiros para tomada de decisão.
          </p>
        </div>
      </section>
      
      {/* Simulador */}
      <section className="section">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Parâmetros de Análise</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Projeto
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Mineração a Céu Aberto</option>
                    <option>Mineração Subterrânea</option>
                    <option selected>Siderurgia Integrada</option>
                    <option>Metalurgia</option>
                    <option>Processamento Mineral</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localização Geográfica
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Amazônia</option>
                    <option>Cerrado</option>
                    <option selected>Sudeste Brasileiro</option>
                    <option>Região Sul</option>
                    <option>Nordeste</option>
                    <option>Região Andina</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horizonte de Tempo
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>2025-2030</option>
                    <option selected>2025-2035</option>
                    <option>2025-2040</option>
                    <option>2025-2050</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cenário Climático
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Otimista (RCP 2.6)</option>
                    <option selected>Intermediário (RCP 4.5)</option>
                    <option>Pessimista (RCP 8.5)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dependência de Recursos Hídricos
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option selected>Alta</option>
                    <option>Muito Alta</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Exposição a Eventos Extremos
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="event1" className="mr-2" checked />
                      <label htmlFor="event1">Inundações</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="event2" className="mr-2" />
                      <label htmlFor="event2">Secas Prolongadas</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="event3" className="mr-2" checked />
                      <label htmlFor="event3">Tempestades Severas</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="event4" className="mr-2" />
                      <label htmlFor="event4">Ondas de Calor</label>
                    </div>
                  </div>
                </div>
                
                <button className="btn-primary w-full">
                  Analisar Riscos
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Resultados da Análise</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-2">Resumo de Riscos</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Nível de Risco Geral</p>
                    <p className="text-2xl font-bold text-amber-500">Médio-Alto</p>
                    <p className="text-xs text-gray-500">Score: 68/100</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Impacto Financeiro Potencial</p>
                    <p className="text-2xl font-bold">R$ 28M</p>
                    <p className="text-xs text-gray-500">Até 2035</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Riscos Críticos Identificados</p>
                    <p className="text-2xl font-bold text-red-500">3</p>
                    <p className="text-xs text-gray-500">Requerem mitigação</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-4">Mapa de Calor de Riscos</h4>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500">Visualização do Mapa de Calor de Riscos</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-4">Riscos Climáticos Identificados</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h5 className="font-medium">Escassez Hídrica</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Probabilidade</p>
                        <p className="text-sm font-medium">Alta (75%)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Impacto</p>
                        <p className="text-sm font-medium">Severo</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Horizonte</p>
                        <p className="text-sm font-medium">2028-2035</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Redução projetada de 30-40% na disponibilidade hídrica na região, afetando processos industriais e resfriamento.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h5 className="font-medium">Inundações em Áreas Operacionais</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Probabilidade</p>
                        <p className="text-sm font-medium">Média (55%)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Impacto</p>
                        <p className="text-sm font-medium">Severo</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Horizonte</p>
                        <p className="text-sm font-medium">2025-2035</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Aumento na frequência e intensidade de eventos de precipitação extrema, com potencial para interrupções operacionais.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h5 className="font-medium">Regulamentações de Carbono Mais Rígidas</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Probabilidade</p>
                        <p className="text-sm font-medium">Muito Alta (90%)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Impacto</p>
                        <p className="text-sm font-medium">Moderado</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Horizonte</p>
                        <p className="text-sm font-medium">2026-2030</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Implementação projetada de precificação de carbono e limites de emissão mais restritivos para o setor siderúrgico.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <h5 className="font-medium">Interrupções na Cadeia de Suprimentos</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Probabilidade</p>
                        <p className="text-sm font-medium">Média (50%)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Impacto</p>
                        <p className="text-sm font-medium">Moderado</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Horizonte</p>
                        <p className="text-sm font-medium">2025-2035</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Eventos climáticos afetando infraestrutura logística e fornecedores em regiões vulneráveis.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-4">Estratégias de Mitigação Recomendadas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span><strong>Escassez Hídrica:</strong> Implementar sistemas de recirculação de água e tecnologias de reuso, reduzindo consumo em 40%. Investimento estimado: R$ 12M.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span><strong>Inundações:</strong> Reforçar infraestrutura de drenagem e desenvolver planos de contingência operacional. Investimento estimado: R$ 8M.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span><strong>Regulamentações:</strong> Acelerar programa de descarbonização e adquirir créditos de carbono estrategicamente antes de aumentos de preço. Investimento estimado: R$ 15M.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span><strong>Cadeia de Suprimentos:</strong> Diversificar fornecedores e implementar sistema de monitoramento climático para alertas antecipados. Investimento estimado: R$ 3M.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link href="/demo/rotas-descarbonizacao" className="text-[rgb(var(--secondary-color))] font-medium hover:underline">
            ← Rotas de Descarbonização
          </Link>
          <Link href="/demo/monitoramento-iot" className="text-[rgb(var(--primary-color))] font-medium hover:underline">
            Próximo: Monitoramento via IoT →
          </Link>
        </div>
      </section>
      
      {/* Explicação */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2">Como Funciona a Análise de Riscos Climáticos</h2>
              <p className="paragraph">
                Nossa plataforma utiliza modelos avançados de análise de riscos climáticos que 
                combinam dados históricos, projeções climáticas científicas e análises específicas 
                do setor para identificar, quantificar e priorizar riscos relacionados ao clima.
              </p>
              <p className="paragraph">
                O sistema integra múltiplas fontes de dados, incluindo modelos climáticos globais e 
                regionais, dados geoespaciais, informações específicas de ativos e operações, e 
                análises de tendências regulatórias para criar uma avaliação abrangente dos riscos 
                físicos, de transição e de responsabilidade.
              </p>
              <p className="paragraph">
                Os resultados são apresentados em formatos visuais intuitivos, como mapas de calor 
                e matrizes de risco, acompanhados por estimativas de impacto financeiro e recomendações 
                práticas de mitigação, permitindo uma tomada de decisão informada e estratégica.
              </p>
            </div>
            <div>
              <h2 className="heading-2">Benefícios para sua Empresa</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Antecipação de Riscos</h3>
                    <p>Identifique e prepare-se para riscos climáticos antes que eles impactem suas operações e resultados financeiros.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Planejamento Estratégico</h3>
                    <p>Incorpore considerações climáticas em decisões de investimento, expansão e desenvolvimento de longo prazo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Conformidade Regulatória</h3>
                    <p>Atenda às crescentes exigências de divulgação de riscos climáticos de investidores e reguladores.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Resiliência Operacional</h3>
                    <p>Desenvolva estratégias de adaptação que aumentem a resiliência de suas operações frente a condições climáticas em mudança.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[rgb(var(--secondary-color))] text-white py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prepare sua empresa para os riscos climáticos
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração personalizada e descubra como a DecarbonMine 
            pode ajudar sua empresa a identificar, quantificar e mitigar riscos 
            relacionados às mudanças climáticas.
          </p>
          <Link href="/contato" className="bg-white text-[rgb(var(--secondary-color))] px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-opacity inline-block">
            Agendar Demonstração
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
