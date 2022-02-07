import {useEffect, useState} from 'react';

const topiclistHook = apiUrl => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getTopics();
  }, [apiUrl]);

  const getTopics = async () => {
    try {
      const toptopicsRes = await fetch(`https://www.taeku.app/${apiUrl}`);
      const topTopicsJson = await toptopicsRes.json();

      console.log('top topics', topTopicsJson);
      setTopics(topTopicsJson);
    } catch (error) {
      console.log('error', error);
    }
    setIsloading(false);
  };
  return [topics, getTopics, isLoading];
};

export default topiclistHook;
