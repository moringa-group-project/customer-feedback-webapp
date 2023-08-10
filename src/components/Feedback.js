import { whatweoffer } from "../data/Data";
import { npsscore } from "../data/Data";

const Feedback = () => {
    return(
        <div id="feedback" className="w-full flex flex-row justify-center " >
        <div class=" p-10 m-10 w-4/5 ">
        <p class="mb-4 font-bold tracking-tight leading-none text-gray-900 md:text-5xl text-1xl dark:text-white text-center">Thanks for taking the time to give us feedback! </p>
        <form>
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required/>
        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@email.com" required/>
        </div>
        <div class="mb-6">
            <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+254123456789" required/>
        </div>
        
        
        <div class="flex flex-row w-full mb-5 ">
            
            <div class="mr-10 p-3">
                <p class="mb-2"> Choose services to give feedback on: </p>
                {whatweoffer.map((offer, index) => (
                    <div key={index}>
                        <input id="service-chosen" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="service-chosen" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{offer.name}</label>
                    </div>                    
                    ))}
            </div>

            <div class="mr-10 p-3">
                <p> Choose nps score to give: </p>
                {npsscore.map((score, index) => (
                    <div key={index}>
                        <input id="nps-chosen" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="nps-chosen" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{score.value}</label>
                    </div>                    
                    ))}
            </div>

        </div>
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="terms-and-condition" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
            </div>
            <label for="terms-and-condition" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the terms and conditions.</label>
        </div>
        <button type="submit" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">Submit</button>
        </form>
        </div>

        </div>
    );
};

export default Feedback