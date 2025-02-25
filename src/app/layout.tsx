import { Roboto, Lato } from "next/font/google";
import { getImagePath } from "./utils";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Isometria", // Global title for the site
  description: "Isometric Grid Art", // Global description
  icons: {
    icon: "/images/AppIcon.png", // Favicon location
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className} ${lato.className}`}>
      <head>
        <link rel="icon" href={getImagePath("/images/AppIcon.png?v=1")} />
      </head>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-YC0QPEHR7E'
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-YC0QPEHR7E');
      </script>
      <body style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}>
        {children}
      </body>
    </html>
  );
}
