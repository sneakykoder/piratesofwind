// Symbology
// 'b' - boat place
// 'i' - island place
// 's' - swirl
// 'n' - no swirl
var levels = new Array();
var level0 = new level();
level0.num = 1;
level0.matrix =
    [ ['b', 'n', 'n', 's', 's', 's', 's', 'n', 's', 'i'],
      ['b', 's', 'n', 'n', 'n', 'n', 'n', 's', 'n', 'i'],
      ['b', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'i'],
      ['b', 'n', 'n', 's', 's', 'n', 'n', 's', 'n', 'i'],
      ['b', 'n', 'n', 'n', 'n', 's', 's', 'n', 'n', 'i'],
      ['b', 's', 'n', 'n', 's', 's', 'n', 'n', 's', 'i'],
      ['b', 'n', 's', 's', 'n', 'n', 'n', 'n', 'n', 'i'],
      ['b', 's', 'n', 'n', 'n', 'n', 's', 's', 'n', 'i'],
      ['b', 'n', 's', 'n', 'n', 's', 'n', 'n', 's', 'i'],
      ['b', 's', 's', 'n', 's', 'n', 'n', 's', 'n', 'i']
];
level0.direction = 'east';
level0.velocity = 40;
levels.push(level0);

/*levels.getRows = function() {
    return levels[0].matrix.length;
}
levels.getCols = function() {
    return levels[0].matrix[0][0].length;
}*/