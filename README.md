# Safra Flex - Cliente Dashboard

Uma aplicação Angular para ser integrada ao Twilio Flex, exibindo informações detalhadas do cliente para agentes.

## Funcionalidades

- **Informações do Cliente**: Nome, número da conta, cliente desde, nível de relacionamento
- **Detalhes do Contato**: Motivo do contato atual
- **Recomendação IA**: Plano de ação sugerido pela inteligência artificial
- **Interface em Português (BR)**: Completamente localizada para o mercado brasileiro
- **Design Twilio Paste**: Utiliza os princípios de design do Twilio Paste

## Desenvolvimento Local

Para iniciar o servidor de desenvolvimento:

```bash
npm install
ng serve
```

Abra `http://localhost:4200/` no navegador.

## Deploy no Heroku

Esta aplicação está configurada para deploy automático no Heroku:

1. **Criar aplicação no Heroku:**
```bash
heroku create sua-app-safra-flex
```

2. **Deploy:**
```bash
git add .
git commit -m "Initial commit"
git push heroku main
```

3. **Configuração automática:** O Heroku executará automaticamente:
   - `npm install`
   - `npm run heroku-postbuild` (que executa `ng build --configuration production`)
   - `npm start` (que executa `node server.js`)

## Estrutura do Projeto

- `src/app/app.ts` - Componente principal com dados do cliente
- `src/app/app.html` - Template HTML com informações do cliente
- `src/app/app.scss` - Estilos baseados no Twilio Paste
- `server.js` - Servidor Express para produção no Heroku
- `package.json` - Configurado com scripts para Heroku

## Personalização

Para personalizar as informações do cliente, edite o objeto `customerInfo` em `src/app/app.ts`:

```typescript
customerInfo: CustomerInfo = {
  contactReason: 'Seu motivo de contato',
  customerName: 'Nome do Cliente',
  aiRecommendation: 'Sua recomendação da IA',
  customerSince: 'Mês/Ano',
  relationshipLevel: 'Nível',
  accountNumber: 'Número da conta'
};
```

## Tecnologias Utilizadas

- Angular 20
- Twilio Paste (UI Framework)
- Express.js (para produção)
- SCSS (estilos)
- TypeScript