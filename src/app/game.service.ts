import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IScore {
  score?: string;
  userName?: string;
  round?: string;
}


@Injectable({
  providedIn: 'root'
})

export class GameService {
  rounds: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
  private _$userScore = new BehaviorSubject<String | null>(null);

  getRounds() {
    return this.rounds;
  }

  getScore(): Observable<String | null> {
    return this._$userScore.asObservable();
  }
  // $score = this._$userScore.value;


  editScore(score: string | null): void {
    this._$userScore.next(score);
  }



  // }
  // private profileObs$: BehaviorSubject<Profile> = new BehaviorSubject(null);

  // getProfileObs(): Observable<Profile> {
  //     return this.profileObs$.asObservable();
  // }

  // setProfileObs(profile: Profile) {
  //     this.profileObs$.next(profile);
  // }
}
