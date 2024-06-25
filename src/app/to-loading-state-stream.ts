import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {LoadingState, Loaded, Errored, Loading} from './interfaces/loading-state.interface';

export function toLoadingStateStream<T>(
  source$: Observable<T>,
): Observable<LoadingState<T>> {
  return source$.pipe(
    map((data): Loaded<T> => ({state: 'loaded', data})),
    catchError((error): Observable<Errored> => of({state: 'error', error})),
    startWith({state: 'loading'} as Loading),
  );
}
