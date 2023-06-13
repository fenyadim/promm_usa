'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import styles from './Header.module.scss';
import ImageBtn from '../ImageBtn/ImageBtn';

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const searchRef = useRef<any>(null);
  const btnSearchRef = useRef<any>(null);

  const topLinks = [
    { slug: 'payment', title: 'Payment and delivery' },
    { slug: 'blog', title: 'Blog' },
    { slug: 'company', title: 'Company' },
    { slug: 'help', title: 'Help 24/7' },
    { slug: 'media-about', title: 'The media about Us' },
    { slug: 'contact', title: 'Contact' },
  ];

  useEffect(() => {
    const onClick: EventListener = (e) => {
      if (
        btnSearchRef.current &&
        !btnSearchRef.current.contains(e.target) &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [searchRef, btnSearchRef]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav_top}>
        <ul className={styles.nav_top_left}>
          {topLinks.map(({ slug, title }) => (
            <li key={slug}>
              <Link href="#" className="nav__top-link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <p>5261 W Imperial Hwy, Los Angeles, CA 90045, USA</p>
      </nav>
      <input
        ref={searchRef}
        type="text"
        className={styles.header_input}
        style={showSearch ? { display: 'block', width: '100%' } : { display: 'none' }}
      />
      <div
        className={styles.header_middle}
        style={!showSearch ? { display: 'grid' } : { display: 'none' }}>
        <Link href="#" className={styles.logo_link}>
          <Image
            src="/image/header/logo.png"
            alt="Promminer"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <div className="dropdown">
          <button onClick={toggleMenu} className={styles.catalog_btn}>
            <Image
              src="/image/header/burger-menu-svgrepo-com (2).svg"
              alt="catalog"
              width={16}
              height={16}
            />
            Catalog
          </button>
        </div>
        {innerWidth < 860 ? (
          <ImageBtn
            ref={btnSearchRef}
            title="Search"
            srcImg="/image/header/search_black.svg"
            onClick={toggleSearch}
          />
        ) : (
          <input type="text" className={styles.header_input} />
        )}
        <div className={styles.header_right}>
          <ImageBtn title="Basket" srcImg="/image/header/basket_icon_160414.svg" />

          {innerWidth > 860 && (
            <>
              <ImageBtn
                title="Favorites"
                srcImg="/image/header/star-favorite-1498-svgrepo-com.svg"
              />

              <ImageBtn
                title="Order a call"
                srcImg="/image/header/auricular-phone-symbol-in-a-circle_icon-icons.com_56570.svg"
              />
            </>
          )}
        </div>
      </div>

      <nav>
        <ul className={styles.nav_bot}>
          <li>
            <Link href="">Investing in mining</Link>
          </li>
          <li>
            <Link href="">Turnkey Mining</Link>
          </li>
          <li>
            <Link href="">Data Center</Link>
          </li>
          <li>
            <Link href="">Equipment leasing</Link>
          </li>
          <li>
            <Link href="">Ready-made business</Link>
          </li>
        </ul>
      </nav>
      {/* <div className="header__mobile">
        <Link href="#" className="header__mobile-logo-link">
          <img src="../../public/image/header/logo.png" alt="" className="header__mobile-logo" />
        </Link>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <Link className="menu__item" href="#">
                Catalog
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                Investing in mining
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                Turnkey Mining
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                Ready-made business
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                About company
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                Equipment leasing
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                Service
              </Link>
            </li>
            <li>
              <Link className="menu__item" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__mobile-bot">
        <div className="dropdown__mobile">
          <button className="dropbtn__mobile">
            <img
              src="../../public/image/header/burger-menu-svgrepo-com (3).svg"
              alt="catalog"
              className="dropbtn__btn__mobile"
            />
            <p className="dropbtn__btn-heading__mobile">Catalog</p>
          </button>
          <div id="myDropdown__mobile" className="dropdown-content__mobile">
            <div className="catalog__list__mobile">
              <div className="catalog__container__mobile">
                <Link href="#">
                  Asic Miner
                </Link>
                <Link href="#">Bitmain</Link>
                <Link href="#">Whatsminer</Link>
                <Link href="#">Innosilicon</Link>
                <Link href="#">Canaan</Link>
                <Link href="#">Goldshell</Link>
                <Link href="#">iPollo</Link>
              </div>
              <div className="catalog__container__mobile">
                <Link href="#">
                  Mining containers
                </Link>
                <Link href="#">PM Small Container</Link>
                <Link href="#">PM Start container</Link>
                <Link href="#">PM Medium container</Link>
                <Link href="#">PM Optimal container</Link>
                <Link href="#">PM Big container</Link>
              </div>
              <div className="catalog__container__mobile">
                <Link href="#">
                  Ready-made business
                </Link>
                <Link href="#">Ready-made business-START</Link>
                <Link href="#">Ready-made business-SMART</Link>
                <Link href="#">Ready-made business-MEDIUM</Link>
                <Link href="#">Ready-made business-BIG</Link>
                <Link href="#">Ready-made business-MAX</Link>
                <Link href="#">Ready-made business-VIP</Link>
                <Link href="#">Ready-made business-PREMIUM</Link>
                <Link href="#">Ready-made business-TO THE MOON</Link>
                <Link href="#">Ready-made business-STANDART</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header__right__mobile">
          <ul className="header__right-list__mobile">
            <li className="header__rigth-item__mobile">
              <Link href="#" className="header__rigt-basket__mobile">
                <img src="../../public/image/header/basket_icon_160414.svg" alt="" width="17px" />
                <p className="header__rigt-heading__mobile">Basket</p>
              </Link>
            </li>
            <li className="header__rigth-item__mobile">
              <Link href="#" className="header__rigt-favorites__mobile">
                <img
                  src="../../public/image/header/star-favorite-1498-svgrepo-com.svg"
                  alt=""
                  width="17px"
                />
                <p className="header__rigt-heading__mobile">Favorites</p>
              </Link>
            </li>
            <li className="header__rigth-item__mobile">
              <Link href="#" className="header__rigt-call__mobile">
                <img
                  src="../../public/image/header/auricular-phone-symbol-in-a-circle_icon-icons.com_56570.svg"
                  alt=""
                  width="17px"
                  className="call_call"
                />
                <p className="header__rigt-heading__mobile">Order a call</p>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      <div
        className={styles.dropdown_container}
        style={showMenu ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}>
        <div>
          <Link href="#">Asic Miner</Link>
          <Link href="#">Bitmain</Link>
          <Link href="#">Whatsminer</Link>
          <Link href="#">Innosilicon</Link>
          <Link href="#">Canaan</Link>
          <Link href="#">Goldshell</Link>
          <Link href="#">iPollo</Link>
        </div>
        <div>
          <Link href="#">Mining containers</Link>
          <Link href="#">PM Small Container</Link>
          <Link href="#">PM Start container</Link>
          <Link href="#">PM Medium container</Link>
          <Link href="#">PM Optimal container</Link>
          <Link href="#">PM Big container</Link>
        </div>
        <div>
          <Link href="#">Ready-made business</Link>
          <Link href="#">Ready-made business-START</Link>
          <Link href="#">Ready-made business-SMART</Link>
          <Link href="#">Ready-made business-MEDIUM</Link>
          <Link href="#">Ready-made business-BIG</Link>
          <Link href="#">Ready-made business-MAX</Link>
          <Link href="#">Ready-made business-VIP</Link>
          <Link href="#">Ready-made business-PREMIUM</Link>
          <Link href="#">Ready-made business-TO THE MOON</Link>
          <Link href="#">Ready-made business-STANDART</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
