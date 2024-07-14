import type {
   // InferGetStaticPropsType,
   // GetStaticProps,
   GetStaticPaths,
} from 'next';

//  import { GetPageData } from '@/lib/utils';
import Layout from '@/components/Layout/Layout';

/** Page logic
 * todo: fetch data from lib/data.ts using getStaticProps
 * todo: setup layout component props and pass to layout
 * todo: return component factory in layout
 */

export default function Page() {
   return <Layout>asdsa</Layout>;
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
   };
}) satisfies GetStaticPaths;
