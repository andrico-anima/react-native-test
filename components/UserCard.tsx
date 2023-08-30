import { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { UserThumbnail } from './UserThumbnail';
import { PrimaryButton } from './PrimaryButton';
import { convertToCamelCase } from '../utilities/convertToCamelCase';

export const UserCard = ({
  userThumbnailUser = 'sebastian',
  size = 'medium',
  description = "Sebastian creates circles and squares that actually make you want to interact with them.",
  username = "User Name",
  primaryButtonText = "Get Started",
  primaryButtonShowIcon,
}) => {
  const cardClass = convertToCamelCase('size', size);
  const socialIconsClass = convertToCamelCase('textSocialIconsSize', size);

  return (
    <View style={[styles.userCard, styles[cardClass]]}>
      {["large", "medium"].includes(size) ? (
        <Fragment>
          <UserThumbnail size={size === 'medium' ? 'large' : 'huge'} user={userThumbnailUser} style={`${size === 'medium' ? styles.userThumbnailInstance : styles.userThumbnailClass}`} />
          <View style={[styles[socialIconsClass], styles.textSocialIcons]}>
            <Text style={styles.title}>{username}</Text>
            <View style={styles.titleDescription}>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
          <PrimaryButton showIcon={primaryButtonShowIcon} stateProp="default" text={primaryButtonText} type="primary" />
        </Fragment>
      ) : null}
      {size === 'small' ? <Fragment>
        <View style={styles.div}>
          <View style={styles.userNameThumbnail}>
            <UserThumbnail size="small" user="sebastian" style={styles.userThumbnailInstance} />
            <Text style={styles.userName}>{username}</Text>
          </View>
          <Text style={styles.textWrapper}>{description}</Text>
        </View>
        <PrimaryButton style={styles.primaryButtonInstance} stateProp="default" text="Get Started" type="primary" />
      </Fragment> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  userCard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    flexDirection: 'column',
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    width: 240,
  },
  userThumbnailInstance: {
    position: 'relative',
  },
  userThumbnailClass: {
    alignSelf: 'stretch',
    position: 'relative',
    width: '100%',
  },
  textSocialIcons: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#d7d7d7',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  titleDescription: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'column',
    gap: 6,
    width: '100%',
  },
  title: {
    alignSelf: 'stretch',
    color: '#000000', // Update to the correct color value
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 23.4,
    marginTop: -1,
    textAlign: 'center',
  },
  description: {
    alignSelf: 'stretch',
    color: '#2d2d2d',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
    textAlign: 'center',
  },
  div: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
  userNameThumbnail: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  userName: {
    color: '#000000', // Update to the correct color value
    flex: 1,
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 23.4,
  },
  textWrapper: {
    alignSelf: 'stretch',
    color: '#2d2d2d',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
  },
  primaryButtonInstance: {
    alignSelf: 'stretch',
    width: '100%',
  },
  icon2: {
    height: 20,
    marginBottom: -2,
    marginTop: -2,
    position: 'relative',
    width: 20,
  },
  sizeLarge: {
    overflow: 'hidden',
    paddingHorizontal: 0,
    paddingBottom: 16,
    paddingTop: 0,
  },
  sizeMedium: {
    paddingVertical: 16,
    paddingHorizontal: 0,
  },
  sizeSmall: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  textSocialIconsSizeLarge: {
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  textSocialIconsSizeMedium: {
    gap: 20,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  textSocialIconsSizeSmall: {
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});
