import { Helmet } from "react-helmet";

import "./../styles/workspace.css";

import astronaut from "./../img/workspace_page/astronaut30x30.png";

const Workspace = () => {
    return (
        <>
            <Helmet>
                <title>BeanD - workspace</title>
            </Helmet>

            <main className="main">
                <section className="workspace">
                    <div className="workspace__title">
                        <img src={astronaut} alt="astronaut" />Working Space
                    </div>
                    <div className="workspace__list">
                        <ul className="workspace__items">
                            <li className="workspace__item"><span className="workspace__list-bold">OS</span> - ArchLinux</li>
                            <li className="workspace__item"><span className="workspace__list-bold">Code Editor</span> - Neovim / VS Code
                            </li>
                            <li className="workspace__item"><span className="workspace__list-bold">Terminal</span> - Kitty</li>
                            <li className="workspace__item"><span className="workspace__list-bold">Shell</span> - Ohmyzsh, powerlevel10k
                            </li>
                            <li className="workspace__item"><span className="workspace__list-bold">Window Manager</span> - i3wm</li>
                            <li className="workspace__item"><span className="workspace__list-bold">Laptop</span> - Lenovo g50-70</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Workspace;