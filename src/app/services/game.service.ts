
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IScore{
  scores: IScoreItems
}

export interface IScoreItems {
  score?: string;
  name?: string;
  round?: string;
}


@Injectable({
  providedIn: 'root'
})

export class GameService {
  rounds: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
  private _userData$ = new BehaviorSubject<IScore[]>([]) ;
  userData$: Observable<IScore[]> = this._userData$.asObservable();


  getRounds() {
    return this.rounds;
  }

  getScore(): Observable<IScore[] | null> {
   return this._userData$.asObservable();
  }


  editScore(score: IScore[] | null): void {
    this._userData$.next(Object.assign([],score));
  }



}