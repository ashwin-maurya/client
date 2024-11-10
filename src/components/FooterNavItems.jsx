import React from 'react'
import "./FooterNavItems.css";
const FooterNavItems = ({name}) => {
  return (
    <li>
        <ion-icon name="chevron-forward-outline"></ion-icon>{' '}
        <a href="#">{name} </a>
    </li>
  );
}

export default FooterNavItems;
