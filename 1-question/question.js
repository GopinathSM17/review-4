function fakeAjax(url, cb) {
    var fake_responses = {
      file1: 'The first text',
      file2: 'The middle text',
      file3: 'The last text',
    };
    var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
  
    console.log('Requesting: ' + url);
  
    setTimeout(function () {
      cb(fake_responses[url]);
    }, randomDelay);
  }
  
//   function output(text) {
//     console.log(text);
//   }
  
  // **************************************
  // The old-n-busted callback way
  
  function getFile(file) {
    fakeAjax(file, function (text) {
      // what do we do here?
      console.log(text);
    });
  }
  // request all files at once in "parallel"
  getFile('file1');
  getFile('file2');
  getFile('file3');
  
  // The task is to get the data in the right order,
  // file1 first, then file2, and finally file3