import React from 'react'

const Cart = () => {
  const items = [
    { id: 'c1', title: 'Advanced UI/UX Design', price: 79 },
    { id: 'c2', title: 'WordPress Development', price: 59 },
  ]
  const total = items.reduce((s, i) => s + i.price, 0)
  return (
    <div className="container-base py-12">
      <h1 className="h2">Your Cart</h1>
      <div className="mt-6 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(i => (
            <div key={i.id} className="border rounded-xl p-4 flex items-center justify-between">
              <div className="font-semibold">{i.title}</div>
              <div className="text-slate-700">${i.price}</div>
            </div>
          ))}
        </div>
        <aside className="border rounded-xl p-6 h-fit sticky top-24">
          <div className="text-lg font-bold">Total: ${total}</div>
          <a href="/checkout" className="btn-primary mt-4 inline-flex">Proceed to Checkout</a>
        </aside>
      </div>
    </div>
  )
}

export default Cart
