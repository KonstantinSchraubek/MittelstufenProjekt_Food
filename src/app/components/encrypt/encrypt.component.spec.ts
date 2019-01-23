import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as CryptoJS from 'crypto-js';
import { encrypt } from './encrypt.component';

describe('encrypt', () => {
  let component: encrypt;
  let fixture: ComponentFixture<encrypt>;
  let abc = new encrypt();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [encrypt]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(encrypt);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should encrypt', () => {

    abc.set('123456$#@$^@1ERF', 'alpha');
    console.log(abc.encrypted.toString());
  });

  it('should decrypt', () => {
    abc.get('123456$#@$^@1ERF', abc.encrypted.toString());
    console.log(abc.decrypted.toString(CryptoJS.enc.Utf8));
  })
});
