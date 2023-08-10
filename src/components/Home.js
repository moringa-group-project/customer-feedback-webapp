import { whatweoffer } from "../data/Data";
import { whyus } from "../data/Data";

const Home = () => {
    return(
           <section id="home" class="bg-white dark:bg-gray-900 mb-10">
                <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
                    <h2 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">We value your feedback for our products and services!</h2>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">We are here to provide easy access to Safaricom products and Services. We have built solutions that are tailor made to your needs. <br/> Any feedback you might have in regards to our offerings to you.Kindly let us know. Looking forward hearing from you.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#feedback" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="#about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Learn more
                        </a>  
                    </div>
                </div>
            
                <div className="flex flex-row w-full  justify-center ">
                    
                <div class="w-1/4 mr-10 ml-10 mb-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">What we offer:</h5>
                    
                    <ul class="space-y-5 my-7">
                        {whatweoffer.map((offer, index) => (
                        <li key={index} class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-primary dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{offer.name}</span>
                    </li>
                    ))}
                    </ul>
                    <a type="button" href="#feedback" class="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Give Feedback</a>
                </div>

                <div class="w-1/4 mr-10 ml-10 mb-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Why us?</h5>
                    
                    <ul class="space-y-5 my-7">
                        {whyus.map((reason, index) => (
                        <li key={index} class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-primary dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{reason.name}</span>
                    </li>
                    ))}
                    </ul>
                </div>

                </div>
        </section>

    );
};

export default Home