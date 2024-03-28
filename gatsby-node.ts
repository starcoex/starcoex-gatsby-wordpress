import { GatsbyNode } from "gatsby";
import path from "path";

export type TypeWpCategory = {
  id: string;
  name: string;
  count: number;
  uri: string;
  slug: string;
};
type TypeWp = {
  postsPerPage: number;
};

type TypeData = {
  wp: { readingSettings: TypeWp };
  allWpCategory: {
    edges: { node: TypeWpCategory }[];
  };
};
export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  console.log("createPage", createPage);

  const archiveTemplate = path.resolve("./src/templates/archive.tsx");

  const result = await graphql<TypeData>(`
    query LoadPages {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Something went horrible wrong!", result.errors);
    return;
  }
  const { wp, allWpCategory } = result?.data!;
  allWpCategory.edges.forEach((category) => {
    const postsPerPage = wp?.readingSettings?.postsPerPage;
    const numberOfPosts = category.node.count;
    const numPages = Number(Math.ceil(numberOfPosts / postsPerPage));
    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? category.node.uri : `${category.node.uri}${index + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          },
        });
      });
    }
  });
};
