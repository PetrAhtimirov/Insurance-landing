import bannerImage from '../images/banner-image.svg';


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__inner container">
                <div className="banner__content">
                    <h1 className="banner__title">Страхование</h1>
                    <p className="banner__desc">
                        Обезопасьте свои покупки от неожиданных ситуаций и возвращайте стоимость неиспользованных
                        билетов
                    </p>
                    <a href="/" className="bunner__button btn" >
                        Оформить страховку
                    </a>
                </div>
                <img className="banner__image" src={bannerImage} alt=""/>
            </div>
        </div>
    )
}

export default Banner;