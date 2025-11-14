#you have a set of numbers and you want to find two numbers that add up to a specific target sum.
#[1, 2, 3, 4, 5], target sum = 8

def two_sum(numbers,target):
    seen = {}

    for i in range(len(numbers)):
        current = numbers[i]
        needed = target - current

        if needed in seen:
            return [seen[needed],i]
        
        seen[current]=i