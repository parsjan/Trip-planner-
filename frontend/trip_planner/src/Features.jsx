import features1 from "./features1.png"
import features2 from "./features2.png"
import features3 from "./features3.png"
function Features(){
return(
<>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features to replace all your other tools</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center  bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
          <img src={features1} />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Checklists for anything</h2>
          <p class="leading-relaxed text-base">Stay organized with a packing list, to-do list, shopping list, any kind of list.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center  bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
          <img src={features2} />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Expense tracking and splitting</h2>
          <p class="leading-relaxed text-base">Keep track of your budget and split the cost between your tripmates.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
          <img src={features3} />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Get maps support for planning</h2>
          <p class="leading-relaxed text-base">Get google maps and services enables you to find the palces and there routes </p>
          
        </div>
      </div>
    </div>
    
  </div>
</section>

        
</>
)
}

export default Features;