import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import HelperService from 'src/utils/helper';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    // let componetFixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ],
        providers: [
            HelperService
        ]
      }).compileComponents();
    //   componetFixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;
    expect(app).toBeTruthy();
  });  

  it(`should have as title 'angularTu'`, () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;
    // app.title = "angularTsyTu";
    expect(app.title).toEqual('angularTu');
  });

  it("should call service getUserList()", ()=>{
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;
    const helperService = app.helperService;

    const spy_helperService_getUserList = spyOn(helperService, "getUserList");

    app.getUserList();

    expect(spy_helperService_getUserList).toHaveBeenCalled();

    // expect(spy_helperService_getUserList).toHaveBeenCalledTimes(4);
  });






  it('should render title', () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const component = componetFixture.componentInstance;
    componetFixture.detectChanges();
    
    component.deleteUser();

    const compiled = componetFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content .modal.delete')?.textContent).toBeTruthy();
  });





  it('should render title', () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    componetFixture.detectChanges();
    
    const compiled = componetFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angularTu app is running!');
  });
});



// describe("AppComponent", () => {
//     const helperService: HelperService = new HelperService();
//     const component: AppComponent = new AppComponent(helperService);

//     it("should contain name", () => {
        
//         const result = component.hello("Koto");
//         expect(result).toContain("Koto");
//     });

//     it("should contain Hello 'name'", () => {
//         const result = component.hello("Koto");
//         expect(result).toContain("Hello Koto");
//     });
// });
