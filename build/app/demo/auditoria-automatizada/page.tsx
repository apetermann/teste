import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function AuditoriaAutomatizada() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Auditoria Automatizada</h1>
          <p className="text-xl max-w-3xl">
            Conheça nosso sistema de detecção de padrões e anomalias que garante a integridade 
            e rastreabilidade dos créditos de carbono tokenizados.
          </p>
        </div>
      </section>
      
      {/* Simulador */}
      <section className="section">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Parâmetros de Auditoria</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Projeto
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
                    ID do Projeto
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: VCS-2023-BR-0142" 
                    defaultValue="VCS-2023-BR-0142"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Período de Verificação
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="date" 
                      defaultValue="2023-01-01"
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
                    />
                    <input 
                      type="date" 
                      defaultValue="2023-12-31"
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nível de Profundidade
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Básico</option>
                    <option selected>Intermediário</option>
                    <option>Avançado</option>
                    <option>Forense</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Módulos de Verificação
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="module1" className="mr-2" checked />
                      <label htmlFor="module1">Metodologia e Cálculos</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="module2" className="mr-2" checked />
                      <label htmlFor="module2">Documentação e Evidências</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="module3" className="mr-2" checked />
                      <label htmlFor="module3">Dados de Monitoramento</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="module4" className="mr-2" />
                      <label htmlFor="module4">Análise de Stakeholders</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="module5" className="mr-2" />
                      <label htmlFor="module5">Verificação de Permanência</label>
                    </div>
                  </div>
                </div>
                
                <button className="btn-primary w-full">
                  Executar Auditoria
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Resultados da Auditoria</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-2">Resumo da Verificação</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Status Geral</p>
                    <p className="text-lg font-bold text-green-600">Aprovado</p>
                    <p className="text-xs text-gray-500">Score: 92/100</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Créditos Verificados</p>
                    <p className="text-lg font-bold">45.280 tCO2e</p>
                    <p className="text-xs text-gray-500">100% do declarado</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Anomalias Detectadas</p>
                    <p className="text-lg font-bold text-amber-500">3 Menores</p>
                    <p className="text-xs text-gray-500">Nenhuma crítica</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-4">Análise de Conformidade por Módulo</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Metodologia e Cálculos</span>
                      <span className="text-green-600 font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Documentação e Evidências</span>
                      <span className="text-green-600 font-medium">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Dados de Monitoramento</span>
                      <span className="text-amber-500 font-medium">83%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{width: '83%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-4">Anomalias Detectadas</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <h5 className="font-medium">Inconsistência em Dados de Monitoramento</h5>
                    <p className="text-sm text-gray-600 mb-1">
                      Lacuna de dados entre 15/06/2023 e 18/06/2023 (3 dias).
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Recomendação:</span> Fornecer explicação para a lacuna e dados alternativos de verificação.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <h5 className="font-medium">Variação Significativa em Medições</h5>
                    <p className="text-sm text-gray-600 mb-1">
                      Variação de 12% acima da média em setembro/2023.
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Recomendação:</span> Verificar calibração dos equipamentos de medição e confirmar eventos externos.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <h5 className="font-medium">Documentação Complementar Pendente</h5>
                    <p className="text-sm text-gray-600 mb-1">
                      Relatório de manutenção do sistema de monitoramento não localizado.
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Recomendação:</span> Anexar documentação pendente na próxima atualização.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-4">Recomendações para Tokenização</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Projeto aprovado para tokenização imediata de 45.280 créditos verificados.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Resolver as 3 anomalias menores identificadas em até 60 dias para manter conformidade contínua.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Implementar monitoramento contínuo com backup de dados para evitar lacunas futuras.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary-color))] mr-2">→</span>
                    <span>Próxima verificação programada para Janeiro/2024 com inclusão do módulo de Verificação de Permanência.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link href="/demo/precificacao-dinamica" className="text-[rgb(var(--secondary-color))] font-medium hover:underline">
            ← Precificação Dinâmica
          </Link>
          <Link href="/demo/rotas-descarbonizacao" className="text-[rgb(var(--primary-color))] font-medium hover:underline">
            Próximo: Rotas de Descarbonização →
          </Link>
        </div>
      </section>
      
      {/* Explicação */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2">Como Funciona a Auditoria Automatizada</h2>
              <p className="paragraph">
                Nossa plataforma utiliza algoritmos avançados de inteligência artificial para 
                analisar automaticamente toda a documentação, dados e evidências relacionadas 
                aos projetos de crédito de carbono, garantindo sua integridade e conformidade.
              </p>
              <p className="paragraph">
                O sistema verifica a consistência metodológica, a qualidade dos dados de monitoramento, 
                a adequação da documentação e a conformidade com os padrões de certificação, 
                identificando anomalias e padrões suspeitos que poderiam passar despercebidos 
                em auditorias manuais tradicionais.
              </p>
              <p className="paragraph">
                Cada crédito tokenizado na plataforma DecarbonMine passa por este rigoroso 
                processo de verificação, garantindo a mais alta qualidade e confiabilidade 
                para investidores e compradores.
              </p>
            </div>
            <div>
              <h2 className="heading-2">Benefícios para sua Empresa</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Confiança e Credibilidade</h3>
                    <p>Garanta que seus créditos de carbono atendam aos mais altos padrões de qualidade e integridade.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Redução de Riscos</h3>
                    <p>Identifique e corrija potenciais problemas antes que afetem a validade ou o valor dos seus créditos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Eficiência Operacional</h3>
                    <p>Reduza o tempo e os custos associados a processos manuais de verificação e auditoria.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Premium de Mercado</h3>
                    <p>Obtenha preços mais altos para créditos verificados com alto nível de transparência e rastreabilidade.</p>
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
            Garanta a integridade dos seus créditos de carbono
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração personalizada e descubra como a DecarbonMine 
            pode ajudar sua empresa a verificar e tokenizar créditos de carbono 
            com os mais altos padrões de qualidade.
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
