export default function (dateTime) {
  const date = new Date(dateTime * 1000);
  let dataValues2 = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  dataValues2 = dataValues2.toString();
  return dataValues2;
}
