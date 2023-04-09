import { fetchNews } from '../common/fetchNews';
import { spinner } from '../common/libraries';
import {
  renderNewsCards,
  savePopularData,
  addClassesForCoincidencesMarkupAndStorage,
} from '../common/commonFunctions';
import { paginationByQuery } from './pagination';

onLoad();

async function onLoad() {
  spinner.spin(document.body);
  try {
    const response = await fetchNews.fetchNewsByPopular();
    fetchNews.setHits(response.data.num_results);
    savePopularData(response.data.results);
    renderNewsCards();
    paginationByQuery();
    fetchNews.setNodeChild(document.querySelectorAll('.news-card'));
    fetchNews.setIsUrlRequest(true);
    addClassesForCoincidencesMarkupAndStorage();
  } catch (error) {
    console.log(error);
    spinner.stop();
  }
  spinner.stop();
}
