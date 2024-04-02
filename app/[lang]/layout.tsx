import "./globals.css";

interface RootLayout {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default function RootLayout({ children, params }: RootLayout) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
