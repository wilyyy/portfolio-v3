export interface PageData {
   type: string;
   slug: string;
   title?: string;
   description?: string;
   content?: string;
}

export const data: PageData[] = [
   { type: 'info', slug: 'about-us', content: 'About us content' },
   {
      type: 'projects',
      slug: 'project-landing',
      title: 'Project 1',
      content: 'landing page for projects',
   },
   { type: 'play', slug: 'contact', content: 'Contact content' },
];
