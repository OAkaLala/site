import React from "react";

import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const GithubRepositories = ({ projects = [] }) => {
  const context = useDocusaurusContext();
  const { title, customFields = {} } = context.siteConfig || {};
  const flags = [
    "/img/flag_green.svg",
    "/img/flag_blue.svg",
    "/img/flag_red.svg",
    "/img/flag_purple.svg",
  ];
  const getTime = (date, separator = '-') => {
    const pushed_at = new Date(date)
    const year = pushed_at.getFullYear()
    const month = (pushed_at.getMonth() + 1) < 10 ? "0" + (pushed_at.getMonth() + 1) : pushed_at.getMonth() + 1
    const day = pushed_at.getDate() < 10 ? "0" + pushed_at.getDate() : pushed_at.getDate()
    return year + separator + month + separator + day
  }
  return (
    <Layout title={title} description={customFields.description}>
      <div className={styles.docs}>
        <h1>DOCUMENTS</h1>
        <div className={styles.docsCardBox}>
          <div className={styles.docsCardWrapper}>
            {projects.map(
              ({ name, description, pushed_at, tag_name, path, html_url }, index) => (
                <div key={name} className={styles.docsCard}>
                  <div>
                    <img src={useBaseUrl(flags[index % 4])} />
                    <a href={path}>{name}</a>
                  </div>
                  <p>{description}</p>
                  <p>
                    Latest {tag_name ? "version" : "update"}&nbsp;
                    <a href={html_url} target="_blank">{tag_name ? tag_name : "master"}</a>
                    &nbsp;{tag_name ? "version" : "updated"} at&nbsp;
                    <span>{getTime(pushed_at) || "--"}</span>
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GithubRepositories;
