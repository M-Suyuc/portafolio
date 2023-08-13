import { CssSvg, HtmlSvg, JavaScriptSvg, ReactSvg, ReduxSvg, SupabaseSvg, TailwindSvg } from './SVGIcons'

function Skills () {
  const width = 50

  const LogosSkills = [
    {
      title: 'HTML',
      img: (<HtmlSvg width={width} />)
    },
    {
      title: 'CSS',
      img:
     (<CssSvg width={width} />)
    },
    {
      title: 'JavaScript',
      img:
     (<JavaScriptSvg width={width} />)
    },
    {
      title: 'Tailwind',
      img:
     (<TailwindSvg width={width} />)
    },
    {
      title: 'React.js',
      img:
     (<ReactSvg width={width} />)
    },
    {
      title: 'Redux Toolkit',
      img:
     (<ReduxSvg width={width} />)
    },
    {
      title: 'Supabase',
      img:
     (<SupabaseSvg width={width} />)
    }
  ]
  return (
    <section id='skills' className='pt-8 md:pt-[4.5rem] pb-16'>
      <h3 className='title-section pb-4'>Tecnologías que uso</h3>
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {LogosSkills.map((logo, i) => (
          <div key={i} className='group flex max-w-xs flex-col items-center space-y-2 rounded-lg border p-4  shadow-[0px_0px_15px_rgba(0,0,0,.2)]  border-transparent bg-white/5'>
            <div className='group-hover:-rotate-12 transition-all duration-200 aspect-square group-hover:drop-shadow-[0_0_2rem_#006fee] group-hover:scale-125'>{logo.img}</div>
            <h3 className=' dark:text-[#a1a1aa] text-[#11181C] font-medium break-words'>{logo.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
