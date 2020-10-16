import { TestBed } from '@angular/core/testing';
import { Eclat } from './eclat.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Eclat
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Eclat);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EclatApp'`, () => {
    const fixture = TestBed.createComponent(Eclat);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EclatApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Eclat);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('EclatApp app is running!');
  });
});
