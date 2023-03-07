import { useState } from 'react';

import FbIcon from '../assets/svgs/fb.svg';
import TwIcon from '../assets/svgs/twitter.svg';
import InIcon from '../assets/svgs/instagram.svg';
import MoreIcon from '../assets/svgs/more.svg';
import './Card.css';

const Card = ({ user, cardCount, idx }) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  const { name, jobTitle, avatar, bgImg, bio, email, handle, tel, id } = user;
  const [test, setTest] = useState(false);

  const truncateBio = biotext => {
    return biotext.length >= 171 ? biotext.slice(0, 170) : biotext;
  };

  return (
    <div
      className={cardExpanded ? 'expanded card' : 'card'}
      style={{
        zIndex: idx === cardCount ? '100' : 'inherit',
      }}
    >
      <div
        className='card__bg'
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className='card__avatar'>
          <img src={avatar} alt='avatar' />
        </div>

        {cardExpanded && (
          <button className='card__contact-btn'>Contact me</button>
        )}

        {!cardExpanded && (
          <div className='card__user'>
            <h2 className='card__full-name'>{name}</h2>
            <h5 className='card__job-title'>{jobTitle}</h5>
          </div>
        )}
      </div>

      <div className='card__details'>
        {cardExpanded && (
          <div className='card__user-exp'>
            <h2 className='card__full-name'>{name}</h2>
            <h5 className='card__job-title'>{jobTitle}</h5>
          </div>
        )}

        <div className='card__contacts'>
          <p className='card__email'>{email}</p>
          <p>
            <strong>@</strong>
            {handle}
          </p>
          <p>
            <strong>TEL: </strong>
            {tel}
          </p>
        </div>

        {cardExpanded && (
          <div className='card__bio'>
            <p>{truncateBio(bio)}</p>
          </div>
        )}

        <div className='card__socials'>
          <a href='#' title='FB'>
            <img src={FbIcon} alt='Facebook' />
          </a>
          <a href='#' title='Twitter'>
            <img src={TwIcon} alt='Twitter' />
          </a>
          <a href='#' title='Instagram'>
            <img src={InIcon} alt='Instagram' />
          </a>

          <span>
            <button
              onClick={() => setCardExpanded(!cardExpanded)}
              className='card__more'
            >
              <img src={MoreIcon} alt='See bio' />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
