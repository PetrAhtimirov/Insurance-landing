const Bonus = () => {
    return (
        <div className='bonus'>
            <div className='bonus__inner container'>
                <h2 className='bonus__title'>Наши преимущества</h2>
                <div className='bonus__content'>
                    <div className='bonus__card'>
                        <h3 className='bonus__card__title'>Розыгрыши</h3>
                        <p className='bonus__card__desc'>
                            на билетов на мероприятия и подарков от партнёров
                        </p>
                    </div>
                    <div className='bonus__card'>
                        <h3 className='bonus__card__title'>Кешбек</h3>
                        <p className='bonus__card__desc'>
                            процент от покупки билета возвращается вам
                        </p>
                    </div>
                    <div className='bonus__card'>
                        <h3 className='bonus__card__title'>Сниженная страховая стоимость</h3>
                        <p className='bonus__card__desc'>
                            при хорошей страховой истории стоимость следующих страховок снижается
                        </p>
                    </div>
                    <div className='bonus__card'>
                        <h3 className='bonus__card__title'>1 рубль</h3>
                        <p className='bonus__card__desc'>за покупку первой страховки</p>
                    </div>
                    <div className='bonus__card'>
                        <h3 className='bonus__card__title'>Приведи друга</h3>
                        <p className='bonus__card__desc'>и получи страховку бесплатно</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bonus;
