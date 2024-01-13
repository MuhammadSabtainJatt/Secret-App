import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">Default</Link>
      </div>
    </nav></>
  )
}
