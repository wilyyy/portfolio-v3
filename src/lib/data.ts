const InfoContent = {
   bio: 'This is a bio',

}

export interface PageData {
   type: string;
   slug: string;
   title?: string;
   description?: string;
   content?: {};
}

export const data: PageData[] = [
   { type: 'info', slug: 'about-us', content: InfoContent },
   {
      type: 'projects',
      slug: 'project-landing',
      title: 'My Projects',
      content: 'landing page for projects',
   },
   { type: 'play', slug: 'play', content: 'play content' },
   { type: 'play', slug: 'play', content: 'play content' },
   { type: 'play', slug: 'play', content: 'play content' },
];
