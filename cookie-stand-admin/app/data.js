const hours = [
  '6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm'
];

export { hours };


export const mockUser = {
  username: 'admin',
  password: 'password',
};

export const authenticateUser = (username, password) => {
  return (
    username === mockUser.username && password === mockUser.password
  );
};