export const showDate = () => {
    const myDate = new Date();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const year = myDate.getFullYear();
    const month = myDate.getMonth() + 1;
    const day = myDate.getDate();
    const date = (`${hours}:${minutes} ${day}-${month}-${year}`);
    return date;
  };
  