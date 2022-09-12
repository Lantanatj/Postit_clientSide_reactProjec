import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import checkboard from '../images/checkboard.png'

const WelcmPg = () => {
    const navigate = useNavigate()
    const fetchUser = async () =>{
        const response =  await fetch('/welcome') 
        const result = await response.json()

        if(result.redirect){
            navigate(result.redirect)
        }
        if(result.user){
            navigate('/welcome')
        }
    }
    useEffect(()=>{
        fetchUser()
    })

    return (
        <div className='container-fluid  '>
            <div className='row mx-auto p-5'>
                <div className='col col-lg-6 '>
                    <h1>Welcome Lantana</h1>
                    <p className="my-3" style={{ width: '200px', textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in
                        arcu. Tincidunt neque fusce vitaenisi aliquet. que maeae tortoere necsem commodo ac.
                    </p>
                    <button className="btn btn-primary">My Stories</button>
                    <button className="btn info btn-outline-success">Go to Feed</button>
                </div>
                <div className='col col-lg-6'>
                    <img src={checkboard} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default WelcmPg