import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Steven Chen",
  DESCRIPTION: "UBC Electrical Engineering Student",
  AUTHOR: "Steven Chen",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "shengw3n",
    HREF: "https://github.com/Shengw3n"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "shengwen-chen",
    HREF: "https://www.linkedin.com/in/shengwen-chen",
  },
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "shengw3n@student.ubc.ca",
    HREF: "mailto:shengw3n@student.ubc.ca",
  },
]

