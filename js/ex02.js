var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var flatArr = function (arr) {
  var newArr = arr.reduce(function (prev, current) {
    if (!Array.isArray(current)) {
      return prev.concat(current);
    }

    return prev.concat(flatArr(current));
  }, []);

  return newArr;
};

var result = flatArr(arr);
console.log(result);

// console.log(arr.flat(Infinity));
