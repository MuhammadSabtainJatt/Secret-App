import React from 'react'

export default function Footer() {
    const year=new Date().getFullYear()
  return (
    <div className="container-fluid text-center bg-danger">
        <div className="row">
            <div className="col">
                <p>&copy; Copy {year}, All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}
