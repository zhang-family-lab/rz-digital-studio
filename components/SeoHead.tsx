import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SeoHead({ 
  title = "RZ Digital Studio | Elite Student Portfolio Websites",
  description = "Stand out in Ivy League admissions with a custom-coded personal website. We build digital portfolios for high school students to showcase research, art, and leadership.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/og-image.jpg" // You should add an image to your public folder
}: SeoProps) {
  const router = useRouter();
  const siteUrl = "https://rz-digital-studio.vercel.app";
  const currentUrl = canonicalUrl || `${siteUrl}${router.asPath.split('?')[0]}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="RZ Digital Studio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}