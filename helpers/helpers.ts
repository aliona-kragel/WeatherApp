
export const timeConverter = (time: number) => {
  const timeData = new Date(time * 1000);
  const convertedTime = timeData.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return convertedTime;
}

export const getCapitalizedStr = (str: string) => {
  const capitalizedStr = `${str.charAt(0).toUpperCase() + str.substring(1, str.length)}`;
  return capitalizedStr;
}