import React from 'react'

const page = () => {
  return(
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-44 h-44 rounded-full mx-auto" src="/noman.jpg" alt="Mian Noman Aslam" width="584" height="712"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page