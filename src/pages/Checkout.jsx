import React from 'react'

const Checkout = () => {
  return (
    <div className="container-base py-12">
      <h1 className="h2">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-8 mt-6">
        <form className="lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full border rounded-md px-4 py-3" placeholder="First name" />
            <input className="w-full border rounded-md px-4 py-3" placeholder="Last name" />
          </div>
          <input className="w-full border rounded-md px-4 py-3" placeholder="Email" type="email" />
          <input className="w-full border rounded-md px-4 py-3" placeholder="Address" />
          <div className="grid sm:grid-cols-3 gap-4">
            <input className="w-full border rounded-md px-4 py-3" placeholder="City" />
            <input className="w-full border rounded-md px-4 py-3" placeholder="State" />
            <input className="w-full border rounded-md px-4 py-3" placeholder="ZIP" />
          </div>
          <button className="btn-primary">Pay Now</button>
        </form>
        <aside className="border rounded-xl p-6 h-fit">
          <div className="font-semibold">Order Summary</div>
          <div className="mt-3 text-sm text-slate-700 space-y-1">
            <div className="flex justify-between"><span>Advanced UI/UX Design</span><span>$79</span></div>
            <div className="flex justify-between"><span>WordPress Development</span><span>$59</span></div>
            <div className="flex justify-between font-bold border-t pt-2"><span>Total</span><span>$138</span></div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Checkout
