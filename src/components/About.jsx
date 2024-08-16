import React from 'react'
import AboutImage from '../assets/aboutme-image.jpg'
const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
<div className='container mx-auto px-8 md:px-16 lg:px-24'>
<h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>

<div className='flex flex-col md:flex-row items-center md:space-x-12'>
    <img src={AboutImage} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>

<div className='flex-1'>
     <p className='text-lg mb-8'>
       
I’m a dedicated front-end developer with skills in HTML, CSS, JavaScript, and React. As a fresher, I can handle front-end tasks, creating responsive and user-friendly interfaces. I’m eager to learn, adapt, and collaborate, bringing fresh ideas to projects while continuously growing my expertise in a dynamic environment.
    </p>
<div className='space-y-4'>
    
    {/* Display the line of HTML and CSS Scale */}

    <div className='flex items-center'>
<label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
<div className='grow bg-gray-800 rounded-full h-2.5'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-11/12'>
</div>
</div>
</div>

{/* End Of HTML and CSS Skill */}


 {/* Display the line of React Js Skill */}

 <div className='flex items-center'>
<label htmlFor="htmlandcss" className='w-2/12'>React Js</label>
<div className='grow bg-gray-800 rounded-full h-2.5'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-9/12'>
</div>
</div>
</div>

{/* End Of React Skill */}

 {/* Display the line of Node JS Scale */}

 <div className='flex items-center'>
<label htmlFor="htmlandcss" className='w-2/12'>Node Js</label>
<div className='grow bg-gray-800 rounded-full h-2.5'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-6/12'>
</div>
</div>
</div>

{/* End Of Node JS Skill */}


</div>

<div className='mt-12 flex justify-between text-center'> 
    {/* graduated details */}
    <div>
        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> 
            +2 
        </h3>
        <p>Graduated</p>
    </div>
{/* End Graduated */}

{/* project details */}
<div>
        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> 
            +3
        </h3>
        <p>Local Project</p>
    </div>

{/* end project */}


{/* experience details */}
<div>
        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> 
          Fresher
        </h3>
        <p>No experience yet</p>
    </div>

{/* experience end */}

</div>



    </div>
</div>
</div>

    </div>
  )
}

export default About