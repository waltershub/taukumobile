import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import topiclistHook from '../hooks/topiclistHook';

const TopicFlatlist = ({apiUrl}) => {
  const [topics, getTopics, isLoading] = topiclistHook(apiUrl);

  return (
    <FlatList
      style={{flex: 1}}
      contentContainerStyle={{
        marginHorizontal: scale(10),
      }}
      data={topics}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={item => item._id}
      initialNumToRender={5}
      renderItem={TopicRenderItem}
      ListFooterComponent={<View style={{height: 20}} />}
    />
  );
};

const TopicRenderItem = ({item}) => (
  <View style={styles.topicRenderItemContainer}>
    <Avatar user={item.user[0]} />
    <View style={styles.topicCardContainer}>
      <Text>{item.argument}</Text>
      <View style={styles.yesNoRow}>
        <YesNoButton stance="yes" voteCount={item.upvoteCount}></YesNoButton>
        <YesNoButton stance="no" voteCount={item.downvoteCount}></YesNoButton>
      </View>
    </View>
  </View>
);

const YesNoButton = ({stance, voteCount}) => {
  const types = {
    yes: {
      title: 'YES',
      background: '#e8f1ff',
      color: '#1774ff',
    },
    no: {
      title: 'NO',
      background: '#ffe8e8',
      color: '#ff0404',
    },
  };

  const titleAndCount = `${types[stance].title} (${voteCount})`;

  return (
    <View
      style={[
        styles.yesNoButtonContainer,
        {backgroundColor: types[stance].background},
      ]}>
      <Text style={[styles.yesNoText, {color: types[stance].color}]}>
        {titleAndCount}
      </Text>
    </View>
  );
};
const Avatar = ({user}) => {
  return (
    <View style={styles.avatarContainer}>
      {user.profilePicture ? (
        <Image source={{uri: user.profilePicture}} style={styles.avatarImage} />
      ) : (
        <Text style={{color: '#fff'}}>{user.name[0].toUpperCase()}</Text>
      )}
    </View>
  );
};

const ListEmptyComponent = () => (
  <View style={styles.listEmptyComponentContainer}>
    <Text style={styles.listEmptyTextStyle}>loading</Text>
    <ActivityIndicator size="small" color="#000" />
  </View>
);

export default TopicFlatlist;

const styles = StyleSheet.create({
  listEmptyComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: '20%',
  },
  listEmptyTextStyle: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  topicRenderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(25),
  },
  topicCardContainer: {
    borderRadius: scale(5),
    backgroundColor: '#FFF',
    shadowColor: '#000',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    elevation: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(250),
    height: verticalScale(150),
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  yesNoButtonContainer: {
    height: verticalScale(20),
    width: scale(50),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  yesNoText: {fontSize: moderateScale(10), fontWeight: 'bold'},
  avatarContainer: {
    backgroundColor: '#0047AB',
    height: scale(20),
    width: scale(20),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarImage: {
    height: scale(20),
    width: scale(20),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesNoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});
