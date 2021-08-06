let users = [
  {
    id: "1",
    email: "hyunjoong12@naver.com",
    password: "$2b$12sdsamdlasdWQmsdlsmaJENOFI0d80137s6@!$s",
    username: "hyunjoong",
    nickname: "hyunla",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString };
  user.push(created);
  return created.id;
}
