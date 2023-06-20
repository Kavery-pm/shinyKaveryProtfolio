import {
   
    FaLinkedin,
    FaGithub,
   
} from 'react-icons/fa';
import { Button } from '@material-ui/core';
const Landing = ()=>{
    return (
        <div>
            <div >
                <div
                    
                >
                    <div >
                        
                            <a
                              href="/"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    
                                />
                            </a>
                        
                        
                            <a
                                href='/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                  
                                  
                                    aria-label='GitHub'
                                />
                            </a>
                       
                    </div>
                </div>
                <img
                    src={''}
                    alt=''
                   
                   
                />
                <div
                    className='landing--container-right'
                    
                >
                    <div
                       
                    >
                        <h6>Resume</h6>
                        <h1>Kavery</h1>
                        <p>Descrip</p>

                        <div >
                           
                                <a
                                    href=''
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button >
                                        Download CV
                                    </Button>
                                </a>
                          
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;