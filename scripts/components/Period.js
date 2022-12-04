const Period = () => {
  const time = new Date().getMonth();

  switch (true) {
    case (time >= 0 && time <= 1 || time >= 11):
      return 'winter';
    case (time >= 2 && time <= 4):
      return 'spring';
    case (time >= 5 && time <= 7):
      return 'summer';
    case (time >= 8 && time <= 10):
      return 'autumn';
    default:
      return 'prog';
  }
  
}

export default Period;