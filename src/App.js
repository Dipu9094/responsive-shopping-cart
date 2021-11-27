import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'


function App() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg">
          <Navbar />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
