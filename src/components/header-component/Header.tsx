import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './Header.scss';
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <Link to="/" className="logo">
        coursebase.edu
      </Link>

      <ul className={open ? 'navbar-overlay' : 'navbar'}>
        <Link
          onClick={() => setOpen(false)}
          className="nav-item"
          to="/articles"
        >
          Article
        </Link>
        <Link onClick={() => setOpen(false)} className="nav-item" to="/courses">
          Courses
        </Link>

        <Link onClick={() => setOpen(false)} className="nav-item" to="/guides">
          Guides
        </Link>

        <Link onClick={() => setOpen(false)} className="nav-item" to="/books">
          Books
        </Link>
      </ul>

      <Button
        onClick={() => setOpen(!open)}
        style={open ? openStyle : undefined}
        className="navbar-button"
      >
        {open ? 'Close' : 'Menu'}
      </Button>
    </div>
  );
};
const openStyle = {
  position: 'fixed',
  display: 'block',
  zIndex: 1001,
  top: '1.5rem',
  right: 0,
  boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
} as React.CSSProperties;

export default Header;
