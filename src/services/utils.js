export const formatMoney = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertStringToTimestamp = (dateString) => {
    const [time, day] = dateString.split(' ');
    const [hours, minutes] = time.split(':');
    const [dayOfMonth, month, year] = day.split('/');
  
    const dateObject = new Date(year, month - 1, dayOfMonth, hours, minutes);
  
    const timestamp = dateObject.getTime();
    return timestamp;
  }