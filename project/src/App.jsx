import { useState } from 'react';
import styles from './global.module.css';
import {format,formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

function App() {

  const  [publicationDate,setPublicationDate] =  useState({
    datePublishedAt: '',
    timeDistance: '',
    dateISOSFormat: ''
  })
  
  let money = 3.20
  function handlePublicationTime(){
    setInterval(() => {
      let longDate = new Date('2022-06-25 11:31:30')

      let datePublishedAt = format(longDate,'EEEE M y',{
        locale: ptBr
      })
    
     let dateISOSFormat = longDate.toISOString()

      let timeDistance  = formatDistanceToNow(longDate,{
        locale: ptBr,
        addSuffix: true
      })
      
      setPublicationDate({
        datePublishedAt,
        timeDistance,
        dateISOSFormat
      })
     
    },0);
    
  }
  handlePublicationTime()
  return (
    <div className={styles.app}>
      <time
      title={publicationDate.datePublishedAt}
      dateTime={publicationDate.dateISOSFormat}
       >
        Publicado {publicationDate.timeDistance}
      </time>
      <p>
       
      </p>
    </div>
  )
}

export default App
