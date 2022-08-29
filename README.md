## Auto insurance - API
- - -
### Description

Auto Insruance services consists of two endpoints, one to calculate premium and another one to post the user details.

### Setup
* Clone the repositories and install the dependencies
```bash
$ npm i
```
* start the server
```bash
$ npm start
```

### Sample env
* Clone the repositories and install the dependencies
```bash
AWS_ACCESS_KEY_ID = "XXXXXXX"
AWS_SECRET_ACCESS_KEY = "XXXXX"
AWS_DEFAULT_REGION = "ap-northeast-1"
COGNITO_USER_POOL_ID = "XXXXX"
COGNITO_APP_CLIENT_ID = "XXXXX"
```

---
**NOTE**

NodeJS version - `v14.19.3`

---
### API endpoints

- - -
#### Calculate premium
```
POST /api/v1/calculate
```
##### parameters
1. type: `'car' | 'bike'`
2. liscenceType: `'gold' | 'blue' | 'green'`
3. dob: `Date` 
4. estimateDistance: `Number`
5. towingService: `boolean`
6. lawyerService: `boolean`
##### response (200)
```
{
  premium: `xxx` }
}
```
###### response (!200):
```
{
	success: false,
	message: <err message>
}
```

#### Post User details
```
POST /api/v1/user
```
##### parameters
1. type: `'car' | 'bike'`
2. liscenceType: `'gold' | 'blue' | 'green'`
3. dob: `Date` 
4. estimateDistance: `Number`
5. towingService: `boolean`
6. lawyerService: `boolean`
7. name: `string`
8. address: `string`
9. liscenceNumber: `string`

##### response (200)
```
{
    "success": true,
    "message": "user saved successfully"
}
```

- - -
#### Database

* Database is running on AWS dynamoDB (NoSQL). The document structure is defined as below.

```
{
 "liscenceId": "123456789123",
 "address": "1-5-8",
 "age": 25,
 "dob": "2020-02-04T10:58:49.024Z",
 "estimateDistance": 3000,
 "lawyerService": false,
 "liscenceNumber": "xxxxxxxxxxxx",
 "liscenceType": "gold",
 "name": "sharath",
 "towingService": true,
 "type": "bike"
}
```

#### API Todo

- [x] Dynamodb
- [ ] Tests
