import axios from 'axios';
import { selectFields } from "../selectors/selectFields";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const bestStoriesUrl = `${baseUrl}/beststories.json`;
export const askStoriesUrl = `${baseUrl}/beststories.json`;
export const showStoriesUrl = `${baseUrl}/beststories.json`;
export const jobStoriesUrl = `${baseUrl}/beststories.json`;
export const storyUrl = `${baseUrl}/item/`;

export const getStory = async (storyId) => {
    const result = await axios
        .get(`${storyUrl + storyId}.json`)
        .then(({ data }) => data && selectFields(data));
    return result;
}

export const getNewStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data);
    return result;
}

export const getTopStoryIds = async () => {
    const result = await axios.get(topStoriesUrl).then(({ data }) => data);
    return result;
}

export const getBestStoryIds = async () => {
    const result = await axios.get(bestStoriesUrl).then(({ data }) => data);
    return result;
}