import React, { Component } from 'react';
import fire from '../configure/Fire';

class Home extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  video() {
    return;
  }
  render() {
    return (
      <div>
        <h1>Welcome to Interactive Cares</h1>
        <button onClick={this.logout} type="button" className="btn">
          Logout
        </button>
        <button type="button" className="btn">
          Discussion Forum
        </button>
        <button onClick={this.video} type="button" className="btn">
          Live Session
        </button>
      </div>
    );
  }
}
//window.location.href='\components\video.tsx'
export default Home;
