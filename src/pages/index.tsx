import { apolloCon } from 'con/apolloCon'
import { GET_ALL_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Post = {
  id: string
  title: string
  content: string
  description: string
  createAt: Date
  updateAt: Date
  publishedAt: Date
  image: {
    url: string
  }
  slug: string
  category: {
    name: string
  }
  author: {
    name: string
  }
}

type HomeProps = {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="">
      <Head>
        <title>Welcome to blog app with graphql, nextjs and typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {posts &&
          posts.map(post => (
            <div key={post.id}>
              <p>{post.title}</p>
            </div>
          ))}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const { data, loading, error } = await apolloCon.query({
    query: GET_ALL_POSTS
  })

  return {
    props: {
      posts: data.articles
    }
  }
}
