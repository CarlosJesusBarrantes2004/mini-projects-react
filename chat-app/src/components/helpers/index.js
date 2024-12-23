export const formatDate = (dateObject) => {
  const date = new Date(dateObject?.seconds * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}`;

  const options = {
    month: 'long',
    day: 'numeric',
  };

  const formatDate = date.toLocaleDateString('en-US', options);
  return `${formatDate} - ${time}`;
};
