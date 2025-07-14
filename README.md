# Header Template - Academic Side Quest

Este é o template padrão do header para o projeto Academic Side Quest. Use este template para manter a consistência visual em todas as páginas do projeto.

## Arquivos Incluídos

- `header_template.html` - Template HTML com o header
- `static/header_template.css` - Estilos CSS para o header
- `static/header_template.js` - JavaScript básico para funcionalidades
- `static/images/profile_pic.png` - Imagem de perfil padrão
- `static/images/logoz.svg` - Logo do projeto

## Como Usar

1. **Copie o HTML base:**
   ```html
   <header>
       <div class="user-info">
           <a href="#"><img class="prof-pic" src="{{ url_for('static', filename='images/profile_pic.png') }}" alt="user"></a>
           <div class="user-text">
               <p>User name</p>
               <p>University name</p>
           </div>
       </div>

       <div class="logo">
           <img class="logo-img" src="{{ url_for('static', filename='images/logoz.svg') }}" alt="Logo">
       </div>
   </header>
   ```

2. **Inclua o CSS:**
   ```html
   <link rel="stylesheet" href="{{ url_for('static', filename='header_template.css') }}">
   ```

3. **Inclua o JavaScript (opcional):**
   ```html
   <script src="{{ url_for('static', filename='header_template.js') }}"></script>
   ```

## Estrutura do Header

O header contém:
- **Informações do usuário:** Foto de perfil, nome do usuário e universidade
- **Logo:** Logo do Academic Side Quest
- **Design responsivo:** Adapta-se a diferentes tamanhos de tela

## Cores Utilizadas

- **Fundo do header:** `#F29334` (laranja)
- **Texto:** `#FFFFFF` (branco)
- **Fundo da página:** `#FFF5EB` (bege claro)
- **Títulos:** `#172B68` (azul escuro)
- **Destaque:** `#FFB44E` (amarelo/dourado)

## Responsividade

O template é responsivo e se adapta a:
- **Desktop:** Largura completa
- **Tablet:** Largura até 700px
- **Mobile:** Largura até 480px

## Personalizações

Você pode personalizar:
- Cores no arquivo CSS
- Tamanhos de elementos
- Adicionar novos itens ao header
- Modificar a estrutura mantendo o padrão visual

## Exemplo de Uso

Veja o arquivo `header_template.html` para um exemplo completo de como usar o template.

## Integrando em Sua Branch

1. **Copie os arquivos necessários:**
   - `header_template.html` (como base)
   - `static/header_template.css`
   - `static/header_template.js` (se necessário)
   - `static/images/profile_pic.png`
   - `static/images/logoz.svg`

2. **Adapte para sua página:**
   - Substitua o conteúdo do `<main>` pelo conteúdo da sua página
   - Mantenha a estrutura do `<header>` intacta
   - Ajuste o título da página

3. **Manter consistência:**
   - Use as mesmas cores e estilos
   - Mantenha o header fixo
   - Preserve a responsividade

## Suporte

Para dúvidas ou sugestões sobre o template, entre em contato com a equipe de desenvolvimento.
