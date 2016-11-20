/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it ('should work', () => {
     let fixture = TestBed.createComponent(AppComponent);
     expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
   });

  it('should render It works! in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('It works!');
  }));
  
});
