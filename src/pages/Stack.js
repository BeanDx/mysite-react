import { Helmet } from "react-helmet";

import "./../styles/stack.css";

import hammer from "./../img/icons/stack_page/hammer30x30.png";
import calendar from "./../img/icons/stack_page/calendar30x30.png";
import tools from "./../img/icons/stack_page/tools30x30.png";

const Stack = () => {
    return (
        <>
            <Helmet>
                <title>BeanD - stackpage</title>
            </Helmet>

            <main className="main">
                <section className="tech-stack">
                    <div className="tech-stack__title">
                        <img src={hammer} alt="hammer" />Tech Stack
                    </div>
                    <div className="tech-stack__list">
                        <ul className="tech-stack__items">
                            <li className="tech-stack__item">HTML / CSS</li>
                            <li className="tech-stack__item">JavaScript</li>
                            <li className="tech-stack__item">React.js - 10% (This site write on React :)</li>
                            <li className="tech-stack__item">Prettier / ESLint</li>
                            <li className="tech-stack__item">Markdown</li>
                            <li className="tech-stack__item">Sass / BEM</li>
                        </ul>
                    </div>
                    <div className="tech-stack__separator"></div>
                </section>
                <section className="in-plans">
                    <div className="in-plans__title">
                        <img src={calendar} alt="calendar" />In Plans
                    </div>
                    <div className="in-plans__list">
                        <ul className="in-plans__items">
                            <li className="in-plans__item">MongoDB</li>
                            <li className="in-plans__item">MySQL / PostgreSQL</li>
                            <li className="in-plans__item">Next.js</li>
                        </ul>
                    </div>
                    <div className="in-plans__separator"></div>
                </section>
                <section className="tools">
                    <div className="tools__title">
                        <img src={tools} alt="tools" />Tools
                    </div>
                    <div className="tools__list">
                        <ul className="tools__items">
                            <li className="tools__item">Git / GitHub</li>
                            <li className="tools__item">Vim / Neovim</li>
                            <li className="tools__item">VS Code</li>
                            <li className="tools__item">Figma / Sketch</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Stack 