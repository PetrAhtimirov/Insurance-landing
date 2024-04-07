import {useState} from "react";

import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';

const Need = () => {
    const [curSlide, setCurSlide] = useState(0);
    const cards = [
        {
            desc: 'Вы нашли тот самый долгожданный вами спектакль и отправляетесь в театр. Но вдруг вы заболеваете и ' +
                'вам фиксируют карантин. И представление не посмотрели, и деньги потеряли...',
            image: "need-image-1.svg"
        },
        {
            desc: 'Вы с супругой решили провести день на экскурсии. Но она получила травму, при которой и перестаешь ' +
                'думать про купленные билеты. А деньги уже внесены...',
            image: "need-image-2.svg"
        },
        {
            desc: 'Вы купили билет в музей на ваш любимый историко-культурный период в другом городе. Но рейс ' +
                'отменили, а другой возможности прикоснуться к прекрасному в ближайшее время у вас не будет. ' +
                'Деньги отданы напрасно...',
            image: "need-image-3.svg"
        },
        {
            desc: 'Вы отправляетесь на экскурсионный променад по красивой исторической усадьбе. И вдруг оказывается, ' +
                'что не можете найти паспорт - все силы бросаются на выяснения, а до усадьбы, как и до денег, ' +
                'мыслей не остается...',
            image: "need-image-4.svg"
        },
        {
            desc: 'Концерт вашей любимой группы проходит наконец в городе неподалеку. Вы отправляетесь туда на машине ' +
                'и вдруг попадаете в дорожный форс-мажор. Приходится разбираться с этим, но что же делать с концертом...?',
            image: "need-image-5.svg"
        },
        {
            desc: 'Вы наконец дождались вашей любимой выставки. И вот по пути получаете сообщение, что вашими данными ' +
                'злоупотребили мошенники - вы едете обратно, переживая об этом факте, совсем позабыв про культурные ' +
                'представления и деньги за билет...',
            image: "need-image-6.svg"
        },
        {
            desc: 'Вы сумели найти ту экскурсию, которая не заставит заскучать вашего ребенка и в то же время позволит ' +
                'ему прикоснуться к прекрасному. Однако, он заболевает, да так, что планы пришлось отменить. И ' +
                'просветления не произошло, а деньги на билет были потрачены...',
            image: "need-image-7.svg"
        }]
    const cardsDOM = cards.map((item, i) => (
        <div className="need__card" key={i}>
            <h3 className="need__card__title">
                Ситуация {i + 1}
            </h3>
            <p className="need__card__desc">
                {item.desc}
            </p>
            <img className="need__card__img" src={require('../images/' + item.image)} alt=""/>
        </div>
    ));

    return (
        <div className="need">
            <div className="need__inner container">
                <h2 className="need__title">
                    Когда пригодится?
                </h2>
                <div className="need__content" style={{transform: `translateX(${-405 * curSlide}px)`}}>
                    {cardsDOM}
                </div>
                <div className="controllers">
                    <button className="left"
                            onClick={() => setCurSlide((slide) => slide - 1)}
                            disabled={curSlide ? null : 'disabled'}
                            type="button">
                        <img src={arrowLeft} alt=""/>
                    </button>
                    <button className="right"
                            onClick={() => setCurSlide((slide) => slide + 1)}
                            disabled={curSlide < 4 ? null : 'disabled'}
                            type="button">
                        <img src={arrowRight} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Need;