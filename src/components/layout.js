import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"; // to query data layer
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const site = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>{pageTitle} | {site.site.siteMetadata.title}</title>
      <header className={siteTitle}>{site.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
