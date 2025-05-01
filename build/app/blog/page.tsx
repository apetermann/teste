import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      id: 'tokenizacao',
      title: 'Tokenização de Créditos de Carbono: O Futuro do Mercado Voluntário',
      excerpt: 'Como a tecnologia blockchain está transformando o mercado de créditos de carbono, aumentando a transparência, reduzindo fraudes e democratizando o acesso.',
      date: '27 Abril, 2025',
      author: 'Equipe DecarbonMine',
      category: 'Tokenização'
    },
    {
      id: 'creditos-carbono',
      title: 'Créditos de Carbono no Setor Mineral: Desafios e Oportunidades',
      excerpt: 'Uma análise dos desafios enfrentados pelo setor mineral na redução de emissões e como os créditos de carbono podem se tornar uma oportunidade de negócio.',
      date: '26 Abril, 2025',
      author: 'Equipe DecarbonMine',
      category: 'Mercado de Carbono'
    },
    {
      id: 'ia-descarbonizacao',
      title: 'Inteligência Artificial Aplicada à Descarbonização Industrial',
      excerpt: 'Como algoritmos avançados de IA estão ajudando empresas a identificar oportunidades de redução de emissões e otimizar suas estratégias de descarbonização.',
      date: '25 Abril, 2025',
      author: 'Equipe DecarbonMine',
      category: 'Tecnologia'
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog DecarbonMine</h1>
          <p className="text-xl max-w-3xl">
            Insights, análises e novidades sobre tokenização de créditos de carbono, 
            descarbonização industrial e o futuro do mercado voluntário.
          </p>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="section">
        <div className="grid grid-cols-1 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-sm font-medium text-[rgb(var(--primary-color))]">{post.category}</p>
                </div>
                <div className="md:col-span-3">
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-bold mb-4 hover:text-[rgb(var(--primary-color))] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-700 mb-6">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Por {post.author}</p>
                    <Link href={`/blog/${post.id}`} className="text-[rgb(var(--primary-color))] font-medium hover:underline">
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="section text-center">
          <h2 className="heading-3 mb-4">Inscreva-se em nossa Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Receba as últimas novidades sobre o mercado de carbono, tokenização e 
            oportunidades de investimento em descarbonização.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
