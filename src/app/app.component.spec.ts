import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { AppComponent } from './app.component';
import path from './util/Path';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('dice number should be between 0 and 7', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app.generateNumber()).toBeLessThan(7);
    expect(app.generateNumber()).toBeGreaterThan(0);
    
  });

  it('check number of nodes till end',()=>{
    let temp = path;
    let count = 0;
    while(temp){
      temp = temp.next;
      count+=1
    }
    expect(count).toEqual(51);
  })

  

  
 
});
