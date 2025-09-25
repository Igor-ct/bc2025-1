const date = "20231001";
const time_period = "q";

const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/bank";
const url = new URL(baseUrl);

url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");

console.log(url.toString());