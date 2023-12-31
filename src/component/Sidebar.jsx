/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon">
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon"/> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillArchiveFill className="icon"/> Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGrid3X2GapFill className="icon"/> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon"/> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            < BsMenuButtonWideFill  className="icon"/> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <  BsFillGearFill  className="icon"/> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}
