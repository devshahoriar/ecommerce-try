/* eslint-disable @next/next/no-img-element */
const Bottom = () => {
  return (
    <div className="bg-blue-100 w-full dark:bg-[#191b32] bottonNav">
      <div className="container pb-10">
        <div className="mx-5 pt-10 lg:flex justify-between">
          <div className="md:flex justify-between flex-1 lg:ml-5">
            <aside>
              <div>
                <h1 className="text-2xl">Customer Care</h1>
                <div className="flex flex-col">
                <a href="">Help Center</a>
                <a href="">How to Buy</a>
                <a href="">Returns & Refunds</a>
                <a href="">Contact Us</a>
                <a href="">Terms & Conditions</a>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl">Earn with Our Shop</h1>
                <div className="flex flex-col">
                <a href="">Earn Mony</a>
                <a href="">Sell on Our Shop</a>
                <a href="">Code of contact</a>
                <a href="">Affillate Program</a>
                </div>
              </div>
            </aside>
            <aside className="mt-10">
              <h1 className="text-2xl">Our Shop</h1>
              <div className="flex flex-col">
              <a href="">About Our App</a>
              <a href="">Digital Payment</a>
              <a href="">Our Shop Blog</a>
              <a href="">Our Shop Care</a>
              <a href="">Our Shop app</a>
              <a href="">Our Shop Exclusive</a>
              </div>
            </aside>
          </div>
          <div className="flex-1">
            <div>
              <div className="flex justify-around mt-10">
                <img className="w-32"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1nvAvXMFY.1VjSZFnXXcFHXXa.png"
                  alt="qr code"
                />
                <div>
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/5db39a81-a04b-4f58-871e-9b9f6d044d25.png"
                    alt="app logo"
                  />
                  <p>Happy Shoping</p>
                  <a href="">Downlode app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom
