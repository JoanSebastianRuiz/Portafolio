import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const PortfolioInfo = () => {
  return(
    <div className="flex  items-center mx-16 my-14">
      

      <div className="flex justify-center w-1/2">

        <GoalCard 
        name="🔮 Leading Digital Innovation" 
        description="I aspire to be a recognized Full Stack leader, driving impactful projects that harness technology to transform businesses and lives."/>

      </div>

      <div className="flex flex-col justify-evenly w-1/2 gap-y-14">
        <GoalCard 
        name="🤝 Collaboration for Success" 
        description="I seek to contribute to multidisciplinary teams with my problem-solving and adaptability skills."/>

        <div className='flex justify-end'>
        <GoalCard 
        name="🧠 Master New Tech" 
        description="I focus on learning and mastering emerging technologies to deliver increasingly efficient, innovative, and high-quality solutions."/>

        </div>
        
      </div>

      
      
</div>

  );
};


const GoalCard = ({name, description})=>{
  return(
    <div className="bg-white shadow-lg rounded-lg border-2 border-gray-800 w-3/4 min-w-60 ">
      <div className=' flex p-1 gap-x-1'>
        <FontAwesomeIcon className='text-gray-800 w-3' icon={faCircle}/>
        <FontAwesomeIcon className='text-gray-800 w-3' icon={faCircle}/>
        <FontAwesomeIcon className='text-gray-800 w-3' icon={faCircle}/>
      </div>
 
      <div className='border-t-2 border-gray-800 w-full'></div>
      <h3 className="font-mosk700 text-lg my-2 px-4 text-gray-800">{name}</h3>
      <p className='px-4 pb-4 text-justify font-mosk500 text-gray-800'>{description}</p>
    </div>

  );
}