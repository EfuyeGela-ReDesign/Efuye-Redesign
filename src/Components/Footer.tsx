
const Footer = () => {
  return (
    <div className='w-screen h-[300px] overflow-hidden bg-footer text-textColor border-[1px] flex items-start justify-around p-20'>
      <div className="flex-1  flex-col">
          <div className='flex gap-4 items-center'>
              <h1 className="text-[2.512rem] text-utility font-itim uppercase">EfuyeGela</h1>
              <img src="../../../public/Rectangle2426.png" alt="" />
          </div>
          <h1 className='font-inter'>Copyright © 2024 EFUYEGELA Inc.</h1>
          <h1 className='font-inter'>All rights reserved</h1>
          <div className="flex gap-2 mt-4">
            <img src="../../../public/SocialIcons.png" alt="" />
            <img src="../../../public/basket.png" alt="" />
            <img src="../../../public/twitter.png" alt="" />
            <img src="../../../public/youtube.png" alt="" />
          </div>
      </div>
      <div className="flex-1 flex gap-12 w-full">
          <div className="flex flex-col font-inter gap-3">
            <h1 className="text-xl pb-2">COMPANY</h1>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Testimonials</p>
          </div>
          <div className="flex flex-col font-inter gap-3">
            <h1 className="text-xl pb-2">Support</h1>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
          </div>

          <div className="flex flex-col font-inter">
            <h1 className="text-xl pb-2">Support Us</h1>
            <form action="" className="bg-slate-500 flex rounded-sm w-[255px] h-[45px] justify-end items-center">
              <input placeholder="Your email Address" className="bg-transparent"/>
              <img src="../../../public/Vector.png" alt="" className="object-contain" />
            </form>
          </div>
         
      </div>
    </div>
  )
}

export default Footer