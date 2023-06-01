import React from 'react'
import beauty from "../assets/beauty.jpg"
import food from "../assets/food.png"
import music from "../assets/music.png"
import stones from "../assets/public.png"
import angel from "../assets/angel.png"
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] w-full m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur tempora odit explicabo porro, dicta sit placeat laboriosam sequi laudantium animi recusandae assumenda! Aliquid, odit esse accusantium veniam consequuntur quas velit.
        </p>
          {/* <div className='flex w-full flex-col'>
              <div className='flex gap-12 h-[50vh] object-contain mb-16'>
                  <ProjectItem  img={beauty} title="beauty app" />
                  <ProjectItem img={food} title="Food App" />
              </div>
              <div className='flex gap-12 h-[50vh] object-contain'>
                  <ProjectItem img={music} title="musisong" />
                  <ProjectItem img={stones} title="stones" />
              </div>

          </div> */}
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={beauty} title="Beauty app"/>
            <ProjectItem img={food} title="Food App"/>
            <ProjectItem img={music} title="MusicSong"/>
            <ProjectItem img={stones} title="Rocks"/>
        </div>
    </div>
  )
}

export default Projects