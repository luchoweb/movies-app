const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

const baseUri = '/api/movies';

chai.use(chaiHttp);

describe(`/GET ${baseUri}`, () => {
  it('it should GET first 10 movies as array and it should has some keys', (done) => {
    chai.request(server)
      .get(baseUri)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        chai.expect(res.body[0]).to.have.all.keys('id', 'title', 'year', 'type', 'poster', 'createdAt', 'updatedAt');
        done();
      });
  });

  it('it should GET some movies by query param (search) and it should has some keys', (done) => {
    chai.request(server)
      .get(`${baseUri}?query=christmas`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        chai.expect(res.body[0]).to.have.all.keys('id', 'title', 'year', 'type', 'poster', 'createdAt', 'updatedAt');
        done();
      });
  });
});