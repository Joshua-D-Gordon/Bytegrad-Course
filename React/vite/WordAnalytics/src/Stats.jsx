import React from 'react'
import { INSTAGRAM_LIMIT, FACEBOOK_LIMIT } from './constants';

export default function Stats({text}) {

  const characters = text.length;
  const words = text.split(/\s/).filter((word) => word !== "").length;
  const InstaChars = INSTAGRAM_LIMIT - characters;
  const FacebookChars = FACEBOOK_LIMIT - characters;

  const stats = {
    words,
    characters,
    InstaChars,
    FacebookChars
  }


  return (
    <div className='stats'>
      <Stat number={stats.words} label={'Words'}/>
      <Stat number={stats.characters} label={'Characters'}/>
      <Stat number={stats.InstaChars} label={'Instagram'}/>
      <Stat number={stats.FacebookChars} label={'Facebook'}/>
    </div>
  )
}

function Stat({number, label}){
  return (
    <section className='stat'>
        <span className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}>{number}</span>
        <h2 className="second-heading">{label}</h2>
    </section>
  )
}