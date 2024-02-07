import front2 from "./front2.png"
function Hero1(){
    return(
        <>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={front2}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your itinerary and your 
        <br class="hidden lg:inline-block"/>map in one view
      </h1>
      <p class="mb-8 leading-relaxed">No more switching between different apps, tabs, and tools to keep track of your travel plans.</p>
      <div class="flex justify-center">
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Hero1;