exports.entryCount = function(entry) {
    var output = entry.split(" ");
  var count = 0;
  for (i = 0; i < output.length; i++) {
    count++;
  }
  return count;
};
