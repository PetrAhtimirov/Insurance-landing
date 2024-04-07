import { useState } from 'react';

import chatLogo from '../images/chat-logo.png';
import sendIcon from '../images/send-icon.svg';
import clip from '../images/clip.svg';
import chat from '../images/chat.svg';

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const hs = window.localStorage.getItem('history');
    const [history, setHistory] = useState(hs ? JSON.parse(hs) : []);

    const onSubmit = (event) => {
        event.preventDefault();
        setHistory((prev) => {
            let updatedHistory = [...prev, { type: 'user', text: query }];
            if (updatedHistory.length > 1) {
                updatedHistory = updatedHistory.slice(-1);
            }
            window.localStorage.setItem('history', JSON.stringify(updatedHistory));
            return updatedHistory;
        });
        let q = ' ' + query;
        setQuery('');
        fetch('https://api.dino-misis.ru/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: history.map((item) => (item.type === 'user' ? item.text : '')).join(' ') + q,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setHistory((prev) => {
                    let updatedHistory = [...prev, { type: 'bot', text: data.text }];
                    if (updatedHistory.length > 50) {
                        updatedHistory = updatedHistory.slice(-50);
                    }
                    window.localStorage.setItem('history', JSON.stringify(updatedHistory));
                    return updatedHistory;
                });
            })
            .catch((error) => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };

    const messages = history.map((item, i) => {
        if (item.type === 'user') {
            return (
                <div key={i} className='user__message'>
                    {item.text}
                </div>
            );
        } else if (item.type === 'bot') {
            return (
                <div key={i} className='bot__message'>
                    {item.text}
                </div>
            );
        }
    });

    return (
        <div className='chat'>
            {open ? (
                <div className='chat__client'>
                    <div className='chat__header'>
                        <div className='chat__header__title'>
                            <p className='chat__header__subtitle'>ДиноБот</p>
                            <p>Поддержка RUSSPASS</p>
                        </div>
                        <img src={chatLogo} alt='Russ Pass' />
                    </div>
                    <div className='dialog'>{messages}</div>
                    <form className='chat__form' onSubmit={onSubmit}>
                        <button type='button' className='chat__form__clip'>
                            <img src={clip} alt='' />
                        </button>
                        <textarea
                            placeholder='Опишите свой вопрос в одном сообщении'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className='chat__form__submit' type='submit'>
                            <img src={sendIcon} alt='' />
                        </button>
                    </form>
                </div>
            ) : null}
            <button className='chat__button' type='button' onClick={() => setOpen(!open)}>
                <img src={chat} alt='' />
            </button>
        </div>
    );
};

export default Chat;
