import { Helmet } from "react-helmet";

import "./../styles/works.css";

import rikkyUb from "./../img/works_page/rikkyUB.jpg";
import tgProject from "./../img/works_page/telegram_dark_mode.png";

const Works = () => {
    return (
        <>
            <Helmet>
                <title>BeanD - works</title>
            </Helmet>

            <main class="main">
                <section class="dev">
                    <div class="dev__title">⌨️ Development</div>
                    <div class="dev__cards">
                        <div class="dev__card1">
                            <a target="_blank" rel="noreferrer" href="https://github.com/BeanDx/RikkyUserBot">
                                <img src={rikkyUb} alt={rikkyUb} />
                                <p>Rikkyuserbot is your interactive
                                    multi-functional assistant in Telegram.</p>
                            </a>
                        </div>
                        <div class="dev__card2">
                            <a target="_blank" rel="noreferrer" href="https://teletype.in/@beand/TelegramRat">
                                <img src={tgProject} alt={tgProject} />
                                <p>Computer Rat in a Telegram Bot</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Works;