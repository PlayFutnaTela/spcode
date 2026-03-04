export const tagMapping: Record<string, string> = {
  // Estrutura
  'sampa': 'html',
  'mente': 'head',
  'corpo': 'body',
  'quebrada': 'div',
  'pedaco': 'span',
  'area': 'section',
  'cabeca': 'header',
  'pe': 'footer',
  'nave': 'nav',
  'artigo': 'article',
  'lado': 'aside',

  // Texto
  'salve': 'h1',
  'salve2': 'h2',
  'salve3': 'h3',
  'salve4': 'h4',
  'salve5': 'h5',
  'salve6': 'h6',
  'ideia': 'p',
  'forte': 'b',
  'torto': 'i',
  'monstrao': 'strong',
  'enfase': 'em',
  'pequeno': 'small',
  'marca': 'mark',
  'riscado': 'del',
  'inserido': 'ins',
  'sub': 'sub',
  'sup': 'sup',

  // Listas
  'lista': 'ul',
  'lista-numerada': 'ol',
  'item': 'li',

  // Interação e Mídia
  'fita': 'button',
  'link': 'a',
  'retrato': 'img',
  'som': 'audio',
  'video': 'video',
  'entrada': 'input',
  'texto-area': 'textarea',
  'rotulo': 'label',
  'selecao': 'select',
  'opcao': 'option',
  'esquema': 'form',
  'tabela': 'table',
  'linha': 'tr',
  'coluna': 'td',
  'cabecalho-tabela': 'th',
};

export const attributeMapping: Record<string, string> = {
  'bonde': 'class',
  'naipe': 'style',
  'fonte': 'src',
  'destino': 'href',
  'dica': 'placeholder',
  'tipo': 'type',
  'valor': 'value',
  'nome': 'name',
  'clicou': 'onclick',
  'mudou': 'onchange',
  'identidade': 'id',
  'largura': 'width',
  'altura': 'height',
  'alternativo': 'alt',
};

export const defaultCode = `<quebrada naipe="font-family: sans-serif; padding: 2rem; background-color: #f3f4f6; border-radius: 1rem; text-align: center;">
  <salve naipe="color: #111827; margin-bottom: 1rem;">Salve, quebrada!</salve>
  
  <ideia naipe="font-size: 1.2rem; color: #4b5563; margin-bottom: 2rem;">
    Esse aqui é o editor mais chave de SP. 
    Escreve em gíria que o bagulho vira HTML.
  </ideia>

  <quebrada bonde="flex justify-center gap-4">
    <fita naipe="background-color: #000; color: #fff; padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer;">
      É nóis
    </fita>
    
    <link destino="#" naipe="display: inline-block; padding: 10px 20px; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; text-decoration: none;">
      Cola junto
    </link>
  </quebrada>
  
  <quebrada naipe="margin-top: 2rem;">
    <retrato fonte="https://picsum.photos/seed/saopaulo/400/200" alternativo="Imagem aleatória" naipe="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" />
  </quebrada>
</quebrada>`;
