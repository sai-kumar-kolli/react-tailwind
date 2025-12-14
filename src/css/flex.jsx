import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Flex = () => {
    const { loginWithRedirect, logout } = useAuth0();

    return (
        <>
            <nav class="navbar">
                <div class="logo">MyLogo</div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#"> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button></a>
                    <a href="#"><button onClick={() => loginWithRedirect()}>Log In</button></a>
                </div>
            </nav>
            <div class="container-flex-basis">
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>
                <div class="card">Card 3</div>
            </div>

            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
            <div class="container">
                <div class="item">Item 1</div>
                <div class="item">Item 2</div>
                <div class="item">Item 3</div>
            </div>
            <div class="container-center">
                <div class="item">Centered Item</div>
            </div>
            <div class="container-column">
                <div class="item">Item 1</div>
                <div class="item">Item 2</div>
                <div class="item">Item 3</div>
            </div>
            <div class="container-wrap">
                <div class="item">Item 1</div>
                <div class="item">Item 2</div>
                <div class="item">Item 3</div>
                <div class="item">Item 4</div>
                <div class="item">Item 5</div>
            </div>
            <div class="container-grow-shrink">
                <div class="item-grow">Item 1</div>
                <div class="item-grow">Item 2</div>
                <div class="item-grow">Item 3</div>
            </div>
            <div className='flex gap-2 justify-center items-center w-full h-32 bg-slate-300'>
                <div className='p-5 bg-blue-300'>Item1</div>
                <div className='p-5 self-end bg-blue-300'>Item2</div>
                <div className='p-5 bg-blue-300'>Item3</div>
            </div>
            <div className='grid w-fit gap-2 grid-cols-3 grid-rows-3 bg-stone-200'>
                <div className='p-5 bg-red-300'>Item1</div>
                <div className='p-5 bg-red-300 g'>Item1</div>
                <div className='p-5 bg-red-300'>Item1</div>
            </div>
            <div class="grid-container">
                <div class="box box1">Box 1</div>
                <div class="box box2">Box 2</div>
                <div class="box box3">Box 3</div>
            </div>
            <div class="containerr">
                <div class="static">Static</div>
                <div class="sticky">Sticky</div>
                <div class="relativee">Relative</div>
                <div class="absolutee">Absolute</div>
                <div class="fixed">Fixed</div>
            </div>
            <div class="animated-box">Hello, World!</div>
            <div class="card">
                <div class="content">Hover Me!</div>
            </div>
            {/* <div className='w-40 h-40 relative mx-auto bg-rose-100'>
                <div className=' mx-auto w-20 h-1 absolute border-2 border-black'></div>
                <div className=' mx-auto w-20 h-1 absolute border-2 border-black'></div>
                <div className=' mx-auto w-20 h-1 absolute border-2 border-black'></div>
            </div> */}
            <div class="triangle-container">
                <div class="triangle-side1"></div>
                <div class="triangle-side2"></div>
                <div class="triangle-side3"></div>
            </div>
        </>
    )
}

export default Flex;
