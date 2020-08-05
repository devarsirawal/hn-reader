import React, { useEffect, useState } from 'react';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';

export const StoriesContainer = ({ storiesCall }) => {
    const [storyIds, setStoryIds] = useState([]);

    //TODO: Add a try-catch
    useEffect(() => {
      storiesCall().then(data => setStoryIds(data));
    }, []);

    return(
        <div>
            <GlobalStyle />
            <StoriesContainerWrapper data-testid="stories-container">
                {storyIds.map(storyId => (<Story key={storyId} storyId={storyId} />))}
            </StoriesContainerWrapper>
        </div>
    ); 
  };