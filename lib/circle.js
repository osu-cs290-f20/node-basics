function circumference(r) {
  return 2 * Math.PI * r;
}

function area(r) {
  return Math.PI * r * r;
}

// module.exports = circumference;
// module.exports = 3.1415;
  module.exports = {
    circumference: circumference,
    area: area,
    PI: 3.1415
  };
