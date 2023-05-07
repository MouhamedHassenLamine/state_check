import React, { useState,useEffect } from 'react'
import './css/Card.css'
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg'

export default function Card() {
    const info ={
        name:["Hassen","Maria","Ahmed","Alex"],
        job:["Student","Grafic desiner","Software Developer","Marketing Manager"],
        email:["hassenlamine@gmail.com","marialamine@gmail.com","ahmedlamine@gmail.com","alexjemai@gmail.com"],
        phonenumber:[7565823,46521358,97213655,56874912],
        bio:["Lorem ipsum you can edit hassen bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!","Lorem ipsum you can edit maria bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!","Lorem ipsum you can edit ahmed bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!","Lorem ipsum you can edit alex bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!"],
        photo:["/img/hassen.jpg","/img/maria.jpg","/img/ahmed.jpg","/img/alex.jpg"],
        background_color:["linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(5,4,73,1) 0%, rgba(9,9,121,1) 26%, rgba(0,159,255,1) 100%)","linear-gradient(0deg, rgb(20, 0, 36) 0%, rgb(23, 4, 48) 0%, rgb(119, 0, 255) 26%, rgb(71, 16, 142) 100%)","linear-gradient(0deg, rgb(0, 36, 5) 0%, rgb(4, 48, 22) 0%, rgb(8, 56, 5) 26%, rgb(16, 142, 58) 100%)","linear-gradient(0deg, rgb(36, 0, 25) 0%, rgb(48, 4, 34) 0%, rgb(255, 0, 149) 26%, rgb(142, 16, 119) 100%)",]
    }
      const [desc,setDesc]=useState(0)
      const [hs,setHs]=useState(true)
      useEffect(() => {
        const interval = setInterval(() => {
          setDesc(desc => (desc === info.name.length-1 ? 0 : desc + 1));
        },5000);
        return () => clearInterval(interval);
      }, []);
  return (
    <div>
      <div className='firstparent'>
      {hs&& 
      <div className='grandp'>
        <section style={{ background: info.background_color[desc], }} className='slice1'>
          {/*the image*/}
          <img src={info.photo[desc]} alt="persone img" />
          {/*full name*/}
          <h3>{info.name[desc]}</h3>
          {/*profession*/}
          <h4>{info.job[desc]}</h4>
        </section>
        <section className='slice2'>
          <h2>Information</h2>
          <hr />
          <div className='pparent'>
            <h2 className='infot'>Email</h2>
            <h2 className='info'>Phone number</h2>
          </div>
          <div className='pparent'>
            {/*the email*/}
            <p>{info.email[desc]}</p>
            {/*the phone number*/}
            <p>{info.phonenumber[desc]}</p>
          </div>
          <h2 className='bio'>Bio</h2>
          <hr />
          <div className='biop'>
            {/*the bio*/}
            <p>{info.bio[desc]}</p>
          </div>
          <a href="#nothing special this time">Show more</a>
        </section>
      </div>}
      </div>
          <Button className='cbutton' onClick={() => setHs(!hs)} variant="secondary">{hs?"Hide":"Show"}</Button>
        {hs? null:<h5>By Mouhamed Hassen Lamine <img className='reactlogo' src={logo} alt="logo" /></h5>}
    </div>
  )
}
