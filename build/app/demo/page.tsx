import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Demo() {
  const simuladores = [
    {
      id: 'modelagem-preditiva',
      title: 'Modelagem Preditiva de Descarbonização',
      description: 'Simule cenários personalizados de descarbonização para operações industriais e mineradoras, com projeções de redução de emissões e retorno financeiro.',
      icon: '📊'
    },
    {
      id: 'precificacao-dinamica',
      title: 'Precificação Dinâmica de Créditos',
      description: 'Visualize a precificação em tempo real dos créditos de carbono baseada em análise de dados climáticos, regulatórios e tendências de mercado.',
      icon: '💹'
    },
    {
      id: 'auditoria-automatizada',
      title: 'Auditoria Automatizada',
      description: 'Conheça nosso sistema de detecção de padrões e anomalias que garante a integridade e rastreabilidade dos créditos de carbono tokenizados.',
      icon: '🔍'
    },
    {
      id: 'rotas-descarbonizacao',
      title: 'Rotas de Descarbonização',
      description: 'Explore recomendações personalizadas de descarbonização baseadas em benchmarks setoriais e melhores práticas globais.',
      icon: '🛣️'
    },
    {
      id: 'riscos-climaticos',
      title: 'Análise de Riscos Climáticos',
      description: 'Avalie os riscos climáticos associados a diferentes projetos e investimentos, com simulações de cenários e impactos financeiros.',
      icon: '⚠️'
    },
    {
      id: 'monitoramento-iot',
      title: 'Monitoramento via IoT',
      description: 'Visualize como nossa plataforma integra dados de dispositivos IoT para monitoramento em tempo real de emissões e verificação de projetos.',
      icon: '📡'
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--secondary-color))] to-[rgb(var(--primary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Demonstração da Plataforma</h1>
          <p className="text-xl max-w-3xl">
            Explore as funcionalidades inovadoras da DecarbonMine que estão transformando 
            o mercado de créditos de carbono para o setor mineral e metalúrgico.
          </p>
        </div>
      </section>
      
      {/* Simuladores */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-2">Simuladores de IA</h2>
          <p className="max-w-3xl mx-auto paragraph">
            Nossa plataforma utiliza inteligência artificial avançada para criar ferramentas 
            inéditas que transformam a forma como empresas abordam a descarbonização.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simuladores.map((simulador) => (
            <Link href={`/demo/${simulador.id}`} key={simulador.id} className="card hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{simulador.icon}</div>
              <h3 className="text-xl font-bold mb-3">{simulador.title}</h3>
              <p className="text-gray-700 mb-4">{simulador.description}</p>
              <div className="text-[rgb(var(--primary-color))] font-medium">
                Explorar simulador →
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Demonstração Interativa */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2">Demonstração Interativa</h2>
              <p className="paragraph">
                Experimente nossa plataforma em ação e veja como a DecarbonMine está 
                revolucionando o mercado de créditos de carbono com tecnologia de ponta.
              </p>
              <p className="paragraph">
                Selecione um dos simuladores acima para explorar nossas funcionalidades 
                de IA aplicadas à descarbonização industrial e tokenização de créditos de carbono.
              </p>
              <div className="mt-8">
                <Link href="/demo/modelagem-preditiva" className="btn-primary">
                  Iniciar Demonstração
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 h-96 flex items-center justify-center">
              <p className="text-xl font-semibold text-gray-400">Interface do Simulador</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefícios */}
      <section className="section">
        <h2 className="heading-2 text-center mb-12">Benefícios da Nossa Plataforma</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Para Empresas Mineradoras e Industriais</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Monetização eficiente de esforços de descarbonização</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Acesso a capital para projetos de redução de emissões</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Ferramentas de IA para otimização de estratégias de descarbonização</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Conformidade com regulamentações ambientais e ESG</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Para Investidores</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Acesso a uma nova classe de ativos digitais ESG</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Alta liquidez e transparência nas transações</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Diversificação de portfólio com ativos de impacto ambiental positivo</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(var(--primary-color))] mr-2">✓</span>
                <span>Análises avançadas de risco e retorno para tomada de decisão</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[rgb(var(--primary-color))] text-white py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar o mercado de carbono?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração personalizada da plataforma DecarbonMine e 
            descubra como podemos ajudar sua empresa a transformar carbono em oportunidade.
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
