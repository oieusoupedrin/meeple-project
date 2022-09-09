import NewsThumb from '../../shared/components/news-thumb/newsThumb'
import React from 'react'
import './aboutMeeple.scss'
const data = require('./../../shared/services/mockData/mockDataNews.json')


export default function AboutMeeple() {
  return (
    <div className='news-board'>
      <div className='newscard'>
        { 
          data.news.map((news, i) => {
            return <NewsThumb thumb={news.thumb} text={news.text} key={news.id} id={news.id} />
          })  
        } 
      </div>
    </div>
  )
}
