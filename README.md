## Next-JS app router internationalization

### create next js project 
```bash
npx create-next-app myapp

√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes 

cd myapp
```

### install dependencies

```bash
npm i negotiator react-intl
```

### install devDependencies
```bash
npm i @types/negotiator --save-dev
```
```bash
# project structure 

├──app
│   ├── [lang] (1) # folder
│   │   ├── layout.tsx (2)
│   │   └── page.tsx (3)
│   │
│   ├── dictionaries.ts (4)
│   │
│   └──  messages (5) # folder
│        ├── en.json (6)
│        └── nl.json (7)
│
├── i18n-config.ts (8)
└── middleware.ts (9)

```