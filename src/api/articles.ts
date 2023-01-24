import { Article } from '../types/Article';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

export const getArticles = async (): Promise<Article[]> => {
  const data = await fetch(BASE_URL + '/articles');

  if (!data.ok) {
    throw new Error();
  }

  return data.json();
}

export const getArticle = async (id: number): Promise<Article> => {
  const data = await fetch(BASE_URL + `/articles/${id}`);

  if (!data.ok) {
    throw new Error();
  }

  return data.json();
}
