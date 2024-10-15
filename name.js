const user1 = {
  name: "mohan",
  age: 28,
  adress: {
    street: "Gnapathynagar",
    town: "kodumudi",
    city: "erode",
  },
  phoneNUmber: ["9786986811", "987654123", "897945213265"],
};

const user2 = {
  name: "angauthu",
  age: 27,
  adress: {
    street: "car street",
    town: "erode",
    city: "erode1",
  },
  phoneNUmber: ["1234567890", "7894561230"],
};

const user3 = {
  name: "velu  ",
  age: 29,
  adress: {
    street: " let cross street",
    town: "perundurai ",
    city: "erode",
  },
  phoneNUmber: ["4561230789", "5632147890"],
};

const user4 = {
  name: "gobi  ",
  age: 30,
  adress: {
    street: " lfet cross street",
    town: "Sankari ",
    city: "Salem",
  },
  phoneNUmber: ["8508666416", "8778483017"],
};

function printUserDetails(user) {
  console.log(
    `he is ${user.name} , age is ${user.age} , their address is ${Object.values(
      user.adress
    ).join(", aghasdkjg" )} , and their phone number is ${user.phoneNUmber.join(
      ", "
    )} `
  );
}

printUserDetails(user1);
printUserDetails(user2);
printUserDetails(user3);
printUserDetails(user4);
