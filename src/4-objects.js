export function addInObject() {
  const user = {
    name: "Jhon"
  };
  // let age = prompt('Input number from 15 to 150: ');
  const age = 25;
  user.age = age;
  console.log(user);

  const admin = user;
  admin.role = "admin";
  console.log(admin);
  return admin;
}
