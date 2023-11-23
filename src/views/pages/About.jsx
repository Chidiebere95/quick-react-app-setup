import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../context/Context';
import { randomFuncTion } from '../../random-function/randomFunction';
import { getLoremAboutPage } from '../../features/get-lorem-about-page/loremAboutPageSlice';
import { icons } from '../../assets/icons';
function About() {
  const { variable1 } = randomFuncTion();
  const dispatch = useDispatch();
  const { loremAboutPage } = useSelector((state) => {
    return state;
  });
  const { theme } = useContext(AppContext);
  useEffect(() => {
    dispatch(getLoremAboutPage());
  }, []);
  return (
    <div className='App'>
      {loremAboutPage.status === 'loading' ? (
        <p>Loading...</p>
      ) : loremAboutPage.status === 'success' ? (
        <div>
          {loremAboutPage.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div
            onClick={() => {
              navigator.clipboard.writeText(loremAboutPage.data.join(''));
            }}
            className='copy'
          >
            <button>Copy all</button>
            <figure className={`${theme}_theme_color`}>{icons.copy}</figure>
          </div>
        </div>
      ) : loremAboutPage.status === 'error' ||
        loremAboutPage.status === 'base' ? (
        <p>
          Unable to connect to the internet. check your network and try again...
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default About;
