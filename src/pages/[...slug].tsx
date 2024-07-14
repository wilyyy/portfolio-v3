import type {
   // InferGetStaticPropsType,
   // GetStaticProps,
   GetStaticPaths,
} from 'next';

import { GetPageData } from '@/lib/utils';
import { data, PageData } from '@/lib/data'; 
import Layout from '@/components/Layout/Layout';

/** Page logic
 * todo: fetch data from lib/data.ts using getStaticProps
 * todo: setup layout component props and pass to layout
 * todo: return component factory in layout
 */

export default function Page() {
   return <Layout>asdsa</Layout>;
}

interface PageProps {
   type: string;
   content: PageData;
}

export const getStaticProps = async ({ params }: any) => {
   const slug = params.slug.join('/');
   const pageData = GetPageData(slug, data);

   if (!pageData) {
      return { notFound: true };
   }

   return {
      props: {
         type: pageData.type,
         content: pageData,
      },
   };
};

export const getStaticPaths = (async () => {
   const paths = data.map((item) => ({
      params: { slug: [item.type, item.slug] },
   }));

   console.log(paths);

   return { 
      paths, 
      fallback: false,
   };
}) satisfies GetStaticPaths;
