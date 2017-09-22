import  React, { Component, PropTypes} from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

export default class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{uri: 'https://player.vimeo.com/video/234418370?autoplay=1'}}
        />
      </View>
    )
  }
}