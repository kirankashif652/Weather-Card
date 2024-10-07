// document.write("<h1> WETHER CARD <h1/>")


var userWeather = prompt(`Enter Your Favourite Weather: 
    eg:
       Sunny,
       Winter,
       Rainy,
       Stormy,
       Fall `)


var Weathers = ["Sunny" ,"Winter" ,"Rainy" , "Stormy", "Fall"]


if( userWeather === Weathers[0]){
    document.write(`
      
        <div class="card" style="width: 18rem;">
  <img src="./assets/images/54a50a42-206d-4aeb-9004-e938d6f79099.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 >SUNNY WETHER</h3>
    <p >"The sky is clear or mostly clear, with lots of sunlight and no precipitation."</p>
     <img class="img" src="./assets/images/summer.png" alt="">
    
  </div>
</div> `
    )

}
else if( userWeather === Weathers[1]) {
  document.write (`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/download (3).jpeg" alt="">
<div class="card-body">
  <h3 >COLD WETHER</h3>
  <p >"Winter is the time for comfort, for good food and warmth, for the touch of a friendly hand and for a talk beside the fire".</p>
   <img class="img" src="./assets/images/winter.png" alt="">
  
</div>
</div> `
  )

}
else if( userWeather === Weathers[2]) {
  document.write(`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/download (2).jpeg" class="card-img-top" alt="...">
<div class="card-body">
  <h3 >RAINY WETHER</h3>
  <p >"Raindrops paint the world in shades of gray, yet beneath the clouds, life flourishes."</p>
   <img class="img" src="./assets/images/rain.png" alt="">
  
</div>
</div> `
  )

}
else if( userWeather === Weathers[3]) {
  document.write(`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/download (4).jpeg"" class="card-img-top" alt="...">
<div class="card-body">
  <h3 >STORMY  WETHER</h3>
  <p >"Dark clouds gather, and the sky splits open, unleashing the raw power of nature."</p>
   <img class="img" src="./assets/images/1946229.png" alt="">
  
</div>
</div> `
  )

}
else if( userWeather === Weathers[4]) {
  document.write(`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/download (5).jpeg" class="card-img-top" alt="...">
<div class="card-body">
  <h3 >FALL WETHER</h3>
  <p >""Autumn is nature’s way of showing us that letting go can be beautiful."
"</p>
   <img class="img" src="./assets/images/autumn.png" alt="">
  
</div>
</div> `
  )

} else {
  document.write(`

    <div class="card" style="width: 18rem;">
<img class="error" class="image" src="./assets/images/6983265.webp" alt="...">`
  )
}