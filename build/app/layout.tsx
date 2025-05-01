import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DecarbonMine - Transformando Créditos de Carbono em Ativos Digitais',
  description: 'Plataforma inovadora de tokenização de créditos de carbono para o setor mineral e metalúrgico, integrando inteligência artificial, blockchain e estratégias financeiras.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
