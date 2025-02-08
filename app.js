const express= require("express")
const cors = require("cors")
const app= express()

const axios = require("axios")
const PORT=process.env.PORT|| 3000

const notFound= require("./notFound")

//Middleware
app.use(cors())
app.use(express.json())


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
//digitsum
const digitSum =(num)=>{
    return num.toString().split("").reduce((acc, d)=> acc + parseInt(d), 0)
}



app.get("/",  async(req, res)=>{
    const number= req.query.number
    const num = parseInt(number)

    if (isNaN(num)){
        return res.status(400).json({number, error:true})
       
    }

   try{ const funfactResponse = await axios.get(`http://numbersapi.com/${num}?json`)
   const funFact= funfactResponse.data.text;
   res.status(200).json({
     number : num,
     is_prime:isPrime(num),
     is_perfect:isPerfect(num),
     properties:[isArmstrong(num) ? "armstrong":"", num%2===0? "even": "odd"].filter(Boolean),
     digit_sum:digitSum(num),
     fun_fact:funFact
   })}
catch(error){
res.send("Cannot retrieve funfact")
}

}
)



    app.use(notFound)

app.listen(PORT, ()=>console.log(`Server is listening on ${PORT}`))
