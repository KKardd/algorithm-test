function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
    
  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    const cityName = cities.shift().toLowerCase();
    if(cache.indexOf(cityName) !== -1){
      cache.splice(cache.indexOf(cityName), 1);
      cache.push(cityName);
      answer++;
    }else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(cityName);
      answer += 5;
    }
  }
  return answer;
}