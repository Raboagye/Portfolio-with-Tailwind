import React from 'react'
import WorkItem from './Work'

const data = [
  {
    year: 2022,
    title: "Content Creator",
    duration: " 1 years",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quos rem? Eum minima saepe omnis excepturi illo officiis quibusdam nisi est vitae, nulla a ratione corrupti culpa aliquid optio totam ad? Obcaecati iste illum magnam esse repellendus! Accusantium in reiciendis, a modi, corrupti ea sint optio aliquid esse molestias ad."
  },
  {
    year: 2021,
    title: "Frontend Developer",
    duration: " 2 years",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quos rem? Eum minima saepe omnis excepturi illo officiis quibusdam nisi est vitae, nulla a ratione corrupti culpa aliquid optio totam ad? Obcaecati iste illum magnam esse repellendus! Accusantium in reiciendis, a modi, corrupti ea sint optio aliquid esse molestias ad."
  },
  {
    year: 2020,
    title: "Backend Developer",
    duration: " 3 years",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quos rem? Eum minima saepe omnis excepturi illo officiis quibusdam nisi est vitae, nulla a ratione corrupti culpa aliquid optio totam ad? Obcaecati iste illum magnam esse repellendus! Accusantium in reiciendis, a modi, corrupti ea sint optio aliquid esse molestias ad."
  },
  {
    year: 2019,
    title: "App developer",
    duration: " 1 years",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quos rem? Eum minima saepe omnis excepturi illo officiis quibusdam nisi est vitae, nulla a ratione corrupti culpa aliquid optio totam ad? Obcaecati iste illum magnam esse repellendus! Accusantium in reiciendis, a modi, corrupti ea sint optio aliquid esse molestias ad."
  },
]

const Work = () => {

  

  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {
        data.map((item, idk) => (
          <WorkItem key={idk} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))
      }

    </div>
  )
}

export default Work