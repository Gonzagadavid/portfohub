# Portfohub - Front

- [Intalação](#instalacao)
- [Instruções de colaboração](#intrucoes-de-colaboracao)
  - [Criar template](#criar-template)
- [Deploy](#deploy)

## Instalação

1. Clone o projeto `git clone git@github.com:Gonzagadavid/portfohub.git`
2. Entre na pasta do projeto `cd portfohub`
3. Instale as dependências `npm install`
4. Crie o arquivo `.env` com base no arquivo `.env.example`
5. inicie o projeto com `npm run dev`

## Instruções de colaboração

### Criar template

1. O template deve ser criado no diretório `src\app\portfolio\_templates`:
2. O template deve ser importado e adicionado no objeto `templatesMap` no arquivo `src\app\portfolio\_components\templateMap.jsx`, usando como chave o nome que será usado para a escolha do template;

```jsx
export const templatesMap = {
  nomeDoTemplate: <ComponenteTemplate />
};
```

3. O template receberá os dados através da props `portfolioData`:

```typescript
type PortfolioData = {
  template: string;
  professional: {
    company: string;
    role: string;
    description: string;
    startDate: string;
    endDate: string | null;
  }[];
  personalData: {
    fullName: string;
    address: string;
    description: string;
    network: string;
    email: string;
    phrase: string;
  };
  softSkills: string[];
  hardSkills: string[];
  academic: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  projects: [
    {
      projectName: string;
      link: string;
      description: string;
      icons: string[];
    }
  ];
};
```

# Deploy

- Utilizado a vercel para o deploy

[techfolio](https://portfohub.vercel.app/)
