import { StyleSheet, ImageBackground, View } from 'react-native';

export const UserThumbnail = ({ size, user, style }) => {
  return (
    <ImageBackground style={[styles[size]]} imageStyle={[styles[size]]} source={styles[user].backgroundImage} resizeMode='cover' >
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  large: {
    borderRadius: 88.24,
    height: 150,
    width: 150,
  },
  small: {
    borderRadius: 23.53,
    height: 40,
    width: 40,
  },
  huge: {
    height: 200,
    width: 240,
  },
  sarah: {
    backgroundImage: { uri: 'https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/sarah@2x.png' },
  },
  laura: {
    backgroundImage: { uri: 'https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/laura-1@2x.png' },
  },
  bob: {
    backgroundImage: { uri: 'https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/bob@2x.png' },
  },
  sebastian: {
    backgroundImage: { uri: 'https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/sebastian-6@2x.png' },
  },
  david: {
    backgroundImage: { uri: 'https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/david-3@2x.png' },
  },
  alicia: {
    backgroundImage: { uri: 'https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/alicia@2x.png' },
  },
});

