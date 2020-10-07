const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('console');
const users2 = require('../routers/users2');
chai.use(chaiHttp);
const server = require('../server');

const expect = chai.expect;
const apiAddress = 'http://localhost:3000';


describe('test operations', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  })

  
  
  
  
  /*describe('Login Get-method', function() {

    it('Get-method test for /login', async function() {
      await chai.request(apiAddress)
        .get('/login')
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.a.property('LoginData');
          expect(response.body.LoginData).to.be.a('array');
          expect(response.body.LoginData[0]).to.be.a('object');
          expect(response.body.LoginData[0]).to.have.a.property('id');
          expect(response.body.LoginData[0]).to.have.a.property('username');
          expect(response.body.LoginData[0]).to.have.a.property('password');
        })
        .catch(error => {
          expect.fail(error)
        })
    })*/

    /*it('POST-method,Should add a new user by addUser with user2.js', async function() {
      await chai.request(apiAddress)
        .post('/registerBasic')
        .send({
          username: "Kalevi",
          password: "salis",
          email:"Kalevi@gmail.com"
        })
        .then(response => {
          expect(response.status).to.equal(201);
          return chai.request(apiAddress).get('/usertest/0');
        })
        .then(readResponse => {
          expect(readResponse.body).to.be.a('object');
          console.log(readResponse.body);
          expect(readResponse.body.username).to.equal("tester");
          expect(readResponse.body.email).to.equal("tester@mail.com");
          expect(readResponse.body.password).to.equal("$2y$06$PhZ74dT8/5g6B8SgssFq6ey4ojLxmP6pos2DcevMUGw25Vc9jGEou");

        })
        .catch(error => {
          expect.fail(error)
        })
    })
  });*/

  describe('User Get-,Post-methods', function() {

    it('GET-method test for /users', async function() {
      await chai.request(apiAddress)
        .get('/users')
        .auth('tester', 'testerpassword')
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.a('object');
          console.log(response.body);
          expect(response.body).to.have.a.property('user');
          expect(response.body.user).to.be.a('array');
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
          expect(response.body.user[0]).to.have.a.property('validApiKey');

        })
        .catch(error => {
          expect.fail(error)
        })
    })
  
    it('POST-method,Should add a new user by createuser', async function() {
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
          expect(readResponse.body.user[readResponse.body.user.length-1].username).to.equal("TestiKalle");
          expect(readResponse.body.user[readResponse.body.user.length-1].email).to.equal("kalle@gmail.com");
          expect(readResponse.body.user[readResponse.body.user.length-1].name).to.equal("Kalle");
          expect(readResponse.body.user[readResponse.body.user.length-1].streetaddress).to.equal("Kallenkoti 12");
          expect(readResponse.body.user[readResponse.body.user.length-1].city).to.equal("Kallekaupunki");
          expect(readResponse.body.user[readResponse.body.user.length-1].country).to.equal("Kallemaa");
          expect(readResponse.body.user[readResponse.body.user.length-1].dateofbirth).to.equal("01.01.1000");
        })
        .catch(error => {
          expect.fail(error)
        })
    })
  })

  let storedTodos = null;
/*
  describe('Items GET-,POST-,PUT-,DELETE-methods', function() {

    it('GET-method: test for /items', async function() {
      await chai.request(apiAddress)
        .get('/items')
        .then(response => {
          expect(response.status).to.equal(200);
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
      await chai.request(apiAddress)
        .get('/items/'+storedTodos[0].id)
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.a.property('id');
          expect(response.body).to.have.a.property('title');
          expect(response.body).to.have.a.property('description');
          expect(response.body).to.have.a.property('category');
          expect(response.body).to.have.a.property('location');
          expect(response.body).to.have.a.property('images');
          expect(response.body).to.have.a.property('askingprice');
          expect(response.body).to.have.a.property('dateofposting');
          expect(response.body).to.have.a.property('deliverytype');
          expect(response.body).to.have.a.property('sellername');
          expect(response.body).to.have.a.property('sellermail');
          expect(response.body).to.have.a.property('sellerphonenumber');
        })
        .catch(error => {
          expect.fail(error)
        })
    })
  
    it('POST-method:Should add a new user by create', async function() {
      await chai.request(apiAddress)
        .post('/items/create')
        .send({
            title: "Selling used radio",
            description: "Used radio",
            category: "Radio",
            location: "Oulu,FIN",
            images: "asd123asd123asd123",
            askingprice: 100,
            dateofposting: 1591012800,
            deliverytype: "Pickup",
            sellername: "Kalle Kovapää",
            sellermail: "Kalle60@gmail.com",
            sellerphonenumber: "+358 40 123 123"
        })
        .then(response => {
          expect(response.status).to.equal(201);
          return chai.request(apiAddress).get('/items');
        })
        .then(readResponse => {
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].title).to.equal("Selling used radio");
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].description).to.equal("Used radio");
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].category).to.equal("Radio");
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].location).to.equal("Oulu,FIN");
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].images).to.equal("asd123asd123asd123");
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].askingprice).to.equal(100);
          expect(readResponse.body.ItemsData[readResponse.body.ItemsData.length-1].dateofposting).to.equal(1591012800);
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
      await chai.request(apiAddress)
        .put('/items/change/' + storedTodos[0].id)
        //.set('Authorization', 'Bearer ' + userJwt)
        .send({
          title: "Selling used boat,UPDATED",
          description: "Used boat,UPDATED",
          category: "Boats",
          location: "London,YK",
          images: "asd123asd123asd123,UPDATED",
          askingprice: 2000,
          dateofposting: 1591012800,
          deliverytype: "Pickup,UPDATED",
          sellername: "Bill BMW,UPDATED",
          sellermail: "Billruleforever@gmail.com",
          sellerphonenumber: "+44 23 448 112,UPDATED"
        })
        .then(response => {
          expect(response).to.have.property('status');
          expect(response.status).to.equal(200);
          return chai.request(apiAddress)
          .get('/items/' + storedTodos[0].id)
            //.set('Authorization', 'Bearer ' + userJwt);
        })
        .then(checkResponse => {
          // Check that description is not changed
          expect(checkResponse.body).to.have.property('category');
          //expect(checkResponse.body.description).to.equal(storedTodos[0].description);
        })
        .catch(error => {
          assert.fail(error);
        });
    });

    it('DELETE-method: Should delete a object', async function() {
      await chai.request(apiAddress)
        //console.log(storedTodos)
        .delete('/items/delete/' + storedTodos[0].id)
        //.set('Authorization', 'Bearer ' + userJwt)
        .then(response => {
          expect(response).to.have.property('status');
          expect(response.status).to.equal(200);
          return chai.request(apiAddress)
            .get('/items' + storedTodos[0].id)
            //.set('Authorization', 'Bearer ' + userJwt);
        })
        .then(checkResponse => {
          expect(checkResponse).to.have.property('status');
          expect(checkResponse.status).to.equal(404);
        })
        .catch(error => {
          assert.fail(error);
        });
    })
  })

  describe('GET-,POST-Methods for /items/search', function() {

    it('POST-method: Should add item and GET-method for checking search/category', async function() {
      await chai.request(apiAddress)
        .post('/items/create')
        //.set('Authorization', 'Bearer ' + userJwt)
        .send({
          title: "Selling used bike",
          description: "Used bike",
          category: "Bikes",
          location: "London,YK",
          images: "asd123asd123asd123",
          askingprice: 2000,
          dateofposting: 1591012800,
          deliverytype: "Pickup",
          sellername: "Jack Ruthless",
          sellermail: "Jack@gmail.com",
          sellerphonenumber: "+44 23 448 112"
        })
        .then(response => {
          expect(response).to.have.property('status');
          expect(response.status).to.equal(201);
          return chai.request(apiAddress)
          .get('/items/search/category/Bikes')
            //.set('Authorization', 'Bearer ' + userJwt);
        })
        .then(checkResponse => {
          expect(checkResponse.body).to.be.a('object');
          expect(checkResponse.body).to.have.a.property('result');
          expect(checkResponse.body.result).to.be.a('array');
          //console.log(checkResponse)
          //console.log(checkResponse.body)
          expect(checkResponse.body.result[0]).to.be.a('object');

          expect(checkResponse.body.result[0]).to.have.a.property('id');
          expect(checkResponse.body.result[0]).to.have.a.property('title');
          expect(checkResponse.body.result[0]).to.have.a.property('description');
          expect(checkResponse.body.result[0]).to.have.a.property('category');
          expect(checkResponse.body.result[0]).to.have.a.property('location');
          expect(checkResponse.body.result[0]).to.have.a.property('images');
          expect(checkResponse.body.result[0]).to.have.a.property('askingprice');
          expect(checkResponse.body.result[0]).to.have.a.property('dateofposting');
          expect(checkResponse.body.result[0]).to.have.a.property('deliverytype');
          expect(checkResponse.body.result[0]).to.have.a.property('sellername');
          expect(checkResponse.body.result[0]).to.have.a.property('sellermail');
          expect(checkResponse.body.result[0]).to.have.a.property('sellerphonenumber');

          expect(checkResponse.body.result[0]).to.have.a.property('category') == 'Bikes';
        })
        .catch(error => {
          expect.fail(error);
        });
    });

    it('GET-method: test search/location', async function() {
      await chai.request(apiAddress)
        .get('/items/search/location/London,YK')
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.a.property('result');
          expect(response.body.result).to.be.a('array');
          expect(response.body.result[0]).to.be.a('object');
          //console.log(response.body)
          expect(response.body.result[0]).to.have.a.property('id');
          expect(response.body.result[0]).to.have.a.property('title');
          expect(response.body.result[0]).to.have.a.property('description');
          expect(response.body.result[0]).to.have.a.property('category');
          expect(response.body.result[0]).to.have.a.property('location');
          expect(response.body.result[0]).to.have.a.property('images');
          expect(response.body.result[0]).to.have.a.property('askingprice');
          expect(response.body.result[0]).to.have.a.property('dateofposting');
          expect(response.body.result[0]).to.have.a.property('deliverytype');
          expect(response.body.result[0]).to.have.a.property('sellername');
          expect(response.body.result[0]).to.have.a.property('sellermail');
          expect(response.body.result[0]).to.have.a.property('sellerphonenumber');

          expect(response.body.result[0]).to.have.a.property('category') == 'London,YK';
        })
        .catch(error => {
          expect.fail(error)
        })
    })

    it('GET-method: test search/dateofposting', async function() {
      await chai.request(apiAddress)
        .get('/items/search/dateofposting/1591012800')
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.a.property('result');
          expect(response.body.result).to.be.a('array');
          expect(response.body.result[0]).to.be.a('object');
          //console.log(response.body)
          expect(response.body.result[0]).to.have.a.property('id');
          expect(response.body.result[0]).to.have.a.property('title');
          expect(response.body.result[0]).to.have.a.property('description');
          expect(response.body.result[0]).to.have.a.property('category');
          expect(response.body.result[0]).to.have.a.property('location');
          expect(response.body.result[0]).to.have.a.property('images');
          expect(response.body.result[0]).to.have.a.property('askingprice');
          expect(response.body.result[0]).to.have.a.property('dateofposting');
          expect(response.body.result[0]).to.have.a.property('deliverytype');
          expect(response.body.result[0]).to.have.a.property('sellername');
          expect(response.body.result[0]).to.have.a.property('sellermail');
          expect(response.body.result[0]).to.have.a.property('sellerphonenumber');

          expect(response.body.result[0]).to.have.a.property('dateofposting') == 1591012800;
        })
        .catch(error => {
          expect.fail(error)
        })
    })

    

  
  })*/

});


