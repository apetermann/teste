'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function RotasDescarbonizacao() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rotas de Descarbonização</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Recomendações personalizadas baseadas em benchmarks setoriais e melhores práticas globais para otimizar sua estratégia de redução de emissões.
          </p>
        </div>
      </div>
      
      {/* Simulador Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Simulador de Rotas de Descarbonização</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Parâmetros da Empresa</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Setor</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Mineração de Ferro</option>
                    <option>Mineração de Cobre</option>
                    <option>Mineração de Bauxita</option>
                    <option>Siderurgia</option>
                    <option>Metalurgia</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Porte da Empresa</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Grande (Receita > R$ 1 bilhão)</option>
                    <option>Médio (Receita entre R$ 100 milhões e R$ 1 bilhão)</option>
                    <option>Pequeno (Receita < R$ 100 milhões)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emissões Anuais (tCO2e)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ex: 500000" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Região Principal de Operação</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Sudeste do Brasil</option>
                    <option>Norte do Brasil</option>
                    <option>Nordeste do Brasil</option>
                    <option>Centro-Oeste do Brasil</option>
                    <option>Sul do Brasil</option>
                    <option>América Latina (exceto Brasil)</option>
                    <option>América do Norte</option>
                    <option>Europa</option>
                    <option>Ásia</option>
                    <option>África</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Perfil de Emissões</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Escopo 1 - Combustão Estacionária (%)</label>
                  <input type="range" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Escopo 1 - Frota Móvel (%)</label>
                  <input type="range" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Escopo 1 - Processos Industriais (%)</label>
                  <input type="range" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Escopo 2 - Energia Elétrica (%)</label>
                  <input type="range" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
              Gerar Rotas de Descarbonização
            </button>
          </div>
        </div>
        
        {/* Resultados Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Rotas de Descarbonização Recomendadas</h2>
          
          <div className="space-y-8">
            {/* Rota 1 */}
            <div className="border-l-4 border-emerald-600 pl-4 py-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rota 1: Eletrificação de Frota</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Potencial de Redução</p>
                  <p className="text-2xl font-bold text-emerald-600">35%</p>
                  <p className="text-sm text-gray-700">das emissões de frota móvel</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Investimento Estimado</p>
                  <p className="text-2xl font-bold text-gray-800">R$ 12M</p>
                  <p className="text-sm text-gray-700">ROI em 4,5 anos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Créditos de Carbono</p>
                  <p className="text-2xl font-bold text-emerald-600">8.750 tCO2e/ano</p>
                  <p className="text-sm text-gray-700">Valor estimado: R$ 1,3M/ano</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Substituição gradual da frota de veículos leves e médios por alternativas elétricas, começando por veículos de supervisão e transporte interno. Inclui instalação de infraestrutura de carregamento alimentada por energia renovável.
              </p>
              <div className="flex space-x-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">Alta Viabilidade</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Tecnologia Madura</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Benchmark: Vale, BHP</span>
              </div>
            </div>
            
            {/* Rota 2 */}
            <div className="border-l-4 border-emerald-600 pl-4 py-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rota 2: Energia Renovável On-site</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Potencial de Redução</p>
                  <p className="text-2xl font-bold text-emerald-600">60%</p>
                  <p className="text-sm text-gray-700">das emissões de escopo 2</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Investimento Estimado</p>
                  <p className="text-2xl font-bold text-gray-800">R$ 25M</p>
                  <p className="text-sm text-gray-700">ROI em 6 anos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Créditos de Carbono</p>
                  <p className="text-2xl font-bold text-emerald-600">15.000 tCO2e/ano</p>
                  <p className="text-sm text-gray-700">Valor estimado: R$ 2,2M/ano</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Implementação de usina solar fotovoltaica de 20MW nas áreas disponíveis da operação, com sistema de armazenamento de energia para garantir estabilidade. Complementada por PPA (Power Purchase Agreement) para períodos de baixa geração.
              </p>
              <div className="flex space-x-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">Média Viabilidade</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Tecnologia Madura</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Benchmark: Anglo American, Rio Tinto</span>
              </div>
            </div>
            
            {/* Rota 3 */}
            <div className="border-l-4 border-emerald-600 pl-4 py-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rota 3: Eficiência Energética em Processos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Potencial de Redução</p>
                  <p className="text-2xl font-bold text-emerald-600">25%</p>
                  <p className="text-sm text-gray-700">das emissões de processos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Investimento Estimado</p>
                  <p className="text-2xl font-bold text-gray-800">R$ 18M</p>
                  <p className="text-sm text-gray-700">ROI em 3,2 anos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Créditos de Carbono</p>
                  <p className="text-2xl font-bold text-emerald-600">12.500 tCO2e/ano</p>
                  <p className="text-sm text-gray-700">Valor estimado: R$ 1,8M/ano</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Modernização de equipamentos de alta intensidade energética, implementação de sistemas de recuperação de calor, otimização de processos através de automação avançada e IA para controle em tempo real de parâmetros operacionais.
              </p>
              <div className="flex space-x-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">Alta Viabilidade</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Complexidade Média</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Benchmark: Glencore, Alcoa</span>
              </div>
            </div>
            
            {/* Rota 4 */}
            <div className="border-l-4 border-emerald-600 pl-4 py-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rota 4: Substituição de Combustíveis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Potencial de Redução</p>
                  <p className="text-2xl font-bold text-emerald-600">40%</p>
                  <p className="text-sm text-gray-700">das emissões de combustão</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Investimento Estimado</p>
                  <p className="text-2xl font-bold text-gray-800">R$ 15M</p>
                  <p className="text-sm text-gray-700">ROI em 5 anos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Créditos de Carbono</p>
                  <p className="text-2xl font-bold text-emerald-600">10.000 tCO2e/ano</p>
                  <p className="text-sm text-gray-700">Valor estimado: R$ 1,5M/ano</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Transição de combustíveis fósseis para biocombustíveis avançados e hidrogênio verde em equipamentos de combustão estacionária. Inclui adaptação de fornalhas, caldeiras e geradores para compatibilidade com novos combustíveis.
              </p>
              <div className="flex space-x-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Média Viabilidade</span>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Tecnologia Emergente</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Benchmark: ArcelorMittal, SSAB</span>
              </div>
            </div>
          </div>
          
          {/* Gráfico de Impacto */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Impacto Combinado das Rotas</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-8">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Redução Total de Emissões</span>
                  <span className="text-sm font-medium text-gray-700">46.250 tCO2e/ano (37%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-emerald-600 h-4 rounded-full" style={{width: '37%'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Potencial de Geração de Créditos</h4>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700">Total Anual</span>
                      <span className="text-xl font-bold text-emerald-600">46.250 tCO2e</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700">Valor Estimado Anual</span>
                      <span className="text-xl font-bold text-emerald-600">R$ 6,8 milhões</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Valor em 10 anos (tokenizado)</span>
                      <span className="text-xl font-bold text-emerald-600">R$ 95,2 milhões</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Análise Financeira</h4>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700">Investimento Total</span>
                      <span className="text-xl font-bold text-gray-800">R$ 70 milhões</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700">Economia Operacional Anual</span>
                      <span className="text-xl font-bold text-blue-600">R$ 8,5 milhões</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Payback com Créditos</span>
                      <span className="text-xl font-bold text-emerald-600">4,6 anos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg mr-4 transition duration-300">
              Baixar Relatório Completo
            </button>
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-6 rounded-lg transition duration-300">
              Agendar Consultoria Especializada
            </button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforme sua Estratégia de Descarbonização</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Tokenize seus créditos de carbono e maximize o retorno dos seus investimentos em descarbonização com a DecarbonMine.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Agendar Demonstração
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
