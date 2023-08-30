import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { UserCard } from '../components/UserCard';
import { Icon2 } from '../icons/Icon2';

export const HomepageDesktop = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.homepageDesktop}>
      <UserCard
        description="Sebastian creates circles and squares that actually make you want to interact with them."
        primaryButton={<Icon2 style={styles.nameArrowRight} />}
        size="large"
        username="Sebastian"
      />
      <UserCard
        description="John creates circles and squares that actually make you want to interact with them."
        primaryButton={<Icon2 className="name-arrowright" />}
        primaryButtonText="Buy"
        size="large"
        userThumbnailUser="bob"
        username="John"
      />
      <UserCard
        description="Oliver creates circles and squares that actually make you want to interact with them."
        primaryButtonShowIcon={false}
        primaryButtonText="Discover"
        size="large"
        userThumbnailUser="david"
        username="Oliver"
      />
      <UserCard
        description="Sarah creates circles and squares that actually make you want to interact with them."
        primaryButton={<Icon2 className="name-arrowright" />}
        primaryButtonText="Get Started"
        size="small"
        userThumbnailUser="alicia"
        username="Sarah"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homepageDesktop: {
    alignItems: 'flex-start',
    backgroundColor: '#3d3d3d',
    border: 'none',
    display: 'flex',
    gap: 32,
    justifyContent: 'space-between',
    paddingVertical: 41,
    paddingHorizontal: 39,
    position: 'relative',
    // width: '100%',
  },
  nameArrowRight: {
    height: 20,
    marginBottom: -2,
    marginTop: -2,
    position: 'relative',
    width: 20,
  },
});
