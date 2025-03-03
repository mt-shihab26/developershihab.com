import { renderToString } from "react-dom/server";

const Resume = () => {
    return (
        <div className="container">
            <h1>Hello, Server-Side Rendering!</h1>
            <p>This HTML was rendered on the server.</p>
            <ul>
                <li>Fast initial page load</li>
                <li>Better SEO</li>
                <li>Works without JavaScript</li>
            </ul>
        </div>
    );
};

const render = () => {
    return renderToString(<Resume />);
};

export { render };
