# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "destroying"
UserCart.destroy_all
UserPart.destroy_all
User.destroy_all
Part.destroy_all

puts 'Seeding'


part = Part.create(title: 'tires', price: 50, quantity: 1, year: 2014, make: 'Lexus', model: 'LX470', image: ' ', description: 'tires')

user = User.create(name: 'Aaron', username: 'AaronDski', password_digest: 'pass')

user_part = UserPart.create(title: 'tires', price: 500, quantity: 4, year: 2000, make: 'Lexus', model: 'LX470', image: ' ', description: 'tires', part_id:part.id, user_id:user.id) 
puts "done"