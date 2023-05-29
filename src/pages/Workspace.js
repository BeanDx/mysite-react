import { Helmet } from "react-helmet";

import "./../styles/workspace.css";

import astronaut from "./../img/workspace_page/astronaut30x30.png";

const Workspace = () => {
    return (
        <>
            <Helmet>
                <title>BeanD - workspace</title>
            </Helmet>

            <main class="main">
                <section class="workspace">
                    <div class="workspace__title">
                        <img src={astronaut} alt="astronaut" />Working Space
                    </div>
                    <div class="workspace__list">
                        <ul class="workspace__items">
                            <li class="workspace__item"><span class="workspace__list-bold">OS</span> - ArchLinux</li>
                            <li class="workspace__item"><span class="workspace__list-bold">Code Editor</span> - Neovim / VS Code
                            </li>
                            <li class="workspace__item"><span class="workspace__list-bold">Terminal</span> - Kitty</li>
                            <li class="workspace__item"><span class="workspace__list-bold">Shell</span> - Ohmyzsh, powerlevel10k
                            </li>
                            <li class="workspace__item"><span class="workspace__list-bold">Window Manager</span> - i3wm</li>
                            <li class="workspace__item"><span class="workspace__list-bold">Laptop</span> - Lenovo g50-70</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Workspace;