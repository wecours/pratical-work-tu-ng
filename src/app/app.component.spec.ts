import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import HelperService from 'src/utils/helper';
import { AppComponent } from './app.component';

xdescribe('AppComponent::TestTitle', () => {
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

xdescribe('AppComponent::Succesion::WebService', () => {
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

  it("should not call B, but call A, C, D. If isLeft=false", async () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;
    const helperService = app.helperService;

    const spy_hs_getA = spyOn(helperService, "getA").and.callThrough();
    const spy_hs_getB = spyOn(helperService, "getB").and.callThrough();
    const spy_hs_getC = spyOn(helperService, "getC").and.callThrough();
    const spy_hs_getD = spyOn(helperService, "getD").and.callThrough();

    app.isLeft = false;
    await app.ngOnInit();
    componetFixture.detectChanges();

    console.log("spy_hs_getA", spy_hs_getA.length);

    expect(spy_hs_getA).toHaveBeenCalled(); 
    expect(spy_hs_getB).not.toHaveBeenCalled();
    expect(spy_hs_getC).toHaveBeenCalled();
    expect(spy_hs_getD).toHaveBeenCalled();
  });

  it("should not call D, but call A, B, C. If isLeft=true", async () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;
    const helperService = app.helperService;

    const spy_hs_getA = spyOn(helperService, "getA").and.callThrough();
    const spy_hs_getB = spyOn(helperService, "getB").and.callThrough();
    const spy_hs_getC = spyOn(helperService, "getC").and.callThrough();
    const spy_hs_getD = spyOn(helperService, "getD").and.callThrough();

    app.isLeft = true;
    await app.ngOnInit();
    componetFixture.detectChanges();

    console.log("spy_hs_getA", spy_hs_getA.length);

    expect(spy_hs_getA).toHaveBeenCalled(); 
    expect(spy_hs_getB).toHaveBeenCalled();
    expect(spy_hs_getC).toHaveBeenCalled();
    expect(spy_hs_getD).not.toHaveBeenCalled();
  });

});


xdescribe("AppComponent::SayHello", () => {
    const helperService: HelperService = new HelperService();
    const component: AppComponent = new AppComponent(helperService);

    it("should contain name", () => {
        
        const result = component.hello("Koto");
        expect(result).toContain("Koto");
    });

    it("should contain Hello 'name'", () => {
        const result = component.hello("Koto");
        expect(result).toContain("Hello Koto");
    });
});

describe('AppComponent::Test::Popup', () => {
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

  it("should mivadibadika varaible app.isShowPopup ref mi-click", async () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;

    await app.ngOnInit();
    componetFixture.detectChanges();

    expect(app.isShowPopup).toBe(false);
    app.clickToShowPopup();
    expect(app.isShowPopup).toBe(true);
    app.clickToShowPopup();
    expect(app.isShowPopup).toBe(false);
    app.clickToShowPopup();
    expect(app.isShowPopup).toBe(true);

  });

  it("should mseho popen ref mi-click bouton 1", async () => {
    const componetFixture = TestBed.createComponent(AppComponent);
    const app = componetFixture.componentInstance;

    await app.ngOnInit();
    componetFixture.detectChanges();
    let divToolbar = componetFixture.debugElement.query(By.css("div.toolbar"));

    let popupTestUnitaire = componetFixture.debugElement.query(By.css("#popup-test-unitaire"));
    expect(popupTestUnitaire).toBeNull();

    // app.clickToShowPopup();
    divToolbar.triggerEventHandler("click", null);
    componetFixture.detectChanges();

    popupTestUnitaire = componetFixture.debugElement.query(By.css("#popup-test-unitaire"));
    expect(popupTestUnitaire).not.toBeNull();

    // app.clickToShowPopup();
    divToolbar.triggerEventHandler("click", null);
    componetFixture.detectChanges();

    popupTestUnitaire = componetFixture.debugElement.query(By.css("#popup-test-unitaire"));
    expect(popupTestUnitaire).toBeNull();

  });
});