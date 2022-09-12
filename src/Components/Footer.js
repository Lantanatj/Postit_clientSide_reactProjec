import React from 'react'
import { Link } from 'react-router-dom'
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact'

const Footer = () => {
    return (
        <CDBFooter className="container-fluid foota  p-4 mx-auto bg-dark">
            <CDBBox display="flex" flex="column" className="mx-auto p-2" >
                <CDBBox display="flex" justifyContent="between" className=" footer flex-wrap text-light">
                    <CDBBox>
                        <h5 className=" mb-4" style={{ fontWeight: '600' }}>About Postit</h5>
                        <p className="my-3" style={{ width: '200px',textAlign:'justify' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in
                            arcu. Tincidunt neque fusce vitaenisi aliquet. que maeae tortoere necsem commodo ac.
                        </p>

                    </CDBBox>
                    <CDBBox className="mx-2">
                        <h5 className=" mb-4 " style={{ fontWeight: '600' }}>Quick Menu</h5>
                        <CDBBox>
                            <ul>
                                <li>
                                    <Link className='link' to='/'> Home </Link>
                                </li>
                                <li>
                                    <Link className='link' to='/'> Stories </Link>
                                </li>
                                <li>
                                    <Link className='link' to='/'> Trending stories </Link>
                                </li>
                                <li>
                                    <Link className='link' to='/'> Popular stories </Link>
                                </li>
                            </ul>
                        </CDBBox>
                    </CDBBox>


                    <CDBBox className=' mx-2 pt-5'>
                        <ul >
                            <li>
                                <Link className='link ' to='/'> Sign up </Link>
                            </li>
                            <li>
                                <Link className='link' to='/'> Log in </Link>
                            </li>
                            <li>
                                <Link className='link' to='/'> Contact us </Link>
                            </li>

                        </ul>

                    </CDBBox>

                    <CDBBox className='mb-4'>
                        <h5 className=" mb-2">
                            Subscribe to our newsletter
                        </h5>
                        <input className='footerinput' type="email" placeholder='Email address' />
                        <button className='btn footerButton1 btn-xs btn-primary'>Suscribe</button>

                    </CDBBox>
                    
                </CDBBox>

                
                <CDBBox display="flex" className="footerIcon justify-content-end mt-4">
                    
                    <CDBBtn flat color="primary" >
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="primary" className=" mx-3">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="primary" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
                <small className="text-center text-light mt-5">&copy; Lantana, 2022. All rights reserved.</small>

            </CDBBox>
        </CDBFooter >
    )
}

export default Footer