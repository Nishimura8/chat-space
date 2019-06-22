FactoryBot.define do
    factory :comment do
      content {Faker::Lorem.sentence}
      image {File.open("#{Rails.root}/projects/images/GettyImages-522585140.jpg")}
      user
      group
    end
  end