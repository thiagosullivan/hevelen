import React from 'react'
import { NewsletterForm, NewsLetterHomeContainer } from './style'

function NewsletterHome() {
  return (
    <NewsLetterHomeContainer>
        <div className='newsletter__content'>
            <h2>Inscreva-se na Newsletter</h2>
            <p>Subscribe our newsletter and get latest update</p>
            <NewsletterForm>
                <input type='email' placeholder="Coloque o seu e-mail" />
                <button>Increva-se Agora</button>
            </NewsletterForm>
        </div>
    </NewsLetterHomeContainer>
  )
}

export default NewsletterHome