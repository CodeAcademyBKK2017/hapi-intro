const firstUserHandler = require('../handlers/first-user');
const userDataHandler = require('../handlers/user-data');

test('GET: /first-user - Should be response Teresa', () => {    
  const request = {query: {}};
  const reply = jest.fn();

  firstUserHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('Teresa');
});

test('GET: /first-user?sort=true - Should be response John', () => {
  const request = {query: {sort: 'true'}};
  const reply = jest.fn();

  firstUserHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('John');
});

test('GET: /first-user?sort=false - Should be response Teresa', () => {
  const request = {query: {sort: false}};
  const reply = jest.fn(); '';

  firstUserHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('Teresa');
});

test('GET: /user-data?user=Teresa - Should be response data of Teresa', () => {
  const request = {query: {user: 'Teresa'}};
  const reply = jest.fn();

  userDataHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('This contains metadata for TERESA\nSample data for TERESA\n67 53 98 23 121\n12 23 43 12 45');
});

test('GET: /user-data?user=teresa - Get User data with ignore case.', () => {
  const request = {query: {user: 'teresa'}};
  const reply = jest.fn();

  userDataHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('This contains metadata for TERESA\nSample data for TERESA\n67 53 98 23 121\n12 23 43 12 45');
});

// Failure case

test('GET: /user-data - without query', () => {
  const request = {query: {user: null}};
  const reply = jest.fn();

  userDataHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('User not found.');
});

test('GET: /user-data?user=Teresa - Should be response data of User not found', () => {
  const request = {query: {user: 'Teresaaaaaaaa'}};
  const reply = jest.fn();

  userDataHandler(request, reply);
  expect(reply).toHaveBeenCalledWith('User not found.');
});