import calling from "./calling.png"
import mail from "./mail.png";
import linkedin from "./linkedin.webp";
import github from "./github.png";
import location from "./location.jpg";


function App() {
  return (
    <div>
         <div className="sm:h-full sm:w-10/12 sm:mx-auto 2xl:h-full 2xl:w-2/3 2xl:mx-1uto xl:h-full xl:w-2/3 xl:mx-auto lg:h-full lg:w-2/3 lg:mx-auto md:h-full md:w-2/3 md:mx-auto border-2 border-black mt-3 mb-4">
            <div className="mt-3">
                <h1 className="xl:text-4xl md:text-2xl sm:text-xl text-center">L VIGNESH</h1>
                <hr className="h-0.5 w-10/12 my-6 sm:my-3 bg-gray-200 border-0 rounded dark:bg-gray-700 mx-auto"></hr>
                <div className="flex flex-row">
                     <div className="flex flex-col flex-1">
                         <div className="ml-5 flex-col">
                            <h1 className="sm:text-xl xl:text-3xl md:text-2xl tracking-widest">CONTACT</h1>
                            <div className="flex sm:mt-0 xl:mt-4 md:mt-3">
                              <img src={calling} className="sm:w-5 sm:h-5 xl:w-7 xl:h-7 md:w-5 md:h-5"></img><span>+91 6303763679</span>
                            </div>
                            <div className="flex xl:mt-4 md:mt-3 sm:mt-0">
                              <img src={mail} className="sm:w-5 sm:h-5 xl:w-7 xl:h-7 md:w-5 md:h-5"></img><span>vickyvital6@gmail.com</span>
                            </div>
                            <div className="flex xl:mt-4 md:mt-3 sm:mt-0">
                              <img src={linkedin} className="sm:w-5 sm:h-5 xl:w-7 xl:h-7 md:w-5 md:h-5"></img><span className="pl-2"><button className="border-2 rounded-full border-slate-600 hover:border-sky-500 text-sm p-1 hover:bg-black hover:text-white"><a href="https://www.linkedin.com/in/l-vignesh-2003vi" target="_blank">Visit my LinkedIn</a></button></span>
                            </div>
                            <div className="flex xl:mt-4 md:mt-3 sm:mt-0">
                              <img src={github} className="sm:w-5 sm:h-5 xl:w-7 xl:h-7 md:w-5 md:h-5"></img><span className="pl-2"><button className="border-2 rounded-full border-slate-600 hover:border-sky-500 text-sm p-1 hover:bg-black hover:text-white"><a href="https://github.com/vicky-tyson" target="_blank">Visit my GitHub</a></button></span>
                            </div>
                            <div className="flex xl:mt-4 md:mt-3 sm:mt-0">
                              <img src={location} className="sm:w-5 sm:h-5 xl:w-7 xl:h-7 md:w-5 md:h-5"></img><span className="pl-2">K.R Palli, Chittoor, Andhra Pradesh.</span>
                            </div>
                         </div>
                         <hr className="h-0.5 w-11/12 mx-auto xl:my-8 md:my-3 border-0 rounded dark:bg-gray-700"></hr>
                         <div className="ml-5 flex-col">
                          <div>
                            <h1 className="xl:text-3xl tracking-widest md:text-2xl">SKILLS</h1>
                            <ol className="xl:mt-5 md:mt-2 list-disc xl:text-xl md:text-base">
                              <li className="ml-5">Front-End Development</li>
                              <li className="ml-5">React.js</li>
                              <li className="ml-5">Tailwind CSS</li>
                              <li className="ml-5">Git & GitHub</li>
                              <li className="ml-5">HTML</li>
                              <li className="ml-5">CSS - Cascading Style Sheet</li>
                              <li className="ml-5">JavaScript</li>
                              <li className="ml-5">C - Language</li>
                            </ol>
                          </div>
                         </div>
                         <hr className="h-0.5 w-11/12 mx-auto xl:my-8 md:my-3 border-0 rounded dark:bg-gray-700"></hr>
                         <div>
                         <div className="ml-5 flex-col">
                            <h1 className="xl:text-3xl tracking-widest md:text-2xl">EDUCATION</h1>
                            <div>
                              <h3 className="xl:text-xl xl:mt-5 md:mt-1 md:text-base font-bold">BCA</h3>
                              <p className="font-medium mt-1">Vijayam Science and Arts Degree College</p>
                              <p className="font-normal">2021 - 2024</p>
                            </div>
                            <div>
                              <h3 className="xl:text-xl xl:mt-5 md:mt-1 md:text-base font-bold">INTERMEDIATE</h3>
                              <p className="font-medium mt-1">Sri Vivekananda Junior College</p>
                              <p className="font-normal">2019 - 2021</p>
                            </div>
                            <div>
                              <h3 className="xl:text-xl xl:mt-5 md:mt-1 md:text-base font-bold">SSC</h3>
                              <p className="font-medium mt-1">Camford English High School</p>
                              <p className="font-normal">2019</p>
                            </div>
                         </div>
                        </div>
                        <hr className="h-0.5 w-11/12 mx-auto xl:my-8 md:my-3 border-0 rounded dark:bg-gray-700"></hr>
                         <div className="ml-5 flex-col mb-5">
                            <h1 className="xl:text-3xl tracking-widest md:text-2xl">LANGUAGES</h1>
                            <ol className="xl:mt-5 list-disc xl:text-xl md:mt-3 md:text-base">
                                <li className="ml-5">English</li>
                                <li className="ml-5">Tamil</li>
                                <li className="ml-5">Telugu</li>
                                <li className="ml-5">Hindi</li>
                            </ol>
                         </div>
                     </div> 
                     <div className="flex flex-col flex-1 mr-2">
                         <div>
                          <h1 className="xl:text-3xl tracking-widest md:text-2xl">OBJECTIVE</h1>
                          <p className="xl:mt-2 xl:leading-relaxed md:mt-0 md:leading-tight md:text-base sm:leading-none">As a recent BCA graduate, I possess a strong aptitude for Problem-solving and Programming and i'm eager to explore the vast opportunities available in IT industry. My primary objective include leveraging my academic knowledge, learning from experienced professionals, and pursuing innovation through collaboration and exploration. Through these endeavours, I aspire to challenge myself, exceed expectations, and make meaningful contributions to the field.</p>
                         </div> 
                         <hr className="h-0.5 w-11/12 xl:my-8 md:my-3 border-0 rounded dark:bg-gray-700"></hr>  
                          <div className="xl:mt-3 md:mt-0">
                                <h2 className="xl:text-3xl md:leading-tight tracking-widest md:text-2xl sm:text-xl">PROJECTS</h2>
                                <ol className="xl:mt-5 list-disc md:mt-1 sm:mt-0 sm:leading-none">
                                      <li className="ml-4 xl:mt-2 md:mt-0 sm:mt-0">Built a Tic-Tac-Toe Game using React.js, with a mesmerizing UI. This project showecases my proficiency in front-end Develoment using React.js and highlights my ability to create engaging user experience. <button className="xl:border-2 md:border-1 border-black rounded-full text-white bg-black xl:text-sm hover:bg-white hover:text-black xl:p-1 md:p-0 md:text-xs"><a href="https://vicky-tyson.github.io/React-tic-tac-toe/">Visit and Play</a></button></li>
                                      <li className="ml-4 xl:mt-2 md:mt-0 sm:mt-0">I've Built an To-Do List App using React.js, with an amazing UI This project serves as a testament to my proficiency in front-end Development and highlights my ability to create practical and user-friendly web applications. <button className="xl:border-2 md:border-1 border-black rounded-full text-white bg-black xl:text-sm hover:bg-white hover:text-black xl:p-1 md:p-0 md:text-xs"><a href="https://vicky-tyson.github.io/React-ToDo/">Visit and Use</a></button></li>
                                      <li className="ml-4 xl:mt-2 md:mt-0 sm:mt-0">A dynamic resume create entirely using React.js and Tailwindcss. This groundbreaking project reflects not only my proficiency in front-end development but also my commitment to pushing the boundaries of traditional resume formats to showcase my skills and experiences in a truly captivating and interactive manner. <button className="xl:border-2 md:border-1 border-black rounded-full text-white bg-black xl:text-sm hover:bg-white hover:text-black xl:p-1 md:p-0 md:text-xs pointer-events-none">You're Already on the Page</button></li>
                                 </ol>
                           </div>
                           <hr className="h-0.5 xl:my-8 md:my-3 border-0 rounded dark:bg-gray-700"></hr>
                           <div>
                              <h1 className="xl:text-3xl tracking-widest md:text-2xl">SOFT SKILLS</h1>
                              <ol className="xl:mt-5 list-disc xl:text-xl md:mt-0 md:text-base">
                                <li className="ml-5 xl:mt-2 md:mt-0">Problem Solving</li>
                                <li className="ml-5 xl:mt-2 md:mt-0">Good Communication</li>
                                <li className="ml-5 xl:mt-2 md:mt-0">Adaptability</li>
                                <li className="ml-5 xl:mt-2 md:mt-0">Team Work</li>
                                <li className="ml-5 xl:mt-2 md:mt-0">Time Management</li>
                              </ol>
                           </div>
                     </div>
                </div>
            </div>
         </div> 
    </div>
  );
}

export default App;