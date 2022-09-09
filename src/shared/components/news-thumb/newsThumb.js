import React from 'react'
import { Link } from 'react-router-dom'
import './newsThumb.scss'

const images = require.context('../../assets/images/', true)


export default function NewsThumb({thumb, title, text, id}) {
    const thumbnail =  images(`${thumb}`)
    const teaser = text.split("a")


    return (
        <div className='news-thumb-card'>
            <img className="image" src={thumbnail} alt=''/>
            <h2 className='title'>{title}</h2>
            <span className='text'>{teaser[0]}</span>
            <button className='button' type='button'><Link to={`/news/${id}`}>Ler mais</Link></button>
        </div>
    )
}
