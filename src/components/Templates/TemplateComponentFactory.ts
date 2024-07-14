import Info from "./Info/Info";
import Work from "./Work/Work";
import Play from "./Play/Play";

const templates = {
  info: Info,
  projects: Work,
  play: Play
}

// export const getTemplateComponent = (type, props) => {
//   const TemplateComponent = templates[type];
//   return TemplateComponent ? <TemplateComponent {...props} /> : null;
// };