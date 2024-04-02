import { getDictionary } from "./dictionaries";

interface HomeProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);
  return <button>{dict.products.cart}</button>;
}
