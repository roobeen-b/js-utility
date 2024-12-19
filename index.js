class JSUtils {
  static chunk(array, size = 1) {
    let newArray = [];
    for (let i = 0; i < array.length; i += size) {
      const chunkArr = array.slice(i, size + i);
      newArray.push(chunkArr);
    }
    return newArray;
  }

  static compact(array) {
    let newArray = array.filter((item) => Boolean(item) === true);
    return newArray;
  }

  static compact(array, ...values) {
    for (let i = 0; i < values.length; i++) {
      array = array.concat(values[i]);
    }
    return array;
  }

  static drop(array, initialIndex = 1) {
    return array.slice(initialIndex, array.length);
  }

  static dropRight(array, dropCount = 1) {
    return array.slice(0, array.length - dropCount);
  }

  static fill(array, replaceBy, startIndex = 0, endIndex = array.length) {
    for (let i = startIndex; i < endIndex; i++) {
      array[i] = replaceBy;
    }
  }

  static flatten(array) {
    return [].concat(...array);
  }

  static intersection(...arrays) {
    if (arrays.length === 0) return [];

    const returnedArr = arrays.reduce((acc, currentArr) =>
      acc.filter((item) => currentArr.includes(item))
    );

    return [...new Set(returnedArr)];
  }

  static remove(array, predicate) {
    const filteredArr = array.filter(predicate);
    for (let i of filteredArr) {
      let n = array.indexOf(i);
      array.splice(n, 1);
    }

    return filteredArr;
  }

  static union(...arrays) {
    const allElemArr = [];
    for (let arr of arrays) {
      allElemArr.push(...arr);
    }

    return new Set(allElemArr);
  }

  static filter(collection, predicate) {
    return collection.filter(predicate);
  }

  static find(collection, predicate, fromIndex = 0) {
    let ans = collection.slice(fromIndex, collection.length);
    return ans.find(predicate);
  }

  static partition(collection, predicate) {
    let truthy = array.filter(predicate);
    let falsy = collection;

    for (let i of truthy) {
      let n = falsy.indexOf(i);
      falsy.splice(n, 1);
    }

    return [truthy, falsy];
  }

  static shuffle(collection) {
    function sh(array = collection, shuffled = [], length = collection.length) {
      if (length === 0) {
        return shuffled;
      }

      let rand = Math.floor(Math.random() * (length - 1));

      shuffled.push(array[rand]);

      length -= 1;

      array.splice(rand, 1);

      return sh(array, shuffled, length);
    }
    return sh();
  }

  static mean(array) {
    let sum = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return sum / array.length;
  }

  static max(array) {
    return Math.max(...array);
  }

  static max(array) {
    return Math.min(...array);
  }

  static sum(array) {
    let total = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return total;
  }

  static keys(object) {
    return Object.keys(object);
  }

  static values() {
    return Object.values(object);
  }

  static repeat(string = "", n = 1) {
    let repeated = "";

    for (let i = 0; i < n; i++) {
      repeated += string;
    }
    return repeated;
  }

  static split(string = "", separator, limit) {
    let spl = string.split(separator);
    let limited = [];

    if (limit === undefined) {
      return spl;
    } else {
      for (let i = 0; i < limit; i++) {
        limited.push(spl[i]);
      }
      return limited;
    }
  }
}

export default JSUtils;
