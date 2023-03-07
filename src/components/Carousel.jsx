import { Fragment, useState } from 'react';
import Card from './Card';
import arrow from '../assets/svgs/arrow.svg';
import './Carousel.css';

const Carousel = ({ users }) => {
  const [cardCount, setCardCount] = useState(0);

  const next = () => {
    if (cardCount < users.length - 1) {
      setCardCount(curr => curr + 1);
    } else {
      setCardCount(0);
    }
  };
  const prev = () => {
    if (cardCount > 0) {
      setCardCount(curr => curr - 1);
    } else {
      setCardCount(users.length - 1);
    }
  };
  return (
    <div className='container'>
      <div className='carousel'>
        <button onClick={prev} className='carousel__btn carousel__btn-prev'>
          <img src={arrow} alt='Previous card' />
        </button>

        <div className='card-wrapper'>
          {/* {users && <Card user={users[cardCount]} />} */}
          {users &&
            users.map((user, idx) => {
              return (
                <Fragment key={user.id}>
                  <Card user={user} cardCount={cardCount} idx={idx} />
                </Fragment>
              );
            })}
        </div>

        <button onClick={next} className='carousel__btn carousel__btn-next'>
          <img src={arrow} alt='Next card' />
        </button>
      </div>
      <div className='carousel__controls'>
        {users &&
          users.map((control, index) => {
            return (
              <div
                key={control.id}
                className={cardCount === index ? 'active control' : 'control'}
                onClick={() => setCardCount(index)}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
