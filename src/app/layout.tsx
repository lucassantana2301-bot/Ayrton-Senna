import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AYRTON SENNA | O Doido da Velocidade & A Lenda da F1",
  description: "Landing page oficial tributo a Ayrton Senna da Silva. Conheça a história, estatísticas, vitórias lendárias e o trabalho do Instituto Ayrton Senna.",
  keywords: ["Ayrton Senna", "Formula 1", "F1 Legend", "McLaren", "Tricampeão", "Instituto Ayrton Senna", "Brasil F1"],
  authors: [{ name: "Tributo Ayrton Senna" }],
  openGraph: {
    title: "AYRTON SENNA — A LENDA DO AUTOMOBILISMO",
    description: "Explore a carreira, conquistas e o legado eterno de Ayrton Senna da Silva.",
    images: ["/images/hero_senna.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="bg-[#0A0A0C] text-white antialiased selection:bg-[#FFE100] selection:text-[#0A0A0C]">
        {children}
      </body>
    </html>
  );
}
