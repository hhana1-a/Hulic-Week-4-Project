export const formatRating = (rating) => {
    const roundedRating = Math.round(rating);
    return `${roundedRating}/10 ⭐`;
  };

export const limitDescription = (description, wordLimit = 50) => {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  

  export const getYearFromDate = (dateString) => {
    if (!dateString) return '';
    const [year] = dateString.split('-');
    return year;
  };