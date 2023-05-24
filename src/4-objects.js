export function addInObject() {
  const user = {
    name: "Jhon",
  };
  const age = prompt("Input number from 15 to 150: ");

  user.age = age;

  const admin = { ...user };
  admin.role = "admin";
  console.log(user);
  return admin;
}
