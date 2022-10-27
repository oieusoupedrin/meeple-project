import React from 'react'
import { Link } from 'react-router-dom'
import './newsThumb.scss'

const images = require.context('../../assets/images/', true)


export default function NewsThumb({thumb, title, text, id}) {
    const thumbnail =  images(`${thumb}`)
    const teaserArray = text.split(" ")
    let teaser = ""
    for (let i=0; i< 10 && !!teaserArray[i]; i++) {
        teaser = teaser + teaserArray[i] + " "
    }
    teaser = teaser + "..."

    


    return (
        <div className='news-thumb-card'>
            <img className="image" src={thumbnail} alt=''/>
            <h2 className='title'>{title}</h2>
            <span className='text'>{teaser}</span>
            <button className='button' type='button'><Link to={`/news/${id}`}>Ler mais</Link></button>
        </div>
    )
}
