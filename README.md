# Visão Geral

**Ignite Teams** é uma aplicação mobile desenvolvida em **React Native** que ajuda os usuários a organizar pessoas em times para jogos ou atividades.  
O app permite criar diferentes grupos, adicionar membros e separá-los em dois times dentro de cada grupo.

---

## Principais Recursos

- Criar e gerenciar múltiplos grupos  
- Adicionar jogadores aos grupos  
- Organizar jogadores em Time 1 e Time 2  
- Remover jogadores e grupos  
- Armazenamento persistente de dados usando **AsyncStorage**

---

## Tecnologias Utilizadas

- React Native com Expo  
- TypeScript  
- Styled Components para estilização  
- React Navigation para navegação  
- AsyncStorage para persistência local de dados  
- Phosphor Icons e Material Icons para elementos de UI

---

## Estrutura do Projeto

```plaintext
src/
├── @types/       # Definições de tipos TypeScript
├── assets/       # Imagens e outros arquivos estáticos
├── components/   # Componentes UI reutilizáveis
├── routes/       # Configuração de navegação
├── screens/      # Telas da aplicação
├── storage/      # Manipulação de dados do AsyncStorage
├── theme/        # Tema global de estilização
└── utils/        # Funções utilitárias
```

---

## Telas

### Tela de Grupos
A tela principal que exibe todos os grupos criados. Os usuários podem visualizar grupos existentes e criar novos.

### Tela de Novo Grupo
Permite aos usuários criar um novo grupo fornecendo um nome.

### Tela de Jogadores
Gerencia jogadores dentro de um grupo específico. Os usuários podem:

- Adicionar novos jogadores  
- Atribuir jogadores ao Time 1 ou Time 2  
- Visualizar todos os jogadores em um time selecionado  
- Remover jogadores  
- Excluir o grupo inteiro

---

## Componentes

A aplicação utiliza diversos componentes reutilizáveis:

- `Button`: Botão padrão com estilos primário e secundário  
- `ButtonIcon`: Botão somente com ícone para ações  
- `EmptyList`: Exibe uma mensagem quando uma lista está vazia  
- `Filter`: Componente de filtro alternável para seleção de time  
- `GroupCard`: Componente de card exibindo informações do grupo  
- `Header`: Cabeçalho de navegação com botão de voltar opcional  
- `Highlight`: Título de seção com subtítulo  
- `Input`: Campo de entrada de texto  
- `Loading`: Indicador de carregamento  
- `PlayerCard`: Card exibindo informações do jogador com opção de remover

---

## Estrutura de Armazenamento

Os dados são armazenados localmente usando **AsyncStorage** com a seguinte estrutura:

- Grupos são armazenados como um array de strings:  
  `@ignite-teams:groups`

- Jogadores são armazenados por grupo:  
  `@ignite-teams:players-${nomeDoGrupo}`

---

## Tratamento de Erros

A aplicação utiliza uma classe personalizada `AppError` para tratar e exibir mensagens de erro amigáveis ao usuário.

---

## Tema

O app usa um tema consistente definido em `src/theme/index.ts`, incluindo:

- Paleta de cores  
- Famílias de fontes  
- Tamanhos de fonte

---

## Configuração e Instalação

1. Clone o repositório  
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. Execute no iOS ou Android:
   ```bash
   npm run ios
   # ou
   npm run android
   ```

---

## Dependências do Projeto

- React e React Native  
- Framework Expo  
- React Navigation  
- Styled Components  
- AsyncStorage  
- Phosphor React Native  
- Expo Google Fonts

---

## Boas Práticas de Desenvolvimento

- Componentes tipados com TypeScript  
- Arquitetura baseada em componentes  
- Hooks personalizados para lógica de negócio  
- Separação de responsabilidades (UI/lógica de negócio)  
- Componentes e estilos reutilizáveis

---

> Este projeto foi desenvolvido como parte do programa **Ignite da Rocketseat**.
