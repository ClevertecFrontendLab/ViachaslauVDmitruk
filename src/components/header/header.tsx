/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { burgeMenuSelector, profileMenuSelector } from '../../selectors';
import { closeBurgerMenu, openBurgerMenu } from '../../store/burger-menu';
import { closeProfileMenu, openProfileMenu } from '../../store/profile-menu';
import { useAppDispatch, useAppSelector } from '../hooks';

import avatar from './assets/avatar.png';
import logo from './assets/logo.png';

import styles from './header.module.scss';
import { ProfileMenu } from '../profile-menu';

export const Header = () => {
  const { activeBurger } = useAppSelector(burgeMenuSelector);
  const { isOpenProfileMenu } = useAppSelector(profileMenuSelector);

  const dispatch = useAppDispatch();

  function ToggleMenu() {
    if (activeBurger) {
      dispatch(closeBurgerMenu());
    } else {
      dispatch(openBurgerMenu());
    }
  }

  const ToggleProfileMenu = () => {
    if (isOpenProfileMenu) {
      dispatch(closeProfileMenu());
    } else {
      dispatch(openProfileMenu());
    }
  };

  useEffect(() => {
    if (activeBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeBurger]);

  return (
    <header className={styles.container} onClick={() => dispatch(closeBurgerMenu())}>
      <div className={styles.logoTitle}>
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='img' />
          <span className={styles.logoName}>Cleverland</span>
        </Link>
        <button
          type='button'
          className={classNames(styles.burger, { [styles.visible]: activeBurger })}
          onClick={(e) => {
            e.stopPropagation();
            ToggleMenu();
          }}
          data-test-id='button-burger'
        >
          <span> </span>
        </button>
        <div className={styles.title}>Библиотека</div>
      </div>
      <div className={styles.account} onClick={ToggleProfileMenu}>
        <span className={styles.accountName}>Привет, Иван!</span>
        <img src={avatar} alt='img' />
      </div>
      <ProfileMenu />
    </header>
  );
};
