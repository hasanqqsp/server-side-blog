import { useEffect, useState } from 'react'
import Head from 'next/head'
import parse from 'html-react-parser'
import articleJSON from '../../public/article.json'
export default function Home({data}) {
  // useEffect(() => {
  //   fetch('/article.json').then((response) => response.json()).then((data) => {
  //     setArticle(data.article)
  //     setLoading(false)
  //   }
  //     ).catch((error) => console.error('Error fetching data:', error));
  // },[])
 
  const article = data
  return (
    <>
      <Head>
        <title>Blog Server Side Rendering</title>
        <meta name="description" content="Blog dengan Client Side Rendering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        {
          `img {
            min-width: 100%;
            max-width: 100%;
            aspect-ratio: 16/9;
          }`
        }
        
      </style>
      <main className='container max-w-4xl font-sans mx-auto my-10 px-8'>
        <h1 className='text-5xl font-bold mb-5'>{article.title}</h1>
      <div className=''>
        <style>{`
          h2 {
            font-size: 1.875rem; /* 30px */
            line-height: 2.25rem; /* 36px */
            margin-top: 0.5rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
          }
          p {
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
            margin-top: 0.5rem;
          }
        `}</style>
        {parse(article.body)}</div>
       </main>
       <hr />
       <footer className='text-center'>
        Artikel ini dibuat oleh Open AI GPT 3 <br/>Halaman ini dibuat untuk keperluan eksperimental
       </footer>
     </>
   )
}


export async function getServerSideProps(){
  console.log(articleJSON)
  // const data = JSON.parse(articleJSON)
  return {props:{data:articleJSON.article}}
}