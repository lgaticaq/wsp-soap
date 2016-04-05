'use strict';

import {expect} from 'chai';
import soap from 'soap';
import '../src';

describe('wsp', function() {
  this.timeout(20000);
  let _client;
  const url = 'http://localhost:8000/wsdl?wsdl';

  before(done => {
    soap.createClient(url, (err, client) => {
      if (err) throw err;
      _client = client;
      done();
    });
  });

  it('send gps data', done => {
    const data = {
      patente: 'TEST01',
      direccion: 'La Dehesa 1201, Lo Barnechea',
      fecha: '04/03/2016',
      hora: '17:50:00',
      coodenada_X: '-33.365676666666666',
      coordenas_y: '-70.51370166666668'
    };
    _client.Inserta_GPS(data, (err, result) => {
      if (err) throw err;
      expect(result.Inserta_GPSResult).to.be.a('object');
      done();
    });
  });
});
