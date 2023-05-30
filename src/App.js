import './App.css';
import './assets/fonts/index.css';
import Header from './components/Header/Header';
import { TelegramLogo, ViberLogo, MtsLogo, LifeLogo } from './assets/index';
import { LINKS } from './constants/constants';

function App() {
  return (
    <>
    <Header />
      <div className='heading'>
        <div className='heading__wrapper_opacity'>
          <h1 className='heading__title'>
            ГРУЗОПЕРЕВОЗКИ
          </h1>
          <p className='heading__title_align-right'>
            ПО МИНСКУ И РЕСПУБЛИКЕ БЕЛАРУСЬ
            {/* По Минску и Республике Беларусь */}
          </p>
          <p className='heading__title_align-left'>
            Наша компания специализируется на грузоперевозках и переездах.
            <br />
            Мы предоставляем широкий спектр услуг, связанных с перевозкой грузов и переездами, включая перевозку мебели, бытовой техники, офисного оборудования и других грузов.</p>
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
            <div className='heading__contacts-wrapper_phone'>
              <LifeLogo />
              <p className='heading__contacts-wrapper_phone-text'>{LINKS.PHONE_LIFE}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='heading__background-image'>
        <div className='heading__background-image_wrapper'>
        </div>
      </div>
      <main style={{width: '100%', height: '100vh'}}></main>
    </>
  );
}

export default App;
