import { Observable } from "rxjs";

var observer = new Observable(function subscribe(subscriber) {
  subscriber.next("My First Observable");
});
observer.subscribe((x) => console.log(x));
