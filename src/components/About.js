import { videolinks } from "../data/Data";
const About = () => {
    return(
        <div id="about" className="p-2  flex flex-row w-full h-1/3">             
            {videolinks.map((link, index) => (
                <video key={index} class="w-1/2 border m-1 object-cover border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src={link.url} type="video/mp4"/>
                </video>        
            ))}
        </div>
    );
};

export default About