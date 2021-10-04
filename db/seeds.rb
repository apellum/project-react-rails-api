# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.create([
    { name: "Moon Pie", category: "Baked Good", price: 1.50, rating: 10},
    { name: "Skittles", category: "Candy", price: 1.70, rating: 7},
    { name: "Snickers", category: "Chocolate", price: 2.00, rating: 6},
    { name: "Takis", category: "Chips", price: 1.30, rating: 8},
    { name: "Doritos Cool Ranch", category: "Chips", price: 1.50, rating: 10},
    { name: "Cheetos", category: "Chips", price: 1.50, rating: 7},
    { name: "Oreos", category: "Caked Goods", price: 1.80, rating: 8},
    { name: "Hot Cheetos", category: "Chips", price: 2.50, rating: 6},
    { name: "Hot Fries", category: "Chips", price: 1.10, rating: 4},
    { name: "Gummy Bears", category: "Candy", price: 2.20, rating: 7},
    { name: "Sour Gummy Worms", category: "Candy", price: 3.00, rating: 9},
    { name: "Twizzlers", category: "Candy", price: 1.80, rating: 6},
    { name: "Hersheys Chocolate Bar", category: "Chocolate", price: 2.50, rating: 5},
    { name: "Babe Ruth", category: "Chocolate", price: 1.15, rating: 4}
])

User.create([
    { username: "drewp", password_digest: "drewspassword"}
])

Review.create([
    { snack_id: 1, user_id: 1, content: "Moon Pies are amazing 10/10"}
])