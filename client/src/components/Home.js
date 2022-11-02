import React from 'react'
import "../css/Home.css"
import hand from "../img/Hand.png"
import familypng from "../img/familypng.png"
import dr from "../img/dr.png"
import familypng2 from "../img/familypng2.png"
import house from "../img/house.png"

const Home = () => {
  return (
    <>
      <section className='main-title justify-center align-middle'>
        <div className='title'>
          <h1>Insurance Portal</h1>
        </div>

      </section>

      <section className='sec-1 d-flex'>
        <div className='img md-3'>
          <img src={dr} alt="" />
        </div>
        <div className='text md-9'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi repellat laboriosam magni fuga placeat nihil voluptatem nam eius cumque sint, et, obcaecati, ipsum sapiente quaerat incidunt impedit mollitia nobis corporis voluptate? Voluptatem, perferendis! Provident repellendus alias aliquid dolore, amet quis libero aliquam architecto fuga nam molestias, ad commodi quaerat.
        </div>
      </section>

      <section className='sec-2 d-flex'>
        <div className='text md-9'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi repellat laboriosam magni fuga placeat nihil voluptatem nam eius cumque sint, et, obcaecati, ipsum sapiente quaerat incidunt impedit mollitia nobis corporis voluptate? Voluptatem, perferendis! Provident repellendus alias aliquid dolore, amet quis libero aliquam architecto fuga nam molestias, ad commodi quaerat.
        </div>
        <div className='img md-3'>
          <img src={familypng2} alt="" />
        </div>
      </section>

      <section className='sec-3 d-flex'>
        <div className='img md-3'>
          <img src={house} alt="" />
        </div>
        <div className='text md-9'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi repellat laboriosam magni fuga placeat nihil voluptatem nam eius cumque sint, et, obcaecati, ipsum sapiente quaerat incidunt impedit mollitia nobis corporis voluptate? Voluptatem, perferendis! Provident repellendus alias aliquid dolore, amet quis libero aliquam architecto fuga nam molestias, ad commodi quaerat.
        </div>
      </section>

      <footer className='footer'>

      </footer>
    </>
  )
}

export default Home