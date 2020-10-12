const chai = require('chai');
var scanf = require('scanf');
const chaiHttp = require('chai-http');
const { assert } = require('console');
const users2 = require('../routers/users2');
chai.use(chaiHttp);
const server = require('../server');
const db = require('../routers/db');

const expect = chai.expect;
const apiAddress = 'http://localhost:3000';

const passport = require('passport');
const { use } = require('chai');
const { describe } = require('mocha');
const { sscanf } = require('scanf');
const BasicStrategy = require('passport-http').BasicStrategy;


describe('test operations User', function() 
{

  before(function() 
  {
    server.start();
  });

  after(function() 
  {
    server.stop();
  });

  var storedresponse;
  var storedLenght;

  /*
  describe('User Get-,Post-,Delete-methods', function() 
  {

    it('GET-method test for /users', async function() 
    {
      this.timeout(3000);
      await chai.request(apiAddress)
      .get('/users')
      .auth('tester', 'testerpassword')
      .then(response => {
        //expect(response.status).to.equal(200);
        //console.log("____"+response+"_____");
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.a.property('user');
        expect(response.body.user).to.be.a('array');
        //console.log(response.body.user);
        expect(response.body.user[0]).to.be.a('object');
        expect(response.body.user[0]).to.have.a.property('id');
        expect(response.body.user[0]).to.have.a.property('username');
        expect(response.body.user[0]).to.have.a.property('email');
        expect(response.body.user[0]).to.have.a.property('password');
        expect(response.body.user[0]).to.have.a.property('name');
        expect(response.body.user[0]).to.have.a.property('streetaddress');
        expect(response.body.user[0]).to.have.a.property('city');
        expect(response.body.user[0]).to.have.a.property('country');
        expect(response.body.user[0]).to.have.a.property('dateofbirth');
        //expect(response.body.user[0]).to.have.a.property('validApiKey');
        })
        .catch(error => {
        expect.fail(error)
        })
    })
  
    it('POST-method,Should add a new user by createuser', async function() 
    {
      this.timeout(5000);
      await chai.request(apiAddress)
      .post('/users/createuser')
      .auth('tester', 'testerpassword')
      .send({
        username: "TestiKalle",
        email: "kalle@gmail.com",
        password: "kallesalis123",
        name: "Kalle",
        streetaddress: "Kallenkoti 12",
        city: "Kallekaupunki",
        country: "Kallemaa",
        dateofbirth: "01.01.1000"
        })
        .then(response => {
          expect(response.status).to.equal(201);
          return chai.request(apiAddress)
          .get('/users')
          .auth('tester', 'testerpassword');  
          })
          .then(readResponse => {
            //console.log(readResponse);
            //console.log("________"+readResponse.body.user.length);
            //console.log(readResponse.body.user);
            //console.log(readResponse.body.user[1].id);

            expect(readResponse.body.user[readResponse.body.user.length-1].username).to.equal("TestiKalle");
            expect(readResponse.body.user[readResponse.body.user.length-1].email).to.equal("kalle@gmail.com");
            expect(readResponse.body.user[readResponse.body.user.length-1].name).to.equal("Kalle");
            expect(readResponse.body.user[readResponse.body.user.length-1].streetaddress).to.equal("Kallenkoti 12");
            expect(readResponse.body.user[readResponse.body.user.length-1].city).to.equal("Kallekaupunki");
            expect(readResponse.body.user[readResponse.body.user.length-1].country).to.equal("Kallemaa");
            expect(readResponse.body.user[readResponse.body.user.length-1].dateofbirth).to.equal("01.01.1000");
            
            //console.log("delete testuser2");
            //console.log(readResponse.body.user[1].id);
            //console.log(readResponse.body.user[1].id-1); 
            
            })
            .catch(error => {
              expect.fail(error)
            })

      })

      it('Delete-method,Should delete a user', async function() {
        this.timeout(3000);
        await chai.request(apiAddress)
          .get('/users')
          .auth('tester', 'testerpassword')
          .then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.a.property('user');
            expect(response.body.user).to.be.a('array');
            
            storedresponse = response.body.user;
            storedLenght = response.body.user.length;

            //db.query("ALTER TABLE users AUTO_INCREMENT=" + storedLenght-1);

            return chai.request(apiAddress)
            .delete('/users/delete/'+storedLenght)
            .auth('tester', 'testerpassword');
            

          })
          .catch(error => {
            expect.fail(error)
          })

      })
  })

});*/

console.log('Go on?');
var i1 = scanf("%s");

describe('test operations Items', function() 
{
  before(function() 
  {
    server.start();
  });

  after(function() 
  {
    server.stop();
  });

  var storedresponse;
  var storedLenght;


    describe('Items GET-,POST-,PUT-,PUT2-,DELETE-methods', function() {

      it('GET-method: test for /items', async function() {
        //this.timeout(3000);
        await chai.request(apiAddress)
          .get('/items')
          .then(response => {
            //expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.a.property('ItemsData');
            expect(response.body.ItemsData).to.be.a('array');
            expect(response.body.ItemsData[0]).to.be.a('object');
            expect(response.body.ItemsData[0]).to.have.a.property('id');
            expect(response.body.ItemsData[0]).to.have.a.property('title');
            expect(response.body.ItemsData[0]).to.have.a.property('description');
            expect(response.body.ItemsData[0]).to.have.a.property('category');
            expect(response.body.ItemsData[0]).to.have.a.property('location');
            expect(response.body.ItemsData[0]).to.have.a.property('images');
            expect(response.body.ItemsData[0]).to.have.a.property('askingprice');
            expect(response.body.ItemsData[0]).to.have.a.property('dateofposting');
            expect(response.body.ItemsData[0]).to.have.a.property('deliverytype');
            expect(response.body.ItemsData[0]).to.have.a.property('sellername');
            expect(response.body.ItemsData[0]).to.have.a.property('sellermail');
            expect(response.body.ItemsData[0]).to.have.a.property('sellerphonenumber');
            storedTodos = response.body.ItemsData;
          })
          .catch(error => {
            expect.fail(error)
          })
      })


      it('GET-method: test for /items/:id', async function() {
        //this.timeout(3000);
        await chai.request(apiAddress)
          .get('/items/'+storedTodos[0].id)
          .then(response => {
            //expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            console.log(response.body);
            expect(response.body).to.have.a.property('ItemsData');
            expect(response.body.ItemsData).to.be.a('array');
            expect(response.body.ItemsData[0]).to.be.a('object');
            expect(response.body.ItemsData[0]).to.have.a.property('id');
            expect(response.body.ItemsData[0]).to.have.a.property('title');
            expect(response.body.ItemsData[0]).to.have.a.property('description');
            expect(response.body.ItemsData[0]).to.have.a.property('category');
            expect(response.body.ItemsData[0]).to.have.a.property('location');
            expect(response.body.ItemsData[0]).to.have.a.property('images');
            expect(response.body.ItemsData[0]).to.have.a.property('askingprice');
            expect(response.body.ItemsData[0]).to.have.a.property('dateofposting');
            expect(response.body.ItemsData[0]).to.have.a.property('deliverytype');
            expect(response.body.ItemsData[0]).to.have.a.property('sellername');
            expect(response.body.ItemsData[0]).to.have.a.property('sellermail');
            expect(response.body.ItemsData[0]).to.have.a.property('sellerphonenumber');
          })
          .catch(error => {
            expect.fail(error)
          })
      })



      it('POST-method:Should add a new item by create', async function() {
        this.timeout(5000);
        await chai.request(apiAddress)
          .post('/items/create')
          .auth('tester', 'testerpassword')
          .send({
              title: "Selling used radio",
              description: "Used radio",
              category: "Radio",
              location: "Oulu,FIN",
              images: "asd123asd123asd123",
              askingprice: "100",
              dateofposting: "1591012800",
              deliverytype: "Pickup",
              sellername: "Kalle Kovapää",
              sellermail: "Kalle60@gmail.com",
              sellerphonenumber: "+358 40 123 123"
          })
          .then(response => {
            //this.timeout(2000);
            expect(response.status).to.equal(201);
            return chai.request(apiAddress).get('/items');
          })
          .then(readResponse => {
            //console.log(readResponse.body.ItemsData);
            //console.log("!!!!!!!!!!!!!!!"+readResponse.body.ItemsData.length);
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].title).to.equal("Selling used radio");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].description).to.equal("Used radio");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].category).to.equal("Radio");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].location).to.equal("Oulu,FIN");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].images).to.equal("asd123asd123asd123");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].askingprice).to.equal("100");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].dateofposting).to.equal("1591012800");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].deliverytype).to.equal("Pickup");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].sellername).to.equal("Kalle Kovapää");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].sellermail).to.equal("Kalle60@gmail.com");
            expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].sellerphonenumber).to.equal("+358 40 123 123");
          })
          .catch(error => {
            expect.fail(error)
          })
      })

  
      it('PUT-method: Should edit object', async function() {
        this.timeout(3000);
        await chai.request(apiAddress)
          .put('/items/change/1')
          .auth('tester', 'testerpassword')
          .send({
              title: "Selling used car",
              description: "Used BMW 1995, black, diesel, etc.",
              category: "Cars",
              location: "London,YK",
              images: "asd123asd123asd123",
              askingprice: "2000",
              dateofposting: "1591012800",
              deliverytype: "Pickup",
              sellername: "Bill BMW",
              sellermail: "Billruleforever@gmail.com",
              sellerphonenumber: "+44 23 448 112"
          })
          .then(response => {
            expect(response).to.have.property('status');
            expect(response.status).to.equal(201);
            //this.timeout(3000);
            return chai.request(apiAddress)
            .get('/items/1')
              
          })
          .then(checkResponse => {
            console.log(checkResponse.body);
            expect(checkResponse.body).to.have.a.property('ItemsData');
            expect(checkResponse.body.ItemsData).to.be.a('array');
            
            expect(checkResponse.body.ItemsData[checkResponse.body.ItemsData.length-1].title).to.equal("Selling used car");
          })
          .catch(error => {
            expect.fail(error);
          });
      });

      it('Delete-method,Should delete a item', async function() {
        this.timeout(3000);
        await chai.request(apiAddress)
          .get('/items')
          .auth('tester', 'testerpassword')
          .then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.a.property('ItemsData');
            expect(response.body.ItemsData).to.be.a('array');
            
            storedresponse = response.body.ItemsData;
            storedLenght = response.body.ItemsData.length;

            //db.query('ALTER TABLE users AUTO_INCREMENT=?'),[storedLenght-1];
            //db.query("ALTER TABLE users AUTO_INCREMENT=" + storedLenght-1);

            return chai.request(apiAddress)
            .delete('/items/delete/'+storedLenght)
            .auth('tester', 'testerpassword');

          })
          .catch(error => {
            expect.fail(error)
          })

      })

    })


});

console.log('Go on?');
var i2 = scanf("%s");
/*
describe('test operations Users/search', function() 
{

  before(function() 
  {
    server.start();
  });

  after(function() 
  {
    server.stop();
  });

  var storedresponse;
  var storedLenght;

    describe('GET-,POST-Methods for /items/search', function() 
    {
      it('POST-method: Should add item and GET-method for checking search/category', async function() 
      {
        this.timeout(5000);
        await chai.request(apiAddress)
          .post('/items/create')
          .auth('tester', 'testerpassword')
          
          .send(
            {
              title: "Selling used bike",
              description: "Used bike",
              category: "Bikes",
              location: "London,YK",
              images: "asd123asd123asd123",
              askingprice: "2000",
              dateofposting: "1591012800",
              deliverytype: "Pickup",
              sellername: "Jack Ruthless",
              sellermail: "Jack@gmail.com",
              sellerphonenumber: "+44 23 448 112"
            })
          .then(response => 
            {
            //expect(response).to.have.property('status');
            //expect(response.status).to.equal(201);
            this.timeout(5000);
            return chai.request(apiAddress)
            .get('/items/search/category/Bikes')
          })
          .then(checkResponse => {
            expect(checkResponse.body).to.be.a('object');
            console.log(checkResponse.body);

            expect(checkResponse.body).to.have.a.property('ItemsData');
            expect(checkResponse.body.ItemsData).to.be.a('array');
            //console.log(checkResponse)
            
            //console.log(checkResponse.body.ItemsData[0].sellername);

            //expect(checkResponse.body.results[0]).to.be.a('object');

            expect(checkResponse.body.ItemsData[0]).to.have.a.property('id');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('title');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('description');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('category');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('location');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('images');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('askingprice');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('dateofposting');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('deliverytype');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('sellername');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('sellermail');
            expect(checkResponse.body.ItemsData[0]).to.have.a.property('sellerphonenumber');

            expect(checkResponse.body.ItemsData[0]).to.have.a.property('category') == 'Bikes';
            storedresponse = checkResponse.body.ItemsData;
            storedLenght = (checkResponse.body.ItemsData.length+1);
            console.log("___________")
            console.log(storedLenght);

          })
          .catch(error => {
            expect.fail(error);
          });
      });

      it('Delete-method,Should delete a item2 in searchtest', async function() 
      {
        this.timeout(3000);
        await chai.request(apiAddress)
        .delete('/items/delete/'+storedLenght)
        .auth('tester', 'testerpassword')
        .then(response => 
        {
          expect(response.status).to.equal(200);
            
        })
        .catch(error => 
          {
            expect.fail(error)
          })

      })


      it('GET-method: test search/location', async function() {
        this.timeout(3000);
        await chai.request(apiAddress)
          .get('/items/search/location/London,YK')
          .then(response => {
            //expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.a.property('ItemsData');
            expect(response.body.ItemsData).to.be.a('array');
            //expect(response.body.ItemsData[0]).to.be.a('object');
            
            expect(response.body.ItemsData[0]).to.have.a.property('id');
            expect(response.body.ItemsData[0]).to.have.a.property('title');
            expect(response.body.ItemsData[0]).to.have.a.property('description');
            expect(response.body.ItemsData[0]).to.have.a.property('category');
            expect(response.body.ItemsData[0]).to.have.a.property('location');
            expect(response.body.ItemsData[0]).to.have.a.property('images');
            expect(response.body.ItemsData[0]).to.have.a.property('askingprice');
            expect(response.body.ItemsData[0]).to.have.a.property('dateofposting');
            expect(response.body.ItemsData[0]).to.have.a.property('deliverytype');
            expect(response.body.ItemsData[0]).to.have.a.property('sellername');
            expect(response.body.ItemsData[0]).to.have.a.property('sellermail');
            expect(response.body.ItemsData[0]).to.have.a.property('sellerphonenumber');

            expect(response.body.ItemsData[0]).to.have.a.property('category') == 'London,YK';
          })
          .catch(error => {
            expect.fail(error)
          })
      })

      it('GET-method: test search/dateofposting', async function() {
        this.timeout(3000);
        await chai.request(apiAddress)
          .get('/items/search/dateofposting/1591012800')
          .then(response => {
            //expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.a.property('ItemsData');
            expect(response.body.ItemsData).to.be.a('array');
            expect(response.body.ItemsData[0]).to.be.a('object');
            //console.log(response.body)
            expect(response.body.ItemsData[0]).to.have.a.property('id');
            expect(response.body.ItemsData[0]).to.have.a.property('title');
            expect(response.body.ItemsData[0]).to.have.a.property('description');
            expect(response.body.ItemsData[0]).to.have.a.property('category');
            expect(response.body.ItemsData[0]).to.have.a.property('location');
            expect(response.body.ItemsData[0]).to.have.a.property('images');
            expect(response.body.ItemsData[0]).to.have.a.property('askingprice');
            expect(response.body.ItemsData[0]).to.have.a.property('dateofposting');
            expect(response.body.ItemsData[0]).to.have.a.property('deliverytype');
            expect(response.body.ItemsData[0]).to.have.a.property('sellername');
            expect(response.body.ItemsData[0]).to.have.a.property('sellermail');
            expect(response.body.ItemsData[0]).to.have.a.property('sellerphonenumber');

            expect(response.body.ItemsData[0]).to.have.a.property('dateofposting') == "1591012800";
          })
          .catch(error => {
            expect.fail(error)
          })
      })
    
    


    })*/
  });

