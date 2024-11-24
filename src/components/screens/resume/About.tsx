import B from "@/components/elements/B";
import I from "@/components/elements/I";
import Section from "./Section";

const About = () => {
    return (
        <Section title="About">
            <p className="text-muted-foreground">
                After high school, I began programming with <B>C</B>, inspired by Tamim Shahriar
                Subeen's <B>Computer Programming</B>. I honed my skills by solving{" "}
                <I>1100+ problems</I> on competitive programming platforms using <I>C/C++</I>,
                gaining a strong foundation in <B>Data Structures and Algorithms</B>. Later, I
                transitioned to web development, starting with <I>Node.js</I> and <I>React</I>, and
                now specialize in <I>Laravel</I> and <I>React</I> for building dynamic full-stack
                applications. I also have experience in <I>WordPress plugin development</I> and have
                worked contractually with{" "}
                <a href="https://finnext.co" target="_blank">
                    <I>Finnext</I>
                </a>{" "}
                on several notable projects. Currently, I am a{" "}
                <I>4th-year Computer Science student</I>
                at <B>Faridpur Polytechnic Institute</B>. Outside of coding, I enjoy <B>walking</B>,
                <B>movies</B>, <B>socializing</B>, and{" "}
                <B>learning about business and entrepreneurship</B>. I'm actively seeking a{" "}
                <I>full-time software developer role</I>.
            </p>
        </Section>
    );
};

export default About;
