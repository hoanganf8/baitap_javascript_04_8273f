var arr = [
  ["a", 1, true],
  ["b", 2, false],
  [null, undefined, function () {}],
  [false, undefined, NaN, 10],
];

//[["a", "b"], [1, 2], [true, false]]

//Kiểm tra xem có phải là mảng hay không?
if (Array.isArray(arr)) {
  arr = arr.flat(Infinity);
  var array = arr.reduce(function (prev, current) {
    var type = typeof current;
    if (!prev[type]) {
      prev[type] = [];
    }

    prev[type].push(current);

    return prev;
  }, []);

  var result = [];
  for (var index in array) {
    result.push(array[index]);
  }

  console.log(result);
}
