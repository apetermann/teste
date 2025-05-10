# Diretrizes Visuais e de Layout para Ferramentas de IA - DecarbonMine

Este documento estabelece as diretrizes visuais e de layout para as páginas das ferramentas de IA do projeto DecarbonMine, garantindo consistência com a identidade visual existente do site e uma experiência de usuário coesa e intuitiva.

## 1. Princípios Gerais de Design

*   **Consistência:** Manter a linguagem visual (cores, tipografia, componentes) do site principal da DecarbonMine.
*   **Clareza e Intuitividade:** As interfaces devem ser fáceis de entender e usar, mesmo para usuários não técnicos. Priorizar a clareza na apresentação das informações e dos resultados das simulações.
*   **Foco na Interatividade:** O design deve facilitar a interação do usuário com os dados de entrada e a visualização dinâmica dos resultados.
*   **Profissionalismo e Confiança:** O visual deve transmitir a seriedade e a expertise da DecarbonMine no setor.
*   **Responsividade:** As páginas devem ser totalmente responsivas, adaptando-se a diferentes tamanhos de tela (desktop, tablet, mobile).

## 2. Estrutura de Página Padrão

Cada página de ferramenta de IA seguirá uma estrutura similar:

1.  **Cabeçalho (Header):**
    *   Idêntico ao cabeçalho principal do site DecarbonMine (logo, links de navegação principais: Início, Sobre Nós, Blog, Plataforma, Ferramentas AI, Contato).
    *   O link "Ferramentas AI" no cabeçalho principal levará a uma página de índice das ferramentas (a ser criada) ou diretamente à primeira ferramenta, com navegação secundária para as demais.
2.  **Título da Ferramenta e Breve Descrição:**
    *   Abaixo do cabeçalho, um título claro e conciso para a ferramenta (ex: "Modelagem Preditiva de Descarbonização").
    *   Um parágrafo curto explicando o objetivo e os benefícios da ferramenta.
3.  **Área de Interface da Ferramenta (Layout de Duas Colunas - Desktop):**
    *   **Coluna Esquerda (Formulário de Entradas/Controles):**
        *   Onde o usuário inserirá os dados e configurará os parâmetros da simulação.
        *   Organizado de forma lógica, com agrupamento de campos relacionados.
        *   Uso de labels claras para cada campo.
        *   Botão principal de ação (ex: "Simular Cenário", "Otimizar Rota") claramente destacado ao final do formulário.
    *   **Coluna Direita (Visualização de Resultados):**
        *   Onde os resultados da simulação (gráficos, tabelas, mapas, painéis de resumo, recomendações) serão exibidos.
        *   Design limpo, com bom espaçamento para não sobrecarregar o usuário com informações.
        *   Os resultados devem ser atualizados dinamicamente após a ação do usuário na coluna esquerda.
    *   **Responsividade:** Em telas menores (tablets e mobile), as colunas podem empilhar verticalmente, com a área de resultados aparecendo abaixo da área de entradas, ou usar abas/acordeões para organizar o conteúdo.
4.  **Seção de Informações Adicionais/FAQ (Opcional):**
    *   Pode incluir explicações sobre a metodologia da ferramenta, fontes de dados (simuladas), ou respostas para perguntas frequentes.
5.  **Rodapé (Footer):**
    *   Idêntico ao rodapé principal do site DecarbonMine.

## 3. Componentes de UI Reutilizáveis

Utilizar componentes consistentes em todas as ferramentas:

*   **Campos de Formulário:** Inputs de texto, numéricos, selects (dropdowns), sliders, checkboxes, radio buttons. Estilo alinhado com o Tailwind CSS já utilizado no site.
*   **Botões:** Primários (para ações principais, ex: "Simular") e secundários (para ações de menor destaque, ex: "Limpar Formulário"). Cores e estilos consistentes.
*   **Gráficos:** Utilizar Chart.js (ou uma biblioteca similar, se necessário, mas Chart.js já está no escopo). Estilos de gráficos limpos, com cores da paleta DecarbonMine. Tooltips informativos.
*   **Tabelas:** Para exibir dados comparativos ou detalhados. Design limpo e legível.
*   **Mapas Interativos (para Otimização de Rotas, Análise de Risco Climático):** Utilizar Leaflet.js ou uma API de mapas com visualização simulada. Marcadores e polígonos com cores consistentes.
*   **Cards/Painéis de Resumo:** Para destacar KPIs e resultados importantes. Design com bom contraste e hierarquia visual.
*   **Modais/Pop-ups (Opcional):** Para informações adicionais ou confirmações, se necessário.
*   **Abas (Tabs) e Acordeões:** Para organizar conteúdo complexo, especialmente em telas menores.
*   **Indicadores de Carregamento (Spinners):** Para feedback visual durante o processamento simulado.

## 4. Paleta de Cores e Tipografia

*   **Paleta de Cores:** Seguir a paleta existente do site DecarbonMine.
    *   **Primária:** Verde Esmeralda (ex: `#10b981`, `#059669`) para ações principais, destaques e elementos positivos.
    *   **Secundária:** Tons de cinza (ex: `bg-gray-50`, `text-gray-700`, `text-gray-900`) para texto, fundos e elementos neutros.
    *   **Cores de Destaque/Alerta (usar com moderação):** Amarelo/Laranja para avisos, Vermelho para erros.
    *   **Cores para Gráficos:** Uma paleta secundária harmoniosa derivada das cores primárias e neutras para visualização de dados.
*   **Tipografia:** Manter as fontes já utilizadas no site DecarbonMine.
    *   **Títulos (h1, h2, h3):** Fonte Montserrat.
    *   **Corpo de Texto e Labels:** Fonte Open Sans.
    *   Garantir boa legibilidade com tamanhos de fonte adequados e contraste suficiente.

## 5. Navegação entre Ferramentas

*   **Página de Índice de Ferramentas AI:**
    *   Localizada em `/ferramentas_interativas_ia/index.html` (ou similar).
    *   Apresentará um card ou item de lista para cada ferramenta de IA disponível.
    *   Cada card conterá o nome da ferramenta, uma breve descrição e um link para a página da respectiva ferramenta.
*   **Navegação Secundária (Opcional):**
    *   Dentro de cada página de ferramenta, pode haver um menu lateral simples ou breadcrumbs para facilitar a navegação de volta para o índice das ferramentas ou para outras ferramentas relacionadas, se aplicável.
    *   O cabeçalho principal já conterá o link "Ferramentas AI" que levará ao índice.

## 6. Considerações de Acessibilidade (WCAG)

*   Garantir contraste adequado entre texto e fundo.
*   Utilizar atributos `alt` para imagens (mesmo que decorativas, com `alt=""`).
*   Garantir que todos os elementos interativos sejam acessíveis via teclado.
*   Utilizar ARIA labels quando necessário para melhorar a semântica de componentes complexos.

Este documento servirá como base para o desenvolvimento das páginas das ferramentas de IA. Quaisquer desvios ou novas necessidades de design devem ser discutidos e documentados.
