function numbers (){
  let sum =0
  for (let i=200 ; i <=2700;i++){
    if(i%3===0 || i%5===0){
      sum =sum+i
    }
   
  
}
}




//////



numbers()

function sheft (){
  a=[2,1,6,4,-7]
 
}

sheft()


/////////////////////




function fizzBuzz (){
  let a=[]
  for(let i=1;i<=135;i++){
    if(i%3===0 && i%5===0){
      a.push("fizzbuzz")
    }else if(i%5===0){
      a.push("Buzz")
    }else if (i%3===0){
      a.push("fizz")
    }else{
      a.push(i)
    }
  }

}

fizzBuzz()

/////



function fibon (){
 let a=[0,1]
 let sum =0
 let sum2=0
 for (let i =0;i<=1000000;i++){
   if(sum<=1000000){
   sum = a[i]+a[i+1]
   a.push(sum)
  
   }
 }
 for(let i=0;i<a.length;i++){
   sum2=sum2+a[i]
 }
}
fibon()



//////////////


function removeNeg(){
  a=[1,-2,4,1]
  for (let i=0;i<a.length;i++){
    if(a[i]<0){
      a.splice(i,1)
    }
  }
}
removeNeg()

///////////////



function changeWord (){
  const a=['Man', 'I','Love','The','Matrix','Program'];
  const starValue="*"
a[5]=starValue.repeat(a[5].length)
}
changeWord()




