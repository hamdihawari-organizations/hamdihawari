import React, { useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { SidebarData, socialMediaicons } from '../Sidenav/SidebarData';

export const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [toggleItem, setToggleItem] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const changeColorHandle = () => {
    setChangeColor(!changeColor);
  };

  const toggleMenuHandle = (index) => {
    index !== 1 ? setMenuToggle(!menuToggle) : setToggleItem(!toggleItem);
  };

  return (
    <div className={style.menu}>
      <ul className={style.menuContent}>
        <Link
          variant="text"
          className={style.menuBtn}
          style={{ color: changeColor && menuToggle ? 'white' : 'black' }}
          onClick={() => {
            toggleMenuHandle();
            changeColorHandle();
          }}
        >
          Menu
        </Link>
        <div className={style.controll}>
          {menuToggle &&
            SidebarData.map((item, index) => (
              <div key={item.id}>
                <div className={style.row}>
                  <nav className={style.menuList}>
                    <span className={style.icons}>{item.icon}</span>
                    <Link
                      onClick={() => toggleMenuHandle(index)}
                      to={item.link}
                      className={style.title}
                    >
                      {item.title}
                    </Link>
                  </nav>
                </div>
                {toggleItem &&
                  item.item?.map((val) => (
                    <div key={val.id} className={style.row}>
                      <ul className={style.sidebarList}>
                        <nav className={style.menuList}>
                          <span className={style.icons}></span>
                          <Link
                            onClick={toggleMenuHandle}
                            to={val.link}
                            className={style.title}
                          >
                            {val.title}
                          </Link>
                        </nav>
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          <div className={style.media}>
            {menuToggle &&
              socialMediaicons.map((val) => (
                <Link key={val.id} to={val.link} className={style.mediaList}>
                  {val.icon}
                </Link>
              ))}
          </div>
        </div>
      </ul>
    </div>
  );
};
