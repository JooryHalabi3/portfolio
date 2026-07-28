import {
    BrainCircuit,
    Braces,
    Cookie,
    Database,
    KeyRound,
    Mail,
    ShieldCheck,
} from "lucide-react";

import {
    SiChartdotjs,
    SiCss,
    SiExpress,
    SiFastapi,
    SiFigma,
    SiFirebase,
    SiFlutter,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSupabase,

} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
type TechnologyIconProps = {
    name: string;
    className?: string;
};

export default function TechnologyIcon({
    name,
    className = "h-3.5 w-3.5 shrink-0 text-gold",
}: TechnologyIconProps) {
    switch (name.trim().toLowerCase()) {
        case "node.js":
        case "nodejs":
            return <SiNodedotjs className={className} />;

        case "express.js":
        case "express":
            return <SiExpress className={className} />;

        case "fastapi":
            return <SiFastapi className={className} />;

        case "javascript":
            return <SiJavascript className={className} />;

        case "python":
            return <SiPython className={className} />;

        case "mysql":
            return <SiMysql className={className} />;

        case "postgresql":
            return <SiPostgresql className={className} />;

        case "supabase":
            return <SiSupabase className={className} />;

        case "database":
        case "database design":
        case "sql":
            return <Database className={className} />;

        case "html":
        case "html5":
            return <SiHtml5 className={className} />;

        case "css":
        case "css3":
            return <SiCss className={className} />;

        case "react":
        case "react native":
            return <SiReact className={className} />;

        case "chart.js":
        case "chartjs":
            return <SiChartdotjs className={className} />;

        case "flutter":
            return <SiFlutter className={className} />;

        case "firebase":
            return <SiFirebase className={className} />;

        case "git":
            return <SiGit className={className} />;

        case "github":
            return <SiGithub className={className} />;

        case "figma":
            return <SiFigma className={className} />;

        case "vs code":
        case "visual studio code":
            return <VscCode className={className} />;
        case "jwt":
        case "jwt authentication":
            return <KeyRound className={className} />;

        case "rbac":
        case "role-based access control":
            return <ShieldCheck className={className} />;

        case "rest api":
        case "rest apis":
            return <Braces className={className} />;

        case "express session":
            return <Cookie className={className} />;

        case "nodemailer":
            return <Mail className={className} />;

        case "ai":
        case "ai api":
        case "ai apis":
        case "ai integration":
            return <BrainCircuit className={className} />;

        default:
            return <Braces className={className} />;
    }
}