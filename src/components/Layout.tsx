import React from 'react';
import { Menu } from './Menu';
import { Content } from './Content';
import { Nav } from './Nav';

export const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};
