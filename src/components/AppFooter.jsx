import vk from '../images/vk.svg';
import dzen from '../images/dzen.svg';
import tg from '../images/tg.svg';
import ok from '../images/ok.svg';
import sponsor from '../images/sponsor.svg';

const AppFooter = () => {
    return (
        <footer>
            <div className="footer__inner container">
                <div className="footer__main_content">
                    <div className="footer__main__inner">
                        <div className="footer__contacts">
                            <span className="footer__contacts__title">Контакты</span>
                            <p>8 (800) 300-6-122</p>
                            <p>press@welcome.moscow</p>
                        </div>
                        <div className="footer__main_links">
                            <p><a className="footer__link" href="/">О проекте</a></p>
                            <p><a className="footer__link" href="/">Вход для партнеров</a></p>
                        </div>
                    </div>
                    <div className="footer__socials">
                        <a href="/"><img src={vk} alt="Вконтакте"/></a>
                        <a href="/"><img src={dzen} alt="Дзен"/></a>
                        <a href="/"><img src={tg} alt="Телеграм"/></a>
                        <a href="/"><img src={ok} alt="Одноклассники"/></a>
                    </div>
                </div>
                <div className="footer__other_content">
                    <img src={sponsor} alt="Развитие туризма и гостериимства Москвы"/>
                    <div className="footer__other_links">
                        <a className="footer__link" href="/">Политика конфиденциальности</a>
                        <a className="footer__link" href="/">Политика обработки персональных данных</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;