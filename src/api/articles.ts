import { Article } from '../types/Article';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

export const getArticles = async (): Promise<Article[]> => {
  const data = await fetch(BASE_URL + '/articles');

  return data.json();
}