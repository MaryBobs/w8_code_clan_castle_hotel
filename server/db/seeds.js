use hotel_bookings;

db.dropDatabase();

db.guests.insertMany([
  {
    name: "Eugene",
    email: "e@cc.com",
    status: false
  },
  {
    name: "Colin",
    email: "colin@cc.com",
    status: true
  }
]);
