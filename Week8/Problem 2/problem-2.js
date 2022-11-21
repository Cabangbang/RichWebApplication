
import {timer} from rxjs;
const timer$ = timer(10000);
const time = 3;
const takeFirst$ = timer$.pipe(take(time));
const sub = takeFirst$.subscribe((value) => console.log(value));
