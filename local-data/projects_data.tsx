const rootPath = "/react-next-projects";

export const projects: {
  title: string;
  href: string;
  description: string;
  isNew: boolean;
  inProgress: boolean;
}[] = [
  {
    title: "Shopping Cart",
    href: `${rootPath}/shopping-cart`,
    description:
      "Shopping cart built using React useReducer hook, json server.",
    isNew: true,
    inProgress: false,
  },
  {
    title: "React Table",
    href: `${rootPath}/react-table`,
    description: "In-line editable react table.",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Image Drag & Drop",
    href: `${rootPath}/image-drag-drop`,
    description:
      "Create a component to drag and drop files, using react dropzone or plain html5 drag and drop.",
    isNew: true,
    inProgress: false,
  },
  {
    title: "Progress on Scroll",
    href: `${rootPath}/progress-on-scroll`,
    description:
      "Create a progress bar that shows the progress as user's scroll.",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Tailwind",
    href: `${rootPath}/tailwind`,
    description: "Some awesome tailwind tricks",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Unsplash",
    href: `${rootPath}/unsplash`,
    description: "Learn to use context, search, react-query, and unsplash API.",
    isNew: false,
    inProgress: false,
  },
  {
    title: "CMS",
    href: `${rootPath}/cms`,
    description: "Learn to integrate CMS(Content Management System)",
    isNew: false,
    inProgress: false,
  },
  {
    title: "MUI",
    href: `${rootPath}/mui`,
    description:
      "Playing around with MUI base components and styling them with Tailwind CSS",
    isNew: false,
    inProgress: true,
  },
  {
    title: "Multi-Page Form",
    href: `${rootPath}/forms/multi-page-forms`,
    description: "Create a multi-page form with React and React Hook Form",
    isNew: false,
    inProgress: true,
  },
  {
    title: "Form Builder",
    href: `${rootPath}/forms/form-builder`,
    description: "Drag and drop input fields to create forms",
    isNew: false,
    inProgress: true,
  },
  {
    title: "Zod + React Hook Form",
    href: `${rootPath}/form/zod-hook-forms`,
    description: "Implementation of Zod with React hook forms, using ShadCN",
    isNew: false,
    inProgress: true,
  },
  {
    title: "Menu",
    href: `${rootPath}/menu`,
    description:
      "Learn to filter the data when clicking on filters of the menu to show filtered items",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Tabs",
    href: `${rootPath}/tabs`,
    description: "Create your own tabs to display different content",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Image Slider",
    href: `${rootPath}/image-slider`,
    description: "Create your own image slider with React and Tailwind CSS",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Class component",
    href: `${rootPath}/class-component`,
    description:
      "Playing around with class and functional components (See how things can work between them)",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Zustand Demo",
    href: `${rootPath}/zustand`,
    description: "A simple implementation of zustand",
    isNew: false,
    inProgress: false,
  },
  {
    title: "Framer Motion",
    href: `${rootPath}/framer-motion`,
    description: "A simple implementation of framer motion library",
    isNew: false,
    inProgress: false,
  },
];
