exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.frames = function(req, res){
  res.render('frames', { title: 'Express' });
};
