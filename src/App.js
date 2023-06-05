import React, { useCallback, useRef } from 'react'
import './App.css';
import './assets/fonts/index.css';
import Header from './components/Header/Header';
import { TelegramLogo, ViberLogo, MtsLogo, BoxLogo, ClockLogo, PaymentLogo } from './assets/index';
import { LINKS } from './constants/constants';

function App() {
  const scrollToAboutCompany = useRef(null);

  const executeScroll = useCallback(() => {
		scrollToAboutCompany.current.scrollIntoView();
	}, []);

  return (
    <>
    <Header executeScroll={executeScroll}/>
      <div className='heading'>
        <div className='heading__wrapper_opacity'>
          <h1 className='heading__title'>
            ГРУЗОПЕРЕВОЗКИ
          </h1>
          <p className='heading__title_align-right'>
            ПО МИНСКУ И РЕСПУБЛИКЕ БЕЛАРУСЬ
          </p>
          <p className='heading__title_align-left'>
            Наша компания специализируется на грузоперевозках и переездах.
            <br />
            Мы предоставляем широкий спектр услуг, связанных с перевозкой грузов и переездами, включая перевозку мебели, бытовой техники, офисного оборудования и других грузов.
          </p>
        </div>
        <div className='heading__contacts'>
          <div className='heading__contacts-wrapper'>
            <a
              className='heading__contacts-wrapper_link'
              href={LINKS.TELEGRAM}
              alt='ссылка на телеграм'
              rel='contact noreferrer'
              target='_blank'
            >
              <TelegramLogo />
              <p className='heading__contacts-wrapper_link-text'>Наш телеграм</p>
            </a>
            <a
              className='heading__contacts-wrapper_link'
              href={LINKS.VIBER}
              alt='ссылка на вайбер'
              rel='contact noreferrer'
              target='_blank'
            >
              <ViberLogo />
              <p className='heading__contacts-wrapper_link-text'>Наш вайбер</p>
            </a>
            <div className='heading__contacts-wrapper_phone'>
              <MtsLogo />
              <p className='heading__contacts-wrapper_phone-text'>{LINKS.PHONE_MTS}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='heading__background-image'>
        <div className='heading__background-image_wrapper'></div>
      </div>
      <main className='company__advantages'>
        <div className='company__advantages-wrapper' ref={scrollToAboutCompany}>
          <h1 className='company__advantages_title'>Почему выбирают нас</h1>
          <p className='company__advantages_description'>
            Мы работаем с клиентами из различных отраслей, включая частных лиц, малые и средние предприятия и крупные компании. Наша компания оснащена современной техникой и оборудованием, что позволяет нам обеспечивать высокое качество услуг.
          </p>
          <p className='company__advantages_description'>
            Наши услуги включают в себя упаковку грузов, загрузку и выгрузку, перевозку грузов на дальние расстояния, а также услуги по разгрузке и распаковке грузов. Мы также предоставляем услуги по переезду квартир, домов и офисов, включая упаковку и транспортировку мебели и других предметов.
          </p>
          <p className='company__advantages_description'>
          Наша цель - обеспечить нашим клиентам полную удовлетворенность нашими услугами и стать надежным партнером в сфере грузоперевозок и переездов.
          </p>
          <h1 className='company__advantages_title'>Наши преимущества</h1>
          <div className='company__benefits-wrapper'>
            <div className='company__benefits-card'>
              <BoxLogo />
              <p className='company__advantages_card-title'>Разнообразие услуг</p>
              <p className='company__advantages_text'>Мы предлагаем широкий спектр услуг от перевозки мебели и электроники до переезда офисов и складских помещений</p>
            </div>
            <div className='company__benefits-card'>
              <ClockLogo />
              <p className='company__advantages_card-title'>Высокое качество обслуживания</p>
              <p className='company__advantages_text'>Мы гарантируем надежную и своевременную доставку грузов</p>
            </div>
            <div className='company__benefits-card'>
              <PaymentLogo />
              <p className='company__advantages_card-title'>Гибкое ценообразование</p>
              <p className='company__advantages_text'>С нами всегда можно договориться об индивидуальных условиях и способах оплаты</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
