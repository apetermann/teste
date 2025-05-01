import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function MonitoramentoIoT() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--secondary-color))] to-[rgb(var(--primary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Monitoramento em Tempo Real via IoT</h1>
          <p className="text-xl max-w-3xl">
            Visualize como nossa plataforma integra dados de dispositivos IoT para monitoramento 
            em tempo real de emissões e verificação de projetos de descarbonização.
          </p>
        </div>
      </section>
      
      {/* Simulador */}
      <section className="section">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Configuração do Monitoramento</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Instalação
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Mina a Céu Aberto</option>
                    <option>Mina Subterrânea</option>
                    <option selected>Usina Siderúrgica</option>
                    <option>Planta de Processamento</option>
                    <option>Refinaria</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pontos de Monitoramento
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="point1" className="mr-2" checked />
                      <label htmlFor="point1">Chaminés Principais</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="point2" className="mr-2" checked />
                      <label htmlFor="point2">Fornos de Redução</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="point3" className="mr-2" checked />
                      <label htmlFor="point3">Sistemas de Transporte</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="point4" className="mr-2" />
                      <label htmlFor="point4">Estação de Tratamento</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="point5" className="mr-2" />
                      <label htmlFor="point5">Perímetro da Planta</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parâmetros Monitorados
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="param1" className="mr-2" checked />
                      <label htmlFor="param1">CO2</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="param2" className="mr-2" checked />
                      <label htmlFor="param2">CH4 (Metano)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="param3" className="mr-2" checked />
                      <label htmlFor="param3">NOx</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="param4" className="mr-2" />
                      <label htmlFor="param4">SOx</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="param5" className="mr-2" />
                      <label htmlFor="param5">Material Particulado</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequência de Amostragem
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>A cada minuto</option>
                    <option selected>A cada 5 minutos</option>
                    <option>A cada 15 minutos</option>
                    <option>A cada hora</option>
                    <option>Diariamente</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Período de Visualização
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent">
                    <option>Última hora</option>
                    <option selected>Últimas 24 horas</option>
                    <option>Última semana</option>
                    <option>Último mês</option>
                  </select>
                </div>
                
                <button className="btn-primary w-full">
                  Atualizar Monitoramento
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Dashboard de Monitoramento</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-2">Status do Sistema</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Sensores Ativos</p>
                    <p className="text-2xl font-bold text-[rgb(var(--primary-color))]">24/25</p>
                    <p className="text-xs text-gray-500">96% operacionais</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Última Atualização</p>
                    <p className="text-lg font-bold">27/04 - 01:34</p>
                    <p className="text-xs text-gray-500">Há 1 minuto</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Status da Conexão</p>
                    <p className="text-lg font-bold text-green-600">Online</p>
                    <p className="text-xs text-gray-500">Latência: 230ms</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Emissões de CO2 em Tempo Real</h4>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Emissões de CO2</p>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Média Atual</p>
                      <p className="font-medium">1.240 kg/h</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Variação 24h</p>
                      <p className="font-medium text-green-600">-8,5%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Meta</p>
                      <p className="font-medium">1.100 kg/h</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Emissões de CH4 em Tempo Real</h4>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Emissões de CH4</p>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Média Atual</p>
                      <p className="font-medium">18,5 kg/h</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Variação 24h</p>
                      <p className="font-medium text-red-600">+3,2%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Meta</p>
                      <p className="font-medium">15,0 kg/h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-4">Mapa de Calor de Emissões</h4>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500">Visualização do Mapa de Calor</p>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Visualização espacial das concentrações de emissões em diferentes pontos da instalação, 
                  permitindo identificar hotspots e oportunidades de otimização.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-4">Alertas e Notificações</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <div className="flex justify-between">
                      <h5 className="font-medium">Pico de Emissão de NOx</h5>
                      <span className="text-xs text-gray-500">Hoje, 00:42</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Detectado pico de 15% acima do limite em Fornos de Redução. Normalizado após 18 minutos.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="flex justify-between">
                      <h5 className="font-medium">Meta de Redução Atingida</h5>
                      <span className="text-xs text-gray-500">Ontem, 14:15</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Emissões de CO2 nas Chaminés Principais atingiram meta de redução de 10% sustentada por 24h.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <div className="flex justify-between">
                      <h5 className="font-medium">Sensor Offline</h5>
                      <span className="text-xs text-gray-500">26/04, 22:30</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sensor #14 (Sistemas de Transporte - CH4) offline. Manutenção programada para 28/04.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link href="/demo/riscos-climaticos" className="text-[rgb(var(--secondary-color))] font-medium hover:underline">
            ← Análise de Riscos Climáticos
          </Link>
          <Link href="/demo" className="text-[rgb(var(--primary-color))] font-medium hover:underline">
            Voltar para Demonstrações
          </Link>
        </div>
      </section>
      
      {/* Explicação */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2">Como Funciona o Monitoramento via IoT</h2>
              <p className="paragraph">
                Nossa plataforma integra-se com uma rede de sensores IoT (Internet das Coisas) 
                instalados em pontos estratégicos das operações industriais para coletar dados 
                de emissões e parâmetros ambientais em tempo real.
              </p>
              <p className="paragraph">
                Os dados são transmitidos via protocolos seguros para nossa plataforma na nuvem, 
                onde são processados, analisados e visualizados em dashboards personalizados. 
                Algoritmos de IA detectam anomalias, tendências e oportunidades de otimização, 
                gerando alertas automáticos quando necessário.
              </p>
              <p className="paragraph">
                Este monitoramento contínuo não apenas garante a conformidade com regulamentações 
                ambientais, mas também fornece dados verificáveis para a geração e certificação 
                de créditos de carbono, aumentando sua credibilidade e valor no mercado.
              </p>
            </div>
            <div>
              <h2 className="heading-2">Benefícios para sua Empresa</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Transparência e Credibilidade</h3>
                    <p>Dados verificáveis e auditáveis que aumentam a confiança de investidores, reguladores e compradores de créditos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Otimização Operacional</h3>
                    <p>Identificação imediata de ineficiências e oportunidades de redução de emissões em suas operações.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Conformidade Contínua</h3>
                    <p>Monitoramento automático de conformidade com limites regulatórios e alertas proativos para evitar violações.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[rgb(var(--primary-color))] text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Valorização de Créditos</h3>
                    <p>Créditos de carbono com monitoramento em tempo real obtêm preços premium no mercado voluntário.</p>
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
            Transforme dados em valor com monitoramento inteligente
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração personalizada e descubra como a DecarbonMine 
            pode ajudar sua empresa a implementar um sistema de monitoramento 
            de emissões em tempo real via IoT.
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
