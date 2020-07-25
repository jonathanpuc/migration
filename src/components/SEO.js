import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ location, lang, defaultTitle, type, metadata }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            hostname
          }
        }
      }
    `
  );

  let pathname = location.pathname || "/";
  if (pathname.endsWith("/"))
    pathname = pathname.substring(0, pathname.length - 1);
  const canonicalUrl = `${site.siteMetadata.hostname}${pathname}/`;

  const description = metadata
    ? metadata.metaDescription
    : site.siteMetadata.description;

  const socialImageUrl = metadata ? metadata.socialImage : "";
  const title = metadata
    ? `${metadata.metaTitle || defaultTitle} | Maria Nguyen`
    : `${site.siteMetadata.title}`;

  const meta = [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:type",
      content: type || "website",
    },
    {
      property: "og:url",
      content: canonicalUrl,
    },
    {
      property: "og:image",
      content: socialImageUrl,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      property: "twitter:image",
      content: socialImageUrl,
    },
  ];
  // .filter(({ content }) => !!content);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={meta}
      link={[
        {
          rel: "canonical",
          key: canonicalUrl,
          href: canonicalUrl,
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/icons/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/icons/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/icons/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/icons/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/icons/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/icons/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "192x192",
          href: "/icons/apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/icons/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/icons/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/icons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/icons/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/icons/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/icons/favicon-32x32.png",
        },
        {
          rel: "manifest",
          href: "/icons/manifest.json",
        },
      ]}
    >
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/4205275.js"
      ></script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: "en-AU",
};

export default SEO;
