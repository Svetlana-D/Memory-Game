// Use https://gist.github.com/anonymous/fe5cdd7e9cd14fea796b27d19f8d1cb6 for create stopWatch
function stopWatch(elem)
{
  var time = 0;
  var offset;
  var interval;

  function update() {
    if (this.isOn) {
      time += delta();
    }

    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;

    offset = now;

    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    //var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    /*while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }*/

    return minutes + ' : ' + seconds;
  }

  this.start = function() {
    interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  /*this.show = function() {
    timeFormatter();
  };*/
  /*this.reset = function() {
    time = 0;
    update();
  };*/

  this.isOn = false;
}