import type {
   // InferGetStaticPropsType,
   // GetStaticProps,
   GetStaticPaths,
} from 'next';

//  import { GetPageData } from '@/lib/utils';
import Layout from '@/components/Layout/Layout';

/** Page logic
 * - Get the page data
 * - Render the page
 */

export default function Page() {
   return <Layout></Layout>;
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
