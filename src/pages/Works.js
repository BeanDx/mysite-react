import { Helmet } from "react-helmet";

import "./../styles/works.css";

import site1 from "./../img/works_page/site1.jpg";
import site2 from "./../img/works_page/site2.jpg"

const Works = () => {
    return (
        <>
            <Helmet>
                <title>BeanD - works</title>
            </Helmet>

            <main className="main">
                <section className="dev">
                    <div className="dev__title">⌨️ Development</div>
                    <div className="dev__cards">
                        <div className="dev__card1">
                            <a target="_blank" rel="noreferrer" href="https://beandx.github.io/site1/">
                                <img src={site1} alt="site1" />
                                <p>My first site. 01/31/2023</p>
                            </a>
                        </div>
                        <div className="dev__card2">
                            <a target="_blank" rel="noreferrer" href="https://beandx.github.io/site2/">
                                <img src={site2} alt="site2" />
                                <p>Second site. 01/10/2023</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Works;