import moment from 'moment';

export const formatDate = (date: string) => {
  return moment(new Date(date)).format('MMMM Do, YYYY');
}