import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import "./../styles/style.css"

import me from "./../img/hello-world-block/me2.jpg";

import gh from "./../img/icons/gh30x30.png";
import tg from "./../img/icons/tg30x30.png";
import ds from "./../img/icons/ds30x30.png";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>BeanD - Homepage</title>
            </Helmet>

            <main class="main">
                <section className="hello-world">
                    <div className="hello-world__container">
                        <div className="hello-world__text">
                            Hello world, I'm a Front-end Developer based in Kyiv!
                        </div>
                        <div className="hello-world__namepic">
                            <div className="hello-world__name">
                                BeanD <br />
                                <span className="hello-world__text2">Creator ( Developer / Gamer )</span>
                            </div>
                            <div className="hello-world__image">
                                <img src={me} alt="me" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="about__container">
                        <div className="about__title">
                            ❓About
                        </div>
                        <div className="about__text">
                            <p>
                                <br />I am 16 years old and I am a frontend developer from Kyiv, Ukraine. <br />
                                I mainly learn how to write code with the help of YouTube videos. <br />
                                In my free time, I read different books.
                            </p>
                        </div>
                        <div class="about__button">
                            <NavLink to="/stack">
                                My Stuck
                            </NavLink>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="bio__container">
                        <div class="bio__title">✌️ Bio</div> <br /> <br />
                        <div class="bio__list">
                            <ul class="bio__items">
                                <li class="item"><span>2006:</span> Born in Kyiv, Ukraine.</li>
                                <li class="item"><span>2020 - 2021:</span> Learn Python and C++.</li>
                                <li class="item"><span>2023:</span> learn JavaScript.</li>
                            </ul>
                        </div>
                        <div class="bio__button">
                            <NavLink to="/works">
                                My Workspace
                            </NavLink>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="hobbies__container">
                        <div class="hobbies__title">👍 Hobbies</div> <br /> <br />
                        <div class="hobbies__text">Coding, Design, Books, Traveling, Games.</div>
                    </div>
                </section>
                <section class="links">
                    <div class="links__container">
                        <div class="links__title">🌎 On the web</div> <br /> <br />
                        <div class="links__links">
                            <div class="links__gh">
                                <a target="_blank" href="https://github.com/BeanDx" rel="noreferrer" >
                                    <img src={gh} alt="github" />
                                    <span className="links__nicknames">@BeanDx</span>
                                </a>
                            </div>
                            <div class="links__tg">
                                <a target="_blank" href="https://t.me/PearDe" rel="noreferrer" >
                                    <img src={tg} alt="telegram" />
                                    <span className="links__nicknames">@PearDe</span>
                                </a>
                            </div>
                            <div class="links__ds">
                                <a target="_blank" href="https://discordapp.com/users/952489235695407114" rel="noreferrer" >
                                    <img src={ds} alt="discord" />
                                    <span className="links__nicknames">BeanD#5995</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;