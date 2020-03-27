import React, { Component } from 'react';
import fire from '../configure/Fire';
import App from '../App';
import { render } from 'react-dom';
import Test from '../Test';
import { Route, Router } from 'react-router-dom';

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
      {/* <button type="button" className="btn">
        Logout
      </button>
      <button type="button" className="btn">
        Discussion Forum
      </button>
      <button onClick={App} type="button" className="btn">
        Live Session
      </button> */}
      <Route exact path="/" component={App} />
    </div>
  );
}
//window.location.href='\components\video.tsx'
