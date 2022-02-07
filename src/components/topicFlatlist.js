import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import topiclistHook from '../hooks/topiclistHook';

const TopicFlatlist = ({apiUrl}) => {
  const [topics, getTopics, isLoading] = topiclistHook(apiUrl);

  return (
    <FlatList
      contentContainerStyle={{flex: 1}}
      data={topics}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={item => item._id}
      initialNumToRender={5}
      renderItem={TopicRenderItem}
    />
  );
};

const TopicRenderItem = ({item}) => (
  <View>
    <Text>{item.argument}</Text>
  </View>
);

const ListEmptyComponent = () => (
  <View style={styles.listEmptyComponentContainer}>
    <Text style={styles.listEmptyTextStyle}>loading</Text>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

export default TopicFlatlist;

const styles = StyleSheet.create({
  listEmptyComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  listEmptyTextStyle: {fontSize: moderateScale(15), fontWeight: 'bold'},
});
let sampleTopics = [
  {
    _id: '61f733151b9fa800097e9f4a',
    argument: 'Fish sticks are not only for kids',
    links: [],
    authorId: '616f7d5a255e00000a03d525',
    createdDate: 1643590421408,
    likes: [],
    parentId: null,
    stanceOnParent: null,
    featured: null,
    upvoteCount: 1,
    downvoteCount: 0,
    changedMindCount: 0,
    postAuthorId: null,
    user: [{_id: '616f7d5a255e00000a03d525', name: 'mrosens1'}],
  },
  {
    _id: '60f778d06600920008a5c512',
    argument: "They can never win so what's the point? ",
    links: [],
    authorId: '60f32c461a822500084d16c0',
    createdDate: 1626831056642,
    likes: [],
    parentId: '60e7390fcdc1980007279347',
    stanceOnParent: 'for',
    featured: null,
    upvoteCount: 0,
    downvoteCount: 1,
    changedMindCount: 0,
    postAuthorId: '5f9e3e97ad546ad461d22b71',
    user: [{_id: '60f32c461a822500084d16c0', name: 'robsnewsroom@gmail.com'}],
  },
  {
    _id: '60febab65f2d2b0009659387',
    argument: 'Should every law have an expiration date like the Brady Bill?',
    links: [],
    authorId: '60feb4ca200eba0008c308dd',
    createdDate: 1627306678310,
    likes: [],
    parentId: null,
    stanceOnParent: null,
    featured: null,
    upvoteCount: 2,
    downvoteCount: 1,
    changedMindCount: 0,
    postAuthorId: null,
    user: [
      {
        _id: '60feb4ca200eba0008c308dd',
        name: '757Sean',
        bio: 'IT nerd. Former radio guy. ',
        profilePicture:
          'https://res.cloudinary.com/duur67kh8/image/upload/v1631017086/w1fw8egad8esxb32xbej.jpg',
      },
    ],
  },
  {
    _id: '614e2f6e6084ca000923d901',
    argument: 'no murder for instance ',
    links: [],
    authorId: '5f9e3e97ad546ad461d22b71',
    createdDate: 1632513902133,
    likes: [],
    parentId: '60febab65f2d2b0009659387',
    stanceOnParent: 'for',
    featured: null,
    upvoteCount: 1,
    downvoteCount: 0,
    changedMindCount: 0,
    postAuthorId: '60feb4ca200eba0008c308dd',
    user: [
      {
        _id: '5f9e3e97ad546ad461d22b71',
        name: 'walter',
        bio: 'coolest dev',
        profilePicture:
          'https://res.cloudinary.com/duur67kh8/image/upload/v1604817117/bfveqif4i7ducmjtcdb9.png',
        'featured ': true,
        admin: true,
      },
    ],
  },
  {
    _id: '60feb7b25f2d2b0009659386',
    argument: '“Cure”is the wrong term. It might be an effective treatment. ',
    links: [],
    authorId: '60feb4ca200eba0008c308dd',
    createdDate: 1627305906691,
    likes: [],
    parentId: '60f32c7499d2950008165b90',
    stanceOnParent: 'alt',
    featured: null,
    upvoteCount: 1,
    downvoteCount: 0,
    changedMindCount: 0,
    postAuthorId: '60f32c461a822500084d16c0',
    user: [
      {
        _id: '60feb4ca200eba0008c308dd',
        name: '757Sean',
        bio: 'IT nerd. Former radio guy. ',
        profilePicture:
          'https://res.cloudinary.com/duur67kh8/image/upload/v1631017086/w1fw8egad8esxb32xbej.jpg',
      },
    ],
  },
  {
    _id: '60e7390fcdc1980007279347',
    argument: 'Should libertarians try win elections ',
    links: [],
    authorId: '5f9e3e97ad546ad461d22b71',
    createdDate: 1625766159188,
    likes: [],
    parentId: null,
    stanceOnParent: null,
    featured: null,
    upvoteCount: 9,
    downvoteCount: 1,
    changedMindCount: 0,
    postAuthorId: null,
    user: [
      {
        _id: '5f9e3e97ad546ad461d22b71',
        name: 'walter',
        bio: 'coolest dev',
        profilePicture:
          'https://res.cloudinary.com/duur67kh8/image/upload/v1604817117/bfveqif4i7ducmjtcdb9.png',
        'featured ': true,
        admin: true,
      },
    ],
  },
  {
    _id: '61391d12e1052e0008c3cbee',
    argument:
      'Is fauci Guilty of a crime for Lying to congress about gain of function research? ',
    links: [
      {
        url: 'https://theintercept.com/2021/09/06/new-details-emerge-about-coronavirus-research-at-chinese-lab/',
      },
      {url: 'https://www.youtube.com/watch?v=2MndwrOzDvo'},
    ],
    authorId: '60f32c461a822500084d16c0',
    createdDate: 1631132946102,
    likes: [],
    parentId: null,
    stanceOnParent: null,
    featured: null,
    upvoteCount: 2,
    downvoteCount: 1,
    changedMindCount: 0,
    postAuthorId: null,
    user: [{_id: '60f32c461a822500084d16c0', name: 'robsnewsroom@gmail.com'}],
  },
  {
    _id: '60feb720e5b24a0008a60134',
    argument:
      'There’s value in having a party structure, maintaining ballot access. ',
    links: [],
    authorId: '60feb4ca200eba0008c308dd',
    createdDate: 1627305760055,
    likes: [],
    parentId: '60e7390fcdc1980007279347',
    stanceOnParent: 'for',
    featured: null,
    upvoteCount: 1,
    downvoteCount: 0,
    changedMindCount: 0,
    postAuthorId: '5f9e3e97ad546ad461d22b71',
    user: [
      {
        _id: '60feb4ca200eba0008c308dd',
        name: '757Sean',
        bio: 'IT nerd. Former radio guy. ',
        profilePicture:
          'https://res.cloudinary.com/duur67kh8/image/upload/v1631017086/w1fw8egad8esxb32xbej.jpg',
      },
    ],
  },
  {
    _id: '60f32c7499d2950008165b90',
    argument: 'Does Ivermectin help cure the Caronavirus?',
    links: [],
    authorId: '60f32c461a822500084d16c0',
    createdDate: 1626549364124,
    likes: [],
    parentId: null,
    stanceOnParent: null,
    featured: null,
    upvoteCount: 2,
    downvoteCount: 0,
    changedMindCount: 0,
    postAuthorId: null,
    user: [{_id: '60f32c461a822500084d16c0', name: 'robsnewsroom@gmail.com'}],
  },
];
