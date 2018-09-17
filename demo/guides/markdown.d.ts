// Tell the project how to resolve Markdown file imports
declare module '*.md' {
  const content: string;
  export default content;
}
