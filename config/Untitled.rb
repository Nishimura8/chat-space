def fizz_buzz
    num = 1
    while (num <= 100) do
      if (num % 3 == 0) && (num % 5 == 0)
        puts "FizzBuzz"
      else
        f (num % 3) == 0
        puts "Fizz"
      else
        if (num % 5) == 0
        puts "Buzz"
      else
        puts num
      end

      num = num + 1
    end
  end

  fizz_buzz
