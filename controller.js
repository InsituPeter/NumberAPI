const axios = require('axios')
const asyncWrapper= require("./Middleware/async")
const { createCustomError, CustomAPIError }=  require("./customErrors")
//function defining the prime no
const isPrime=(num)=>{
    if (num<2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i===0)
            return false
    }
    return true;

}

//function defining the perfect no
const isPerfect=(num)=>{
   let sum=0;
  for (let i=1 ; i<num; i++){
    if(num % i===0)
      sum +=i;
  }
  return sum === num;
}
//conditionality of the armstrong number
const isArmstrong =(num)=>{
   const digits= num.toString().split("").map(Number)
   const power = digits.length;
   const sum = digits.reduce((acc, d )=> acc + Math.pow(d, power), 0);
   return sum=== num;
}
//digitsun
const digitSum =(num)=>{
    return num.toString().split("").reduce((acc, d)=> acc + parseInt(d), 0)
}



const number_API= asyncWrapper(async(req, res, next)=>{
    const number= req.query.number
    const num = parseInt(number)

    if (isNaN(num)){
        return next(createCustomError(`This ${num} is not a number`), 500)
       
    }

    const funfactResponse = await axios.get(`http://numbersapi.com/${num}?json`)
    const funFact= funfactResponse.data.text;
    res.status(200).json({
      number : num,
      is_prime:isPrime(num),
      is_perfect:isPerfect(num),
      properties:[isArmstrong(num) ? "armstrong":"" , num%2===0? "even": "odd"].filter(Boolean),
      digit_sum:digitSum(num),
      fun_fact:funFact
    })})

module.exports= number_API