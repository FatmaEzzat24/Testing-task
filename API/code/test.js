const request = require('supertest');


describe('api testing', function() {
    it('should create user successfully', function(done) {
      request('http://localhost:3000')
        .post('/api/v1/users')
        .send({
            "name": "user",
            "email": "user@gmail.com",
            "password": "user123"
        })
        .set('Accept', 'application/json')
        .set('Content-Type','application/json')
        .expect(function(res) {
            res.body.message = 'User registered with success';
            res.body.token = 'eyJhbGciOiJI...';
          })
        .expect(200,done);
    });
    it('should authenticate user', function(done) {
        request('http://localhost:3000')
          .post('/api/v1/auth')
          .send({
              "email": "user@gmail.com",
              "password": "user123"
          })
          .set('Accept', 'application/json')
          .set('Content-Type','application/json')
          .expect(function(res) {
              res.body.token = 'eyJhbGciOiJI...';
            })
          .expect(200,done);
      });

      it('should get user by token', function(done){
        request('http://localhost:3000')
        .get('/api/v1/users')
        .set('Authorization','eyJhbGciOiJI...')
        .set('Content-Type','application/json')
        .expect(function(res) {
            res.body.id = 46643;
            res.body.name = 'user';
            res.body.email = 'user@gmail.com';
            res.body.password = 'user123';
            res.body.imageUrl = 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
          })
        .expect(200,done);
        
      });

      it('should update user successfully', function(done) {
        request('http://localhost:3000')
          .patch('/api/v1/users')
          .send({
            
            "name": "newName",
            "email": "new_email@gmail.com",
            "password": "newpassword123"
          })
          .set('Accept', 'application/json')
          .set('Content-Type','application/json')
          .set('Authorization','eyJhbGciOiJI...')
          .expect(function(res) {
              res.body.message = 'User updated with success';
            })
          .expect(200,done);
      });

      it('should delete user by token', function(done){
        request('http://localhost:3000')
        .delete('/api/v1/users')
        .set('Authorization','eyJhbGciOiJI...')
        .set('Content-Type','application/json')
        .expect(function(res) {
            res.body.message = 'User deleted with success';
          })
        .expect(200,done);
        
      });
      it('should delete all users successfully', function(done) {
        request('http://localhost:3000')
          .delete('/api/v1/all-users')
          .send({
            "key_admin": "keyadmin123"
          })
          .set('Accept', 'application/json')
          .set('Content-Type','application/json')
          .expect(function(res) {
              res.body.message = 'Users deleted with success';
            })
          .expect(200,done);
      });


  });