import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transformando Créditos de Carbono em Ativos de Alto Valor Global
              </h1>
              <p className="text-xl mb-8">
                A DecarbonMine revoluciona o mercado de carbono para o setor mineral e metalúrgico, 
                integrando inteligência artificial, blockchain e estratégias financeiras inovadoras 
                para acelerar a descarbonização industrial.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/demo" className="bg-white text-[rgb(var(--primary-color))] px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-opacity text-center">
                  Explorar Plataforma
                </Link>
                <Link href="/sobre" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-all text-center">
                  Saiba Mais
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Placeholder para imagem/ilustração */}
              <div className="bg-white bg-opacity-10 rounded-lg p-8 h-96 flex items-center justify-center">
                <p className="text-xl font-semibold">Ilustração da Plataforma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-2">Como a DecarbonMine Funciona</h2>
          <p className="max-w-3xl mx-auto paragraph">
            Nossa plataforma transforma créditos de carbono em ativos digitais tokenizados, 
            criando um mercado mais eficiente, transparente e acessível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-16 h-16 bg-[rgb(var(--primary-color))] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Compra Estratégica</h3>
            <p>
              Adquirimos créditos de carbono de alta qualidade de mineradoras e indústrias de base, 
              garantindo a procedência e impacto ambiental positivo.
            </p>
          </div>
          
          <div className="card">
            <div className="w-16 h-16 bg-[rgb(var(--primary-color))] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Tokenização</h3>
            <p>
              Transformamos esses créditos em ativos digitais auditáveis, negociáveis e lastreados, 
              utilizando tecnologia blockchain para garantir transparência.
            </p>
          </div>
          
          <div className="card">
            <div className="w-16 h-16 bg-[rgb(var(--primary-color))] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Marketplace Global</h3>
            <p>
              Distribuímos globalmente esses ativos via nossa plataforma de trading digital, 
              democratizando o acesso e aumentando a liquidez do mercado.
            </p>
          </div>
        </div>
      </section>
      
      {/* Diferenciais */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="text-center mb-12">
            <h2 className="heading-2">Nossos Diferenciais Tecnológicos</h2>
            <p className="max-w-3xl mx-auto paragraph">
              Aplicamos inteligência artificial para criar ferramentas inéditas que transformam 
              o mercado de créditos de carbono.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Modelagem Preditiva Personalizada</h3>
              <p>
                Simulações preditivas personalizadas para operações industriais, 
                permitindo visualizar cenários de descarbonização e seus impactos.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Precificação Dinâmica</h3>
              <p>
                Algoritmos de precificação dinâmica baseados em análise de dados climáticos, 
                regulatórios e de mercado, garantindo valores justos e competitivos.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Auditoria Automatizada</h3>
              <p>
                Sistemas de auditoria automatizada que garantem a integridade e 
                rastreabilidade dos créditos de carbono em toda a cadeia.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Monitoramento em Tempo Real</h3>
              <p>
                Monitoramento em tempo real de emissões via integração com IoT, 
                permitindo acompanhar o progresso das iniciativas de descarbonização.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/demo" className="btn-primary">
              Explorar Funcionalidades
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[rgb(var(--secondary-color))] text-white py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar carbono em oportunidade?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se à DecarbonMine e faça parte da revolução que está tornando 
            a descarbonização não apenas necessária, mas lucrativa.
          </p>
          <Link href="/contato" className="bg-white text-[rgb(var(--secondary-color))] px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-opacity inline-block">
            Entre em Contato
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
