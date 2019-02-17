document.getElementById('import').onclick = function() {
  var files = document.getElementById('selectFile').files;
  // console.log(files);
  if (files.length <= 0) {
    return false;
  }

  var fr = new FileReader();

  fr.onload = function(e) {
    // console.log(e);
    var result = JSON.parse(e.target.result);
    // console.log(result); // the entire JSON is stored in result variable. this is a local variable that should be sent somewhere else for processing
    processAll(result);
  }

  fr.readAsText(files.item(0));

};

