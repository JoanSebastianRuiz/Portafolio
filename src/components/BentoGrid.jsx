import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from '@mui/material';

export const BentoGrid = ({projects}) =>{
    const isMobile = useMediaQuery('(min-width:768px)');
    const isLg = useMediaQuery('(min-width:1024px)');
    return(
        <>
            {isMobile? (
                <div className="h-screen w-full flex justify-center items-center pt-20 px-6 pb-6">
                    <div className="grid h-full w-full grid-cols-10 grid-rows-10 gap-4 ">

                        {/* Elemento 1 */}
                        {isLg? (
                            <div className="col-span-6 row-span-5 bg-indigo-100 rounded-3xl flex flex-col gap-4 lg:px-16 justify-center xl:px-16">
                                <h2 className='font-mosk700 md:text-xl lg:text-xl xl:text-3xl flex justify-center'>{projects[1].name}</h2>

                                <div className='flex gap-6'>
                                    <div className='flex flex-col justify-between '>
                                        
                                        <p className='md:font-mosk400 lg:font-mosk500 md:text-base lg:text-base text-justify '>{projects[1].description}</p>

                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <FontAwesomeIcon className='md:text-3xl cursor-pointer' icon={faGithub} onClick={()=>window.open(projects[1].repository,"_blank")} />

                                                {projects[1].demo && <FontAwesomeIcon className='md:text-3xl cursor-pointer' icon={faEye} onClick={()=>window.open(projects[1].demo,"_blank")} />}
                                            </div>
                                        
                                            <div className='flex gap-2'>
                                                {projects[1].technologies.map((element, i)=>{
                                                    return(
                                                        <img key={i+1} src={element} className='md:w-8'/>
                                                    );
                                                })}

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <img className=' md:max-h-24 md:max-w-40 lg:max-h-40 lg:max-w-52 rounded-2xl' src={projects[1].logo} alt="Logo project 1" />
                                    </div>

                                </div>
                            </div>
                            

                        ) : (
                            <div className="col-span-6 row-span-5 bg-indigo-100 rounded-3xl flex gap-4 flex-col  p-10 justify-center xl:px-16">
                                <div className='flex items-center justify-between'>
                                    <h2 className='font-mosk700 md:text-xl lg:text-xl xl:text-3xl'>{projects[1].name}</h2>
                                    <img className=' md:max-h-24 md:max-w-40 lg:max-h-24 lg:max-w-24 rounded-2xl' src={projects[1].logo} alt="Logo project 1" />
                                </div>

                                <p className='md:font-mosk400 lg:font-mosk500 md:text-base lg:text-base text-justify '>{projects[1].description}</p>

                                <div className='flex justify-between'>
                                    
                                    <div className='flex items-center gap-2'>
                                        <FontAwesomeIcon className='md:text-3xl cursor-pointer' icon={faGithub} onClick={()=>window.open(projects[1].repository,"_blank")} />

                                        {projects[1].demo && <FontAwesomeIcon className='md:text-3xl cursor-pointer' icon={faEye} onClick={()=>window.open(projects[1].demo,"_blank")} />}
                                    </div>

                                    <div className='flex gap-2'>
                                        {projects[1].technologies.map((element, i)=>{
                                            return(
                                                <img key={i+1} src={element} className='md:w-8'/>
                                            );
                                        })}

                                    </div>
                                </div>
                            </div>
                        )}
                        

                        {/* Elemento 2 */}
                        <div className="col-span-4 row-span-6 bg-indigo-100 rounded-3xl flex gap-4 flex-col  p-6 justify-center xl:px-16">
                            <div className='flex items-center justify-between'>
                                <h2 className='font-mosk700 md:text-base lg:text-xl xl:text-3xl'>{projects[0].name}</h2>
                                <img className=' md:max-h-20 md:max-w-24 lg:max-h-24 lg:max-w-24 rounded-2xl' src={projects[0].logo} alt="Logo project 1" />
                            </div>

                            <p className='md:font-mosk400 lg:font-mosk500 md:text-sm lg:text-base text-justify '>{projects[0].description}</p>

                            <div className='flex justify-between'>
                                
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faGithub} onClick={()=>window.open(projects[0].repository,"_blank")} />

                                    {projects[0].demo && <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faEye} onClick={()=>window.open(projects[0].demo,"_blank")} />}
                                </div>

                                <div className='flex gap-2'>
                                    {projects[0].technologies.map((element, i)=>{
                                        return(
                                            <img key={i+1} src={element} className='md:w-6'/>
                                        );
                                    })}

                                </div>
                            </div>
                        </div>

                        {/* Elemento 3 */}
                        <div className="col-span-3 row-span-5 bg-indigo-100 rounded-3xl flex gap-4 flex-col  p-6 justify-center xl:px-12">
                            <div className='flex items-center justify-between'>
                                <h2 className='font-mosk700 md:text-base lg:text-xl xl:text-3xl'>{projects[4].name}</h2>
                                <img className=' md:max-h-20 md:max-w-16 lg:max-h-24 lg:max-w-24 rounded-2xl' src={projects[4].logo} alt="Logo project 1" />
                            </div>

                            <p className='md:font-mosk400 lg:font-mosk500 md:text-sm lg:text-base text-justify '>{projects[4].description}</p>

                            <div className='flex justify-between'>
                                
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faGithub} onClick={()=>window.open(projects[4].repository,"_blank")} />

                                    {projects[4].demo && <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faEye} onClick={()=>window.open(projects[4].demo,"_blank")} />}
                                </div>

                                <div className='flex gap-2'>
                                    {projects[4].technologies.map((element, i)=>{
                                        return(
                                            <img key={i+1} src={element} className='md:w-6'/>
                                        );
                                    })}

                                </div>
                            </div>
                        </div>

                        {/* Elemento 4 */}
                        <div className="col-span-3 row-span-5 bg-indigo-100 rounded-3xl flex gap-4 flex-col  p-6 justify-center xl:px-12">
                            <div className='flex items-center justify-between'>
                                <h2 className='font-mosk700 md:text-base lg:text-xl xl:text-3xl'>{projects[2].name}</h2>
                                <img className=' md:max-h-20 md:max-w-16 lg:max-h-16 lg:max-w-24 ' src={projects[2].logo} alt="Logo project 1" />
                            </div>

                            <p className='md:font-mosk400 lg:font-mosk500 md:text-sm lg:text-base text-justify '>{projects[2].description}</p>

                            <div className='flex justify-between'>
                                
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faGithub} onClick={()=>window.open(projects[2].repository,"_blank")} />

                                    {projects[2].demo && <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faEye} onClick={()=>window.open(projects[2].demo,"_blank")} />}
                                </div>

                                <div className='flex gap-2'>
                                    {projects[2].technologies.map((element, i)=>{
                                        return(
                                            <img key={i+1} src={element} className='md:w-6'/>
                                        );
                                    })}

                                </div>
                            </div>
                        </div>

                        {/* Elemento 5 */}
                        <div className="col-span-4 row-span-4 bg-indigo-100 rounded-3xl flex gap-4 flex-col  p-6 justify-center xl:px-16">
                            <div className='flex items-center justify-between'>
                                <h2 className='font-mosk700 md:text-base lg:text-xl xl:text-3xl'>{projects[3].name}</h2>
                                <img className=' md:max-h-20 md:max-w-20 lg:max-h-16 lg:max-w-24 rounded-xl ' src={projects[3].logo} alt="Logo project 1" />
                            </div>

                            <p className='md:font-mosk400 lg:font-mosk500 md:text-sm lg:text-base text-justify '>{projects[3].description}</p>

                            <div className='flex justify-between'>
                                
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faGithub} onClick={()=>window.open(projects[3].repository,"_blank")} />

                                    {projects[3].demo && <FontAwesomeIcon className='md:text-2xl cursor-pointer' icon={faEye} onClick={()=>window.open(projects[3].demo,"_blank")} />}
                                </div>

                                <div className='flex gap-2'>
                                    {projects[3].technologies.map((element, i)=>{
                                        return(
                                            <img key={i+1} src={element} className='md:w-6'/>
                                        );
                                    })}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                
            ) : (
                <div className='pt-20 flex flex-col gap-10 px-10 pb-10 items-center'>
                    {projects.map(({logo, name, description, repository, demo, technologies}, i)=>{
                    return(
                        <MobileComponent
                        key={i+1}
                        logo={logo}
                        name={name}
                        description={description}
                        repository={repository}
                        demo={demo}
                        technologies={technologies}
                        />
                    );
                })}

                </div>
                
            )}
        </>
        
    )
}

const MobileComponent = ({logo, name, description, repository, demo, technologies}) =>{
    return(
        <div className="bg-indigo-100 rounded-3xl flex gap-4 flex-col mx-6 p-6 min-w-60 max-w-96">
            <div className='flex items-center justify-between gap-6'>
                <h2 className='font-mosk700 text-xl sm:text-2xl text-center'>{name}</h2>
                <img className=' max-h-20 max-w-24 sm:max-w-none rounded-2xl' src={logo} alt="Logo project 1" />
            </div>

            <p className='font-mosk500 text-base text-justify '>{description}</p>

            <div className='flex justify-between'>
                
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon className='text-2xl sm:text-3xl cursor-pointer' icon={faGithub} onClick={()=>window.open(repository,"_blank")} />

                    {demo && <FontAwesomeIcon className='text-2xl sm:text-3xl cursor-pointer' icon={faEye} onClick={()=>window.open(demo,"_blank")} />}
                </div>

                <div className='flex gap-2'>
                    {technologies.map((element, i)=>{
                        return(
                            <img key={i+1} src={element} className='w-6 sm:w-10'/>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}