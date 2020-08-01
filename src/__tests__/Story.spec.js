import React from 'react';
import { act } from 'react-dom/test-utils';
import { Story } from '../components/Story';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { singularStory } from '../fixtures';
import { getStory } from '../services/hackerNewsApi';
import { STORY_INCREMENT } from '../constants/index';

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../services/hackerNewsApi', () => ({
    getStory: jest.fn(),
}));

test('renders the story component with content', async() => {
    getStory.mockImplementation(() => Promise.resolve(singularStory));

    const { getByText, queryByTestId, getByTestId } = render(<Story storyId="1" />);
    await waitForElement(() => [
        expect(getByTestId("story")).toBeTruthy(),
        expect(getByText("Tarnished: Google Responds")).toBeTruthy(),
        expect(queryByTestId("story-by").textContent).toEqual("By: Devarsi Rawal")
    ]);
});