const projectorPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const projector = Math.random() >0.5;
        if(projector){
            resolve("Projector rented successfully");
        }else{
            reject("Error : Projectors out of stock");
        }
    },1000);
});

const pizzasPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const pizzas = Math.random() >0.5;
        if(pizzas){
            resolve("Pizzas delivered at time");
        }else{
            reject("Error :Pizzas not delivered on time");
        }
    },2000);
});

const friendsPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const friends = Math.random() >0.5;
        if(friends){
            resolve("Both friends available");
        }else{
            reject("Error :Both friends not available");
        }
    },3000);
});

Promise.all([projectorPromise,pizzasPromise,friendsPromise])
.then((results)=>{
    console.log(results);
});
.catch((err)=>{
    console.log(err)
});