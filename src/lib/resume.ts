import { render } from "~/components/screens/resume";
import { pdf } from "./pdf";

const html = render();
await pdf(html, "public/shihab-mahamud-resume.pdf");
