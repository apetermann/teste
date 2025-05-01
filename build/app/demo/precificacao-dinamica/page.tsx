import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function PrecificacaoDinamica() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--secondary-color))] to-[rgb(var(--primary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Precificação Dinâmica de Créditos</h1>
          <p className="text-xl max-w-3xl">
            Visualize a precificação em tempo real dos créditos de carbono baseada em análise 
            de dados climáticos, regulatórios e tendências de mercado.
          </p>
        </div>
      </section>
      
      {/* Simulador */}
      <section className="section">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Parâmetros de Precificação</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Crédito
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Redução de Emissões Industriais</option>
                    <option>Energia Renovável</option>
                    <option>Reflorestamento</option>
                    <option>Eficiência Energética</option>
                    <option>Captura de Metano</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Padrão de Certificação
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Verra (VCS)</option>
                    <option>Gold Standard</option>
                    <option>American Carbon Registry</option>
                    <option>Climate Action Reserve</option>
                    <option>Plan Vivo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Volume de Créditos (tCO2e)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Ex: 10000" 
                    defaultValue="10000"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ano de Emissão
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localização do Projeto
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Brasil</option>
                    <option>América Latina</option>
                    <option>América do Norte</option>
                    <option>Europa</option>
                    <option>Ásia</option>
                    <option>África</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Co-benefícios
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="benefit1" className="mr-2" checked />
                      <label htmlFor="benefit1">Biodiversidade</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="benefit2" className="mr-2" checked />
                      <label htmlFor="benefit2">Comunidades Locais</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="benefit3" className="mr-2" />
                      <label htmlFor="benefit3">Recursos Hídricos</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="benefit4" className="mr-2" />
                      <label htmlFor="benefit4">Igualdade de Gênero</label>
                    </div>
                  </div>
                </div>
                
                <button className="btn-primary w-full">
                  Calcular Preço
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Análise de Precificação</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-2">Preço Estimado</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Preço Base por Crédito</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">$28,50</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Valor Total</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">$285.000</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Premium sobre Mercado</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">+15%</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Tendência de Preço (12 meses)</h4>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Tendência de Preço</p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Fatores de Influência no Preço</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">▲</span>
                      <div>
                        <span className="font-medium">Certificação Verra (+12%)</span>
                        <p className="text-sm text-gray-600">Alta credibilidade e aceitação no mercado</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">▲</span>
                      <div>
                        <span className="font-medium">Co-benefícios (+8%)</span>
                        <p className="text-sm text-gray-600">Biodiversidade e comunidades locais</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">▲</span>
                      <div>
                        <span className="font-medium">Localização Brasil (+5%)</span>
                        <p className="text-sm text-gray-600">Alta demanda por projetos brasileiros</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">▼</span>
                      <div>
                        <span className="font-medium">Volume (-3%)</span>
                        <p className="text-sm text-gray-600">Desconto por volume significativo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">▼</span>
                      <div>
                        <span className="font-medium">Volatilidade de Mercado (-7%)</span>
                        <p className="text-sm text-gray-600">Incertezas regulatórias recentes</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-4">Recomendações de Comercialização</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Momento favorável para tokenização e venda, com tendência de alta nos próximos 3 meses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Considerar venda parcial imediata (60%) e retenção estratégica (40%) para aproveitar potencial valorização.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Adicionar verificação de recursos hídricos para aumentar premium em aproximadamente 3-5%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Mercados-alvo prioritários: Europa (45%), América do Norte (30%), Ásia (25%).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link href="/demo/modelagem-preditiva" className="text-[rgb(var(--secondary-color))] font-medium hover:underline">
            ← Modelagem Preditiva
          </Link>
          <Link href="/demo/auditoria-automatizada" className="text-[rgb(var(--primary-color))] font-medium hover:underline">
            Próximo: Auditoria Automatizada →
          </Link>
        </div>
      </section>
      
      {/* Explicação */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2">Como Funciona a Precificação Dinâmica</h2>
              <p className="paragraph">
                Nossa plataforma utiliza algoritmos avançados de machine learning para analisar 
                mais de 50 variáveis que influenciam o preço dos créditos de carbono, incluindo 
                dados de mercado em tempo real, tendências regulatórias e fatores específicos do projeto.
              </p>
              <p className="paragraph">
                O modelo de precificação considera características intrínsecas do crédito 
                (tipo, certificação, vintage), fatores de mercado (oferta, demanda, volatilidade), 
                e variáveis externas (regulamentações emergentes, eventos climáticos, acordos internacionais).
              </p>
              <p className="paragraph">
                Atualizamos continuamente nossos modelos com dados de transações reais, 
                garantindo que as estimativas reflitam com precisão as condições atuais do mercado 
                e forneçam insights valiosos para decisões de comercialização.
              </p>
            </div>
            <div>
              <h2 className="heading-2">Benefícios para sua Empresa</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Maximização de Valor</h3>
                    <p>Obtenha o melhor preço possível para seus créditos de carbono com base em análises de mercado em tempo real.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Timing Estratégico</h3>
                    <p>Identifique o momento ideal para tokenizar e comercializar seus créditos, aproveitando tendências de mercado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Transparência e Confiança</h3>
                    <p>Ofereça aos compradores preços justos e transparentes, baseados em dados objetivos e verificáveis.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Planejamento Financeiro</h3>
                    <p>Projete receitas futuras com maior precisão, facilitando o planejamento de investimentos em descarbonização.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[rgb(var(--primary-color))] text-white py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maximize o valor dos seus créditos de carbono
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração personalizada e descubra como a DecarbonMine 
            pode ajudar sua empresa a obter o melhor retorno dos seus esforços de descarbonização.
          </p>
          <Link href="/contato" className="bg-white text-[rgb(var(--primary-color))] px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-opacity inline-block">
            Agendar Demonstração
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
