import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ModelagemPreditiva() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Modelagem Preditiva de Descarbonização</h1>
          <p className="text-xl max-w-3xl">
            Simule cenários personalizados de descarbonização para operações industriais e mineradoras, 
            com projeções de redução de emissões e retorno financeiro.
          </p>
        </div>
      </section>
      
      {/* Simulador */}
      <section className="section">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Parâmetros da Simulação</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Operação
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Mineração de Ferro</option>
                    <option>Mineração de Cobre</option>
                    <option>Siderurgia</option>
                    <option>Metalurgia</option>
                    <option>Cimento</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Escala de Operação (ton/ano)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Ex: 1000000" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emissões Atuais (tCO2e/ano)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Ex: 500000" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta de Redução (%)
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="30"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horizonte de Tempo (anos)
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>1</option>
                    <option>3</option>
                    <option>5</option>
                    <option selected>10</option>
                    <option>15</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tecnologias de Descarbonização
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="tech1" className="mr-2" checked />
                      <label htmlFor="tech1">Eletrificação de Processos</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tech2" className="mr-2" checked />
                      <label htmlFor="tech2">Energia Renovável</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tech3" className="mr-2" checked />
                      <label htmlFor="tech3">Eficiência Energética</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tech4" className="mr-2" />
                      <label htmlFor="tech4">Captura de Carbono</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tech5" className="mr-2" />
                      <label htmlFor="tech5">Hidrogênio Verde</label>
                    </div>
                  </div>
                </div>
                
                <button className="btn-primary w-full">
                  Simular Cenários
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Resultados da Simulação</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-2">Resumo da Projeção</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Redução Total de Emissões</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">150.000 tCO2e</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Créditos Gerados</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">135.000</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Valor Estimado (USD)</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">$4.050.000</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Projeção de Redução de Emissões</h4>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Redução de Emissões</p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Retorno Financeiro Projetado</h4>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Retorno Financeiro</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-4">Recomendações de Implementação</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Priorizar a implementação de energia renovável on-site com potencial de redução de 45.000 tCO2e/ano.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Implementar programa de eficiência energética com foco em processos de alta temperatura.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Considerar eletrificação parcial da frota de transporte interno para redução adicional de 12.000 tCO2e/ano.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Avaliar potencial de captura de carbono para fase 2 do projeto de descarbonização.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link href="/demo" className="text-[rgb(var(--secondary-color))] font-medium hover:underline">
            ← Voltar para Demonstrações
          </Link>
          <Link href="/demo/precificacao-dinamica" className="text-[rgb(var(--primary-color))] font-medium hover:underline">
            Próximo: Precificação Dinâmica →
          </Link>
        </div>
      </section>
      
      {/* Explicação */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2">Como Funciona a Modelagem Preditiva</h2>
              <p className="paragraph">
                Nossa plataforma utiliza algoritmos avançados de inteligência artificial para 
                analisar dados históricos, benchmarks setoriais e tendências tecnológicas, 
                criando modelos preditivos personalizados para cada operação industrial.
              </p>
              <p className="paragraph">
                O simulador considera múltiplas variáveis, incluindo tipo de operação, 
                escala, tecnologias disponíveis, custos de implementação e potencial de 
                redução de emissões para gerar cenários realistas de descarbonização.
              </p>
              <p className="paragraph">
                Os resultados incluem projeções detalhadas de redução de emissões, 
                estimativas de créditos de carbono gerados, valoração financeira e 
                recomendações práticas para implementação.
              </p>
            </div>
            <div>
              <h2 className="heading-2">Benefícios para sua Empresa</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Planejamento Estratégico</h3>
                    <p>Tome decisões informadas sobre investimentos em descarbonização com base em projeções confiáveis.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Otimização de Recursos</h3>
                    <p>Identifique as tecnologias e iniciativas com melhor relação custo-benefício para sua operação.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Monetização Antecipada</h3>
                    <p>Projete o potencial de geração de créditos de carbono e sua valorização no mercado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Conformidade Regulatória</h3>
                    <p>Antecipe-se a futuras regulamentações e prepare sua empresa para um cenário de baixo carbono.</p>
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
            Transforme sua estratégia de descarbonização
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração personalizada e descubra como a DecarbonMine 
            pode ajudar sua empresa a alcançar suas metas de sustentabilidade.
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
