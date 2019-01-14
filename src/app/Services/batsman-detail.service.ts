import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatsmanDetailService {
  batsman1: string;
  batsman2: string;
  runs1: any = 0;
  runs2: any = 0;
   firstBatsmanBall: any=0;
   secondBatsmanBall: any=0;
   ball2: any;
  count: any = 0;
  preRun: any = 0;

  constructor() { }
  batsman1D(batsman1: string, runs11: any, batsman2: string) {
    console.log("Start Pre" + this.preRun);
    this.batsman1 = batsman1;
    if (this.count == 0 && this.preRun == 0) {
      this.runs1 = this.runs1 + (+runs11);
      ++this.count;
      this.firstBatsmanBall++;
    }

    else if (this.preRun % 2 == 0 && this.count != 0 ) {
      this.runs1 = this.runs1 + (+runs11);
      console.log(this.runs1 + "even");
      this.firstBatsmanBall++;
    }
    else if (this.preRun % 2 != 0 && this.count != 0 ) {
      this.runs2 = this.runs2 + (+runs11);
      this.secondBatsmanBall++;
      console.log(this.runs2 + "odd");
    }
    this.batsman2 = batsman2;
    //console.log(this.runs1);
    //console.log(this.batsman1);
    this.preRun = runs11;
    
  }
}
