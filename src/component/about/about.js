import React from 'react';
import randomColor from 'randomcolor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faHeart,faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import Contact from '../contact/contact';
import '../about/about.css'


export default function Aboutus(){
    return(
        <div >
            <div className='about-us-head' style={{textAlign:'center'}}>
            <img src={require('../pictures/images.jpg')} alt="Image of image comparetor" />
                <h1 style={{color:randomColor()}}> We are Rockspace ..</h1>
                <h1 style={{color:randomColor()}}> Let's Rock it <img src={require('../images/rock-and-roll.png')} style={{width:'30px'}}/></h1>
            </div>
            <div style={{backgroundColor:'#e6ffff'}}>
            <div className='about-us' >
                <h2 style={{textAlign:'center'}}>About-us</h2>
                <h3><FontAwesomeIcon icon={faArrowRight} /> This website is developed for <span className='space-rocket'  style={{backgroundColor:randomColor(),padding:'0px 5px'}}></span> science enthusiastic people.</h3>
                <h3><FontAwesomeIcon icon={faArrowRight} /> It will help student and researchers to compare[rockets, rocket engine etc..] and perform complax space and rocket science calculation. </h3>
                <h2 style={{color:randomColor(),margin:'0px 10%'}}>Spacial thanks:-</h2>
                <ul>
                    <li>Antoine Dujardin for compiled data of rockets. Try his rocket height comparetor - <a target="_blank" href='https://antoine-42.github.io/rocket_comparator/'>rocket comparator</a></li>
                    <li><FontAwesomeIcon icon={faHeart} color='red' />Astronautix for the amazing information <FontAwesomeIcon icon={faHeart} color='red' /> - <a target="_blank" href='http://www.astronautix.com/'>Astronautix.com</a></li>
                </ul>
            </div>
            <div className='about-developer'>
                <h2>This website develop by </h2>
                <h3> Vijay kumawat</h3>
                <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> <a href='https://www.linkedin.com/in/vijay-kumawat-6250b4219/' target="_blank">Linkedin</a></p>
                <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> <a href="mailto:vijay123kumawat123@gmail.com">Email</a></p>
            </div>
            </div>
            <Contact></Contact>
        </div>
    );
}