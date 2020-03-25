import { styled } from '@material-ui/core';
import React from 'react';
import '../App.scss';
import useRoomState from '../hooks/useRoomState/useRoomState';
import '../types';
import { VideoProvider } from '../components/VideoProvider';
import Controls from './Controls/Controls';
import LocalVideoPreview from './LocalVideoPreview/LocalVideoPreview';
import MenuBar from './MenuBar/MenuBar';
import ReconnectingNotification from './ReconnectingNotification/ReconnectingNotification';
import Room from './Room/Room';
import ErrorDialog from '../components/ErrorDialog/ErrorDialog';
import AppStateProvider, { useAppState } from '../state';
import '../types';

const connectionOptions = {
  bandwidthProfile: {
    video: {
      mode: 'collaboration',
      renderDimensions: {
        high: { height: 1080, width: 1920 },
        standard: { height: 90, width: 160 },
        low: { height: 90, width: 160 },
      },
    },
  },
  dominantSpeaker: true,
  maxAudioBitrate: 12000,
  networkQuality: { local: 1, remote: 1 },
  preferredVideoCodecs: [{ codec: 'VP8', simulcast: true }],
};

class video extends React.Component {
  //roomState = useRoomState();
  // constructor(props) {
  //super(props);
  //const { error, setError } = useAppState();
  // }
  render() {
    return (
      //<VideoProvider options={connectionOptions} onError={this.setError}>
      //<ErrorDialog dismissError={() => this.setError(null)} error={this.error} />
      <Container>
        <MenuBar />
        <Main>
          {this.roomState === 'disconnected' ? <LocalVideoPreview /> : <Room />}
          <Controls />
        </Main>
        <ReconnectingNotification />
      </Container>
      // </VideoProvider>
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
