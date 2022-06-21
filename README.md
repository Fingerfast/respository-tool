In app can:
* Search repositories by fulltext input
* Show repositories with ther potencional issues
* Show Issues in side panel with description

## Repository tool

1. you need to generate access on github.com for repo scope:
- public_repo

2. Put personal token to your local file .env
```bash
PERSONAL_TOKEN="your_token"
```
or run 
```bash
vercel env pull
```
for generate .env from vercel CI

3. Install node modules with:
```bash
npm install
```

4. For start application run one of these:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## APP using
* CSS modules
* [React 18.1 Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Typescript](https://www.typescriptlang.org/)

## API using
* [Github REST API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)



You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
