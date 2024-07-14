import { PageData } from './data';

/**
 * Function to get page props from slug
 */
export const GetPageData = (
   slug: string,
   data: PageData[]
): PageData | undefined => {
   return data.find((item) => item.slug === slug);
};
