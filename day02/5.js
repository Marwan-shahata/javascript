const points = [40, 100, 1, 5, 25, 5];

// Sort the Array
points.sort(function (a, b) { return a - b });

console.log(points)
points.sort(function (a, b) { return b - a });
console.log(points)

