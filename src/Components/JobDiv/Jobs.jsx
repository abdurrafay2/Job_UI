import { BiTimeFive } from 'react-icons/bi'
import tnt from '../../Assets/tnt.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'

const Data = [
  {
    id: 1,
    image: tnt,
    title: 'Web Developer',
    time: 'Now',
    location: 'Pakistan',
    desc: 'Web developer required for The novus Tech in karachi, must be good in front-end',
    company: 'TheNovusTech',
  },
  {
    id: 2,
    image: logo3,
    title: 'Back-End Developer',
    time: '1Month',
    location: 'Croatia',
    desc: 'Backend-Developer required for The tech in Croatia, must be good in Backend',
    company: 'The Tech',
  },
  {
    id: 3,
    image: logo4,
    title: 'Graphic Designer',
    time: 'Now',
    location: 'Pakistan',
    desc: 'Graphic Designer required for Desedin in karachi, must be good in PhotoShop',
    company: 'Desedin',
  },
  {
    id: 4,
    image: logo5,
    title: 'Video Editor',
    time: 'Now',
    location: 'Pakistan',
    desc: 'Video Editor required for Walzix in karachi, must be good in After-effects',
    company: 'Walzix Digitals',
  },
  {
    id: 5,
    image: logo6,
    title: '.Net Developer',
    time: '1 Week',
    location: 'USA',
    desc: '.Net Developer required for KhairiTech in Michigan, must be good in tech',
    company: 'KhairiTech',
  },
  {
    id: 6,
    image: logo6,
    title: '.Net Developer',
    time: '1 Week',
    location: 'USA',
    desc: '.Net Developer required for KhairiTech in Michigan, must be good in tech',
    company: 'KhairiTech',
  },
  {
    id: 7,
    image: logo6,
    title: '.Net Developer',
    time: '1 Week',
    location: 'USA',
    desc: '.Net Developer required for KhairiTech in Michigan, must be good in tech',
    company: 'KhairiTech',
  },
  {
    id: 8,
    image: logo6,
    title: '.Net Developer',
    time: '1 Week',
    location: 'USA',
    desc: '.Net Developer required for KhairiTech in Michigan, must be good in tech',
    company: 'KhairiTech',
  },
]
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounder[10px] hover:bg-blueColor shadow-lg shadow-greyish-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>

                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs
