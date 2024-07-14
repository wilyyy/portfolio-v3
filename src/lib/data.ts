export interface PageData {
   type: string;
   slug: string;
   title?: string;
   description?: string;
   content?: string;
}

export const data: PageData[] = [
   {
      type: 'projects',
      slug: 'project-1',
      title: 'Project 1',
      description: 'Description for project 1',
   },
   {
      type: 'projects',
      slug: 'project-2',
      title: 'Project 2',
      description: 'Description for project 2',
   },
   { type: 'info', slug: 'about-us', content: 'About us content' },
   { type: 'info', slug: 'contact', content: 'Contact content' },
];
