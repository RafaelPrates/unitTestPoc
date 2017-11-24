var expect  = require('chai').expect;
var request = require('request');

describe('Verifico status e conteudos da root', function() {
    
    it('Espero que o testo do body seja', function(done) {
        request('http://localhost:8085' , function(error, response, body) {
            expect(body).to.equal('Vocês estão prontas crianças?');
            done();
        });
    });

    it('Espero que o status da pagina seja 200', function(done) {
        request('http://localhost:8085' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Espero que a pagina /about não esteja funcionando', function(done) {
        request('http://localhost:8085/about' , function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
