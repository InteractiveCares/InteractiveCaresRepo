import React, { Component } from 'react';
import fire from '../configure/Fire';
import App from '../App';
import { render } from 'react-dom';
import Test from '../Test';

export default function Home() {
  // constructor(props: Readonly<{}>) {
  //   super(props);
  //   this.logout = this.logout.bind(this);
  // }
  // logout() {
  //   fire.auth().signOut();
  // }
  // video() {
  //   return;
  // }

  return (
    <div>
      <h1>Welcome to Interactive Cares</h1>
      <button type="button" className="btn">
        Logout
      </button>
      <button type="button" className="btn">
        Discussion Forum
      </button>
      <button onClick={App} type="button" className="btn">
        Live Session
      </button>
    </div>
  );
}
//window.location.href='\components\video.tsx'
