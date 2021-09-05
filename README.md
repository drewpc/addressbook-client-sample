## View Deployed Server
You can see a deployed version of this code at https://addressbook-client-sample.vercel.app

## Run Locally
Check out the repo and run the following commands, then open a web browser
and navigate to the URL listed in the output of the last command.
```shell
npm ci
npm run dev
```

## Architecture Decisions

1. I saved the API token in sourcecode intentionally, only for this project.  In a production
environment, I would evaluate the appropriate, secure place to store the token.
2. I chose to use NextJS as the server framework because it handles server side rendering,
client side rendering, and hands off between the two.  Therefore, the same code can be run
in both server and client sides.
3. There is one test suite included to show 100% code coverage of a single component.  This
is only to demonstrate testing capability; I do not intend this to be a fully tested application.
4. I used TypeScript in order to take advantage of static typing.
5. API calls are made through a framework that works on the client and server.  It also caches calls for future data.

## Test Results

```
 PASS  components/UserContactMethod.test.tsx
  User Contact Method component
    ✓ renders a phone contact (21 ms)
    ✓ renders an email contact (8 ms)
    ✓ renders an sms contact (3 ms)
    ✓ does not render a push notification contact (2 ms)

------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |   31.03 |       20 |   23.53 |   31.58 |                   
 components             |   51.43 |    33.33 |   33.33 |   52.94 |                   
  UserContactMethod.tsx |     100 |      100 |     100 |     100 |                   
  UserDetail.tsx        |       0 |      100 |       0 |       0 | 4-12              
  UserList.tsx          |       0 |        0 |       0 |       0 | 6-22              
  customFetcher.ts      |       0 |        0 |       0 |       0 | 3-18              
 pages                  |       0 |        0 |       0 |       0 |                   
  _app.tsx              |       0 |      100 |       0 |       0 | 7                 
  index.tsx             |       0 |        0 |       0 |       0 | 8-64              
------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   4 passed, 4 total
Time:        3.277 s
Ran all test suites.
```