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

});
