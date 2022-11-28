const startBtn = document.getElementById("Btn");
const timerDisplay = document.getElementById("timer");

const count = 0;
const startTimer = {
  next: function () {
    let startCount;
    const hour = document.getElementById("hour").value;
    const min = document.getElementById("minute").value;
    const sec = document.getElementById("second").value;

    const hrs = hour * 3600;
    const mins = min * 60;

    const totaltime = hrs + mins + sec;

    startCount = Rx.Observable.interval(1000)
      .map((count) => totaltime - count)
      .subscribe((seconds) => {
        var time = String(seconds / 3600);
        var now = new Date(0, 0);
        now.setSeconds(+time * 60 * 60);

        timerDisplay.innerHTML = now.toTimeString().slice(0, 8);
        if (time == 0) {
          timerDisplay.innerHTML = "Time is up";
          startCount.unsubscribe();
        }
      });
  },
};

var Observable = Rx.Observable.fromEvent(startBtn, "click");
Observable.subscribe(startTimer);
