import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Sobre() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--secondary-color))] to-[rgb(var(--primary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a DecarbonMine</h1>
          <p className="text-xl max-w-3xl">
            Nascemos com o objetivo de revolucionar o mercado de carbono para o setor mineral e metalúrgico, 
            integrando tecnologias avançadas para acelerar a descarbonização industrial.
          </p>
        </div>
      </section>
      
      {/* Nossa Missão */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2">Nossa Missão</h2>
            <p className="paragraph">
              A DecarbonMine nasce com uma proposta clara e poderosa: transformar créditos de carbono 
              de empresas mineradoras e industriais em ativos digitais tokenizados, altamente líquidos, 
              acessíveis globalmente a investidores institucionais e individuais.
            </p>
            <p className="paragraph">
              Acreditamos que a descarbonização industrial não é apenas uma necessidade ambiental, 
              mas também uma oportunidade econômica. Nossa plataforma cria um ecossistema onde 
              sustentabilidade e rentabilidade caminham juntas.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
            <p className="text-xl font-semibold text-gray-400">Imagem Ilustrativa</p>
          </div>
        </div>
      </section>
      
      {/* Por que a DecarbonMine */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <h2 className="heading-2 text-center mb-12">Por que a DecarbonMine é necessária agora?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Mercado Fragmentado</h3>
              <p>
                O mercado voluntário de carbono cresce exponencialmente, mas é ineficiente, 
                fragmentado e de difícil acesso para a maioria dos investidores.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Pressão por Descarbonização</h3>
              <p>
                Empresas de mineração e metais enfrentam crescente pressão para reduzir suas emissões, 
                mas têm dificuldades em monetizar seus esforços de descarbonização.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Potencial da Tokenização</h3>
              <p>
                A tokenização de créditos de carbono abre uma nova fronteira: democratiza o acesso, 
                aumenta a liquidez, reduz fraudes e amplia o impacto ambiental positivo de forma escalável.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nosso Modelo de Atuação */}
      <section className="section">
        <h2 className="heading-2 text-center mb-12">Nosso Modelo de Atuação</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Compra Estratégica</h3>
              <p>
                Adquirimos créditos de carbono de alta qualidade de mineradoras e indústrias de base, 
                garantindo a procedência e o impacto ambiental positivo.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Tokenização</h3>
              <p>
                Transformamos esses créditos em ativos digitais auditáveis, negociáveis e lastreados, 
                utilizando tecnologia blockchain para garantir transparência e confiança.
              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Marketplace Próprio</h3>
              <p>
                Distribuímos globalmente esses ativos via nossa plataforma de trading digital, 
                democratizando o acesso e aumentando a liquidez do mercado de carbono.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Inteligência Artificial</h3>
              <p>
                Aplicamos IA para criar ferramentas inéditas de modelagem preditiva de descarbonização, 
                precificação dinâmica, auditoria automatizada e análise de risco climático.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roadmap de Expansão */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <h2 className="heading-2 text-center mb-12">Roadmap de Expansão</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Primeira Fase</h3>
              <p className="mb-4">
                Brasil, América do Sul, Ásia e Oriente Médio — regiões estratégicas para 
                mineração e commodities verdes.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Estabelecimento da plataforma no Brasil</li>
                <li>Parcerias com mineradoras e indústrias locais</li>
                <li>Expansão para países vizinhos na América do Sul</li>
                <li>Entrada em mercados asiáticos estratégicos</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Segunda Fase</h3>
              <p className="mb-4">
                Expansão para Estados Unidos e Europa, consolidando atuação em 
                mercados financeiros mais maduros.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Estabelecimento de escritórios nos EUA e Europa</li>
                <li>Integração com mercados financeiros tradicionais</li>
                <li>Parcerias com fundos de investimento ESG</li>
                <li>Desenvolvimento de novos produtos financeiros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impacto Esperado */}
      <section className="section">
        <h2 className="heading-2 text-center mb-12">Impacto Esperado</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Aceleração da Transição Energética</h3>
            <p>
              Financiamento da descarbonização de setores críticos, contribuindo para 
              a redução das emissões globais de gases de efeito estufa.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Democratização do Mercado</h3>
            <p>
              Ampliação do acesso ao mercado de carbono e incentivo a práticas 
              industriais mais sustentáveis em escala global.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Nova Classe de Ativos</h3>
            <p>
              Criação de uma nova classe de ativos digitais alinhados a princípios ESG, 
              com retorno financeiro e impacto ambiental positivo.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[rgb(var(--primary-color))] text-white py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            DecarbonMine não é apenas uma empresa. É um movimento.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Para transformar o carbono em oportunidade.<br />
            Para tornar a descarbonização não apenas necessária, mas lucrativa.<br />
            Para redefinir o futuro dos investimentos sustentáveis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/demo" className="bg-white text-[rgb(var(--primary-color))] px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-opacity text-center">
              Explorar Plataforma
            </Link>
            <Link href="/contato" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-all text-center">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
