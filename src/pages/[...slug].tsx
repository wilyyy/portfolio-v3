import type {
   InferGetStaticPropsType,
   GetStaticProps,
   GetStaticPaths,
 } from 'next'

 import { GetPageData } from '@/lib/utils';

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
