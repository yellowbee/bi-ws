/**
 * Created by bhuang on 12/4/17.
 * Holds all the routes needed.
 */

let express = require('express');
let router = express.Router();

let auth = require('./auth.js');
let user = require('./users.js');
let stockIdx = require('./stock-index.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
router.post('/api/user', user.service.create);

/**
 * client sends the token in the request; if the token
 * is valid and is not expired, respond the username, fullname
 * and token back; otherwise, respond with FAILURE.
 */
router.get('/api/user/renew/:token', user.service.renew);

router.get('/api/projects', user.service.getProjects);
router.get('/api/projects/:userName', user.service.getProjectsByUserName);

router.get('/api/ashare/:code', user.service.getCompany);
router.get('/api/roe/:code', user.service.getRoeByCompany);
router.get('/api/roes/:codesstr', user.service.getRoesByCompanies);
router.get('/api/das/:codesstr', user.service.getDAsByCompanies);

router.get('/api/idx-a', stockIdx.getIdxA);
router.get('/api/idx-b', stockIdx.getIdxB);
router.get('/api/idx-md-sm', stockIdx.getIdxMdSm);
/*router.get('/api/idx-sh-a', user.service.getShanghaiA);
router.get('/api/idx-sh-b', user.service.getShanghaiB);
router.get('/api/idx-startup', user.service.getStartup);
router.get('/api/idx-sz-a', user.service.getShenzhenA);
router.get('/api/idx-sz-b', user.service.getShenzhenB);
router.get('/api/idx-sz-main-a', user.service.getShenzhenMainA);*/

router.get('/api/project-detail/:id', user.service.getProjectDetail);
router.get('/api/profile/:userName', user.service.getProfile);

router.post('/api/project', user.service.postProject);
router.post('/api/project/comment/:projId', user.service.postProjectComment);
router.post('/api/profile', user.service.postProfile);
router.delete('/api/image/:public_id([^/]+/[^/]+)', user.service.deleteImage);

/*
 * Routes that can be accessed only by autheticated users
 */
//router.get('/api/v1/products', products.getAll);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
/*
router.get('/api/v1/admin/users', user.service.getAll);
router.post('/api/v1/admin/user/', user.service.create);
router.put('/api/v1/admin/user/:id', user.service.update);
router.delete('/api/v1/admin/user/:id', user.service.delete);
*/

module.exports = router;
