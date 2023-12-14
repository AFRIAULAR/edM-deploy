import activityData from '@/data/activityData.json'

export const getMonth = (dateText) => {
  const months = {
    'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April', 'May': 'May', 'Jun': 'June',
    'Jul': 'July', 'Aug': 'August', 'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December'
  };

  const monthAbbr = dateText.slice(0, 3);
  return months[monthAbbr];
};

export const getYear = (dateText) => {
  const year = dateText.split(' ')[2];
  return year;
};

export const monthTitle = (index) => {
  const cardInfo = activityData.cardInfo;

  if (index === 0) {
    return true;
  } else {
    const currentMonth = getMonth(cardInfo[index].dateText);
    const prevMonth = getMonth(cardInfo[index - 1].dateText);
    return currentMonth !== prevMonth;
  }
};