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

            <main class="main">
                <section class="tech-stack">
                    <div class="tech-stack__title">
                        <img src={hammer} alt="hammer" />Tech Stack
                    </div>
                    <div class="tech-stack__list">
                        <ul class="tech-stack__items">
                            <li class="tech-stack__item">HTML / CSS</li>
                            <li class="tech-stack__item">JavaScript</li>
                            <li class="tech-stack__item">Prettier / ESLint</li>
                            <li class="tech-stack__item">Markdown</li>
                            <li class="tech-stack__item">Sass / BEM</li>
                        </ul>
                    </div>
                    <div class="tech-stack__separator"></div>
                </section>
                <section class="in-plans">
                    <div class="in-plans__title">
                        <img src={calendar} alt="calendar" />In Plans
                    </div>
                    <div class="in-plans__list">
                        <ul class="in-plans__items">
                            <li class="in-plans__item">MongoDB</li>
                            <li class="in-plans__item">MySQL / PostgreSQL</li>
                            <li class="in-plans__item">Next.js</li>
                        </ul>
                    </div>
                    <div class="in-plans__separator"></div>
                </section>
                <section class="tools">
                    <div class="tools__title">
                        <img src={tools} alt="tools" />Tools
                    </div>
                    <div class="tools__list">
                        <ul class="tools__items">
                            <li class="tools__item">Git / GitHub</li>
                            <li class="tools__item">Vim / Neovim</li>
                            <li class="tools__item">VS Code</li>
                            <li class="tools__item">Figma / Sketch</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Stack 