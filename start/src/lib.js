import React from 'react'
import text from './titles.json'
import './stylesheets/lastname.scss'
import './stylesheets/name.css'

export const name = (
  <h1 id="title"
          className="name">
          {text.name}
  </h1>
)

export const lastname = (
  <h1 id="title"
          className="lastname">
          {text.lastname}
  </h1>
)
