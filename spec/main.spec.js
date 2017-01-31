describe("Question 1", function() {
  it("should return a string containing the word 'funny'", function() {
    expect(funnyString()).toContain("funny");
  });
});

describe("Question 2", function() {
  it("should be able to return a number divided by two", function() {
    expect(divideByTwo(4)).toEqual(2);
  });
});

describe("Question 3", function() {
  it("should be able to return 'Hello' plus two names", function() {
    expect(greeting("John", "James")).toContain("Hello");
  });
});

describe("Question 4", function() {
  it("should be able to return the average of 6 numbers", function() {
    expect(avgNum(1, 2, 3, 4, 5, 6)).toEqual(3.5);
  });
});

describe("Question 5", function() {
  it("should be able to return the total price for cashew cans", function() {
    expect(totalPrice(2)).toEqual(12);
  });
});

describe("Question 6", function() {
  it("should be able to return the perimeter and area of a rectangle", function() {
    expect(area(1, 2)).toEqual(2);
    expect(perimeter(1, 2)).toEqual(6);
  });
});

describe("Question 7", function() {
  it("should be able to return a value that is a quarter of the arument provided", function() {
    expect(quarter(4)).toEqual(1);
  });
});

describe("Question 8", function() {
  it("should be able to return a the correct value based on the number of hours slept", function() {
    expect(sleepings(4)).toEqual("Not Enough");
    expect(sleepings(9)).toEqual("Enough");
  });
});

describe("Question 9", function() {
  it("should be able to return the year the person was born", function() {
    expect(ageToYear(1980)).toEqual(37);
  });
});

describe("Question 10", function() {
  it("should be able to return the year the person was born", function() {
    expect(addDigits(345)).toEqual(12);
  });
});

describe("Question 11", function() {
  it("should be able to return the total from the piggy bank in dollars", function() {
    expect(piggyBank(10,10,10,10)).toEqual("$4.10");
  });
});

describe("Advanced Track", function() {
  describe("Part A", function() {
    it("should return the phone number without the 1", function() {
      expect(cleanTheNumber(18005555555)).toEqual('8005555555');
    });
    it("should catch if phone number has 10 digits or not", function() {
      expect(cleanTheNumber(180055555555)).toEqual('Bad');
    });
  });

  describe("Part B", function() {
    var arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
    it("should return the number of numbers in the provided array", function() {
      expect(isNumber(arrayOfAllTheThings)).toEqual(4);
    });
  });

  describe("Part C", function() {
    it("should return the random result of two six sided dice", function() {
      expect(twoDiceResult()).toBeLessThan(13);
      expect(twoDiceResult()).toBeGreaterThan(0);
    });
  });

  describe("Part D", function() {
    it("should return the count of how many times it took to get to 40", function() {
      expect(!isNaN(howManyTimes())).toBe(true);
    });
  });

  describe("Part E", function() {
    it("should return true or false based whether the argument was a leap year or not", function() {
      expect(leapYear(1900)).toBe(false);
    });
  });
})
