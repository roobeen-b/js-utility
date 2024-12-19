class JSUtils {
  /**
   * Splits an array into chunks of a specified size and returns them as a new array.
   *
   * @param {Array} array - The array to be split into chunks.
   * @param {number} [size=1] - The size of each chunk.
   * @returns {Array} A new array containing chunks of the specified size.
   */

  static chunk(array, size = 1) {
    let newArray = [];
    for (let i = 0; i < array.length; i += size) {
      const chunkArr = array.slice(i, size + i);
      newArray.push(chunkArr);
    }
    return newArray;
  }

  /**
   * Removes all falsy values from an array.
   *
   * @param {Array} array - The array to be filtered.
   * @returns {Array} A new array containing all the truthy values from the original array.
   */

  static compact(array) {
    let newArray = array.filter((item) => Boolean(item) === true);
    return newArray;
  }

  /**
   * Concatenates additional values to the array and returns the result.
   *
   * @param {Array} array - The original array.
   * @param {...Array} values - Additional arrays to concatenate to the original array.
   * @returns {Array} A new array containing the concatenated values.
   */

  static compact(array, ...values) {
    for (let i = 0; i < values.length; i++) {
      array = array.concat(values[i]);
    }
    return array;
  }

  /**
   * Removes the first n elements from an array and returns the rest.
   *
   * @param {Array} array - The array to be trimmed.
   * @param {number} [initialIndex=1] - The number of elements to remove from the beginning of the array.
   * @returns {Array} A new array containing the elements that were removed from the original array.
   */

  static drop(array, initialIndex = 1) {
    return array.slice(initialIndex, array.length);
  }

  /**
   * Removes the last n elements from an array and returns the rest.
   *
   * @param {Array} array - The array to be trimmed.
   * @param {number} [dropCount=1] - The number of elements to remove from the end of the array.
   * @returns {Array} A new array containing the elements that were removed from the original array.
   */
  static dropRight(array, dropCount = 1) {
    return array.slice(0, array.length - dropCount);
  }

  /**
   * Fills elements of array with value from start up to, but not including, end.
   * Note: This method mutates the original array.
   *
   * @param {Array} array - The array to be filled.
   * @param {*} replaceBy - The value to replace elements with.
   * @param {number} [startIndex=0] - The start position.
   * @param {number} [endIndex=array.length] - The end position.
   */
  static fill(array, replaceBy, startIndex = 0, endIndex = array.length) {
    for (let i = startIndex; i < endIndex; i++) {
      array[i] = replaceBy;
    }
  }

  /**
   * Flattens an array a single level deep.
   *
   * @param {Array} array - The array to be flattened.
   * @returns {Array} A new array containing the flattened elements.
   */
  static flatten(array) {
    return [].concat(...array);
  }

  /**
   * Returns an array of elements that are included in all of the provided arrays.
   *
   * @param {...Array} arrays - The arrays to compare.
   * @returns {Array} A new array containing the elements that are included in all arrays.
   */
  static intersection(...arrays) {
    if (arrays.length === 0) return [];

    const returnedArr = arrays.reduce((acc, currentArr) =>
      acc.filter((item) => currentArr.includes(item))
    );

    return [...new Set(returnedArr)];
  }

  /**
   * Removes elements from an array based on a predicate function.
   *
   * @param {Array} array - The array to be filtered.
   * @param {Function} predicate - The function to test each element of the array.
   * @returns {Array} A new array containing the elements that pass the predicate test.
   */
  static remove(array, predicate) {
    const filteredArr = array.filter(predicate);
    for (let i of filteredArr) {
      let n = array.indexOf(i);
      array.splice(n, 1);
    }

    return filteredArr;
  }

  /**
   * Finds the union of multiple arrays.
   *
   * @param {...Array} arrays - The arrays to find the union of.
   * @returns {Array} A new array containing the unique elements from all input arrays.
   */
  static union(...arrays) {
    const allElemArr = [];
    for (let arr of arrays) {
      allElemArr.push(...arr);
    }

    return new Set(allElemArr);
  }

  /**
   * Filters elements from an array based on a predicate function.
   *
   * @param {Array} collection - The array to be filtered.
   * @param {Function} predicate - The function to test each element of the array.
   * @returns {Array} A new array containing the elements that pass the predicate test.
   */
  static filter(collection, predicate) {
    return collection.filter(predicate);
  }

  /**
   * Iterates over elements of collection, returning the first element predicate returns truthy for.
   * The predicate is invoked with three arguments: (value, index, collection).
   *
   * @param {Array} collection - The array to search.
   * @param {Function} predicate - The function invoked per iteration.
   * @param {number} [fromIndex=0] - The index to search from.
   * @returns {*} The matched element, else undefined.
   */
  static find(collection, predicate, fromIndex = 0) {
    let ans = collection.slice(fromIndex, collection.length);
    return ans.find(predicate);
  }

  /**
   * Splits collection into two arrays, filtering the second array through the
   * provided predicate. The predicate is invoked with three arguments: (value,
   * index, collection).
   *
   * @param {Array} collection - The array to partition.
   * @param {Function} predicate - The function invoked per iteration.
   * @returns {Array[]} An array of two arrays. The first array contains the
   * elements that the predicate passed, and the second array contains the
   * elements that the predicate failed.
   */
  static partition(collection, predicate) {
    let truthy = array.filter(predicate);
    let falsy = collection;

    for (let i of truthy) {
      let n = falsy.indexOf(i);
      falsy.splice(n, 1);
    }

    return [truthy, falsy];
  }

  /**
   * Shuffles the elements of an array in place and returns the shuffled array.
   * A Fisher-Yates shuffle is used to ensure randomness.
   *
   * @param {Array} collection - The array to be shuffled.
   * @returns {Array} The shuffled array.
   */
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

  /**
   * Calculates the mean (average) of an array of numbers.
   *
   * @param {Array} array - The array of numbers.
   * @returns {number} The mean of the array.
   */
  static mean(array) {
    let sum = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return sum / array.length;
  }

  /**
   * Finds the maximum value in an array of numbers.
   *
   * @param {Array} array - The array of numbers.
   * @returns {number} The maximum value in the array.
   */
  static max(array) {
    return Math.max(...array);
  }

  /**
   * Finds the minimum value in an array of numbers.
   *
   * @param {Array} array - The array of numbers.
   * @returns {number} The minimum value in the array.
   */
  static min(array) {
    return Math.min(...array);
  }

  /**
   * Calculates the sum of an array of numbers.
   *
   * @param {Array} array - The array of numbers.
   * @returns {number} The sum of the array.
   */
  static sum(array) {
    let total = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return total;
  }

  /**
   * Returns an array of the object's own enumerable string keys.
   *
   * @param {Object} object - The object to retrieve keys from.
   * @returns {Array} An array of keys.
   */
  static keys(object) {
    return Object.keys(object);
  }

  /**
   * Returns an array of the object's own enumerable string property values.
   *
   * @param {Object} object - The object to retrieve values from.
   * @returns {Array} An array of values.
   */
  static values() {
    return Object.values(object);
  }

  /**
   * Repeats a string a specified number of times.
   *
   * @param {string} [string=""] - The string to repeat.
   * @param {number} [n=1] - The number of times to repeat the string.
   * @returns {string} The repeated string.
   */
  static repeat(string = "", n = 1) {
    let repeated = "";

    for (let i = 0; i < n; i++) {
      repeated += string;
    }
    return repeated;
  }

  /**
   * Splits a string into an array of substrings based on a separator.
   *
   * @param {string} [string=""] - The string to split.
   * @param {*} separator - The separator to split the string with.
   * @param {number} [limit] - The maximum number of substrings to return.
   * @returns {Array} An array of substrings.
   */
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
