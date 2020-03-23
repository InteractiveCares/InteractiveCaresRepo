import { styled } from '@material-ui/core';
import React from 'react';
import Controls from './Controls/Controls';
import LocalVideoPreview from './LocalVideoPreview/LocalVideoPreview';
import MenuBar from './MenuBar/MenuBar';
import ReconnectingNotification from './ReconnectingNotification/ReconnectingNotification';
import Room from './Room/Room';
import useRoomState from '../hooks/useRoomState/useRoomState';
import '../App.scss';
import '../types';
import { render } from '@testing-library/react';

class video extends React.Component {
  roomState = useRoomState();
  render() {
    return (
      <Container>
        <MenuBar />
        <Main>
          {this.roomState === 'disconnected' ? <LocalVideoPreview /> : <Room />}
          <Controls />
        </Main>
        <ReconnectingNotification />
      </Container>
    );
  }
}
export default video;
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const Main = styled('main')({
  height: '100%',
  position: 'relative',
});
