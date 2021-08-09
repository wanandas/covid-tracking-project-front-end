export async function fetchData() {
  try {
    const data = await fetch(
      "https://static.easysunday.com/covid-19/getTodayCases.json"
    ).then((res) => res.json());
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}
