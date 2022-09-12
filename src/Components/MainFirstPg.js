import React from 'react'
import '../Styles/main1.css'
import img1 from '../images/Rectangle3.png'
import img2 from '../images/Rectangle38.png'
import img3 from '../images/Rectangle5.1.png'
import img4 from '../images/Rectangle5.2.png'
import img5 from '../images/Rectangle5.3.png'

const MainFirstPg = () => {
    return (
        <div className='container-fluid'>
            <section className=' bgImage1'>
                <div style={{
                    backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", height: '100%', width: '97%'
                }}>
                    <div className=' textbox'>
                        <h1>Stay Curious.</h1>
                        <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
                            egestas massa velit aliquam. Molestim bibendum
                            hnt ipsum orci, platea aliquam id ut. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>


            </section>
            <section className='container row cardSection  mx-auto'>

                <div className='cards col-md-3 p-3'>
                    <img src={img3} alt="" height={80} width={120} className="cardImage"/>
                    <div className='cardtextbox '>
                        <button className='btn cardButton btn-warning text-light'>Lifestyle</button>
                        <div><p className='pTag'>The 20 Biggest Fintech Companies In Nigeria 2022</p></div>
                    </div>
                </div>

                <div className='cards col-md-3  p-3'>
                    <img src={img4} alt="" height={80} width={120} className="cardImage" />
                    <div className='cardtextbox '>
                        <button className='btn cardButton btn-success'>Nature</button>
                        <div><p className='pTag'>The 20 Biggest Fintech Companies In Nigeria 2022</p></div>
                    </div>
                </div>

                <div className='cards col-md-3 p-3 '>
                <img src={img5} alt="" height={80} width={120} className="cardImage"/>
                    <div className='cardtextbox '>
                        <button className='btn cardButton  btn-primary text-light'>Technology</button>
                        <div><p className='pTag'>The 20 Biggest Fintech Companies In Nigeria 2022</p></div>
                    </div>

                </div>
                
            </section>
            <section className="container bgImage2 p-3" >
                <div style={{
                    backgroundImage: `url(${img2})`, backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>

                    <div className='lastImageContent text-center '>
                        <h3>Try Postit</h3>
                        <p>Do you want to write or discover stories from writers on any topic?</p>
                        <input type="text"/>
                        <button className='btn btn-sm btn-primary text-light'>Get started</button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default MainFirstPg