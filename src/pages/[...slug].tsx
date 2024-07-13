import type {
   InferGetStaticPropsType,
   GetStaticProps,
   GetStaticPaths,
 } from 'next'

export default function Page() {
   return <></>;
}

export const getStaticPaths = (async () => {
   return {
     paths: [
       {
         params: {
           name: 'next.js',
         },
       },
     ],
     fallback: true,
   }
 }) satisfies GetStaticPaths
