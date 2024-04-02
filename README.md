## Next-JS app router internationalization

### create next js project 
```bash
npx create-next-app myapp

√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No

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
│   └── [lang] (1) # folder
│        ├── messages (2) # folder
│        │    ├── en.json (3)
│        │    └── nl.json (4)
│        │
│        ├── dictionaries.ts (5)
│        ├── layout.tsx (6)
│        └── page.tsx (7)
│
├── i18n-config.ts (8)
└── middleware.ts (9)
```