import {TestBed} from '@angular/core/testing';

import {DatabaseService} from './database.service';
import {AppModule} from '../app.module';
import {Encrypt} from '../models/encrypt';
import {Socket} from 'ngx-socket-io';

let service: DatabaseService;
let socket: Socket;

describe('DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.get(DatabaseService);
    socket = TestBed.get(Socket);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('paasword should be encypted when socket call', function () {
    const spy = spyOn(Encrypt.prototype, 'set');
    service.addUser('mail@mail.de', 'password', 'username');
    expect(spy).toHaveBeenCalled();
  });

  it('AddUser should call emit with parameters', function () {
    const spy = spyOn(socket, 'emit');
    service.addUser('mail@mail.de', 'password', 'username');
    expect(spy).toHaveBeenCalled();
  });

  it('checkEmail should call emit with parameters', function () {
    const spy = spyOn(socket, 'emit');
    service.checkEmail('mail@mail.de');
    expect(spy).toHaveBeenCalledWith('checkEmail', {email: 'mail@mail.de'});
  });

  // it('changeemail should call emit with parameters', async function () {
  //   const benutzer: Benutzer = new Benutzer('Username', 'passwort', 'oldmail@gmail.de')
  //   const spy = spyOn(socket, 'emit');
  //   const spy2 = spyOn(service, 'getLoggedInUser').and.returnValue(benutzer);
  //   const spy3 = spyOn(service, 'authenticateUser').and.returnValue(true);
  //   await service.changeEmail('mail@mail.de', 'passwort123');
  //   expect(spy).toHaveBeenCalledWith('updateEmail', {username: 'Username', email: 'mail@mail.de'});
  // });
});
