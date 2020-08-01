import React, { useEffect, useState, memos } from 'react';
import { getStoryIds } from '../services/hackerNewsApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    //TODO: Add a try-catch
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
  
  
    return(
        <div>
            <GlobalStyle />
            <StoriesContainerWrapper data-testid="stories-container">
                <h1>Hacker News Stories</h1> 
                {storyIds.slice(0,count).map(storyId => (<Story key={storyId} storyId={storyId} />))}
            </StoriesContainerWrapper>
        </div>
    ); 
  };