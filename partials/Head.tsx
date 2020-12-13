/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

const SZHead: React.FC<{
  darkLogo?: string;
  origin?: string;
  title: string;
}> = ({ darkLogo, origin, title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />

    {/* Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={origin} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Give Charity to your community." />
    <meta property="og:image" content={darkLogo} />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={origin} />
    <meta property="twitter:title" content="Column" />
    <meta
      property="twitter:description"
      content="Give Charity to your community."
    />
    <meta property="twitter:image" content={darkLogo} />
    <meta property="twitter:image:alt" content="Column logo" />

    {/* Favicons */}
    <link rel="icon" type="image/png" href={darkLogo} />

    <meta name="msapplication-TileColor" content="#2c9bdb" />
    <meta name="theme-color" content="#2c9bdb" />
  </Head>
);

export default SZHead;
