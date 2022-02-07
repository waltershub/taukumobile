import * as React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import TopicFlatlist from './topicFlatlist';

const TrendingTab = () => <TopicFlatlist apiUrl="api/topics/trendingtopics" />;

const FeaturedTab = () => <TopicFlatlist apiUrl="/api/topics/featuredtopics" />;

const TopTab = () => <TopicFlatlist apiUrl="/api/topics/toptopics" />;

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#000'}}
    style={{backgroundColor: '#FFF'}}
    activeColor="#000"
    inactiveColor="#6d6d6d"
  />
);

const renderScene = SceneMap({
  Trending: TrendingTab,
  Featured: FeaturedTab,
  Top: TopTab,
});

const TopicTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Trending', title: 'Trending'},
    {key: 'Featured', title: 'Featured'},
    {key: 'Top', title: 'Top'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{flex: 1}}
    />
  );
};

export default TopicTabs;
