import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
query {
    articles{
        id
        title
        content
        description
        createAt
        updateAt
        publishedAt
        image{
            url
        }
        slug
        category{
            name
        }
        author{
            name
        }
    }
}`