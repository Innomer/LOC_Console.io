import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import './Home.css';
import Navbar from './Navbar.jsx';
import './Navbar.css';
import { ProjectCard } from './Documents';
import AadharCard from '../images/AadharCard.jpg'

const Home = () => {
    const projects = [
        {
            title: 'Aadhar Card',
            imgUrl: AadharCard,
        },
        {
            title: 'Aadhar Card',
            imgUrl: AadharCard,
        },
    ]
    return (
        <>
        <Box className="background">
            <Navbar />
            <Box sx={{display: 'flex'}}>
                <Box className='document'></Box>
                <Box className='tab-box'>   
                    {
                        projects.map((project,index) => {
                        return (
                            <ProjectCard key={index} {...project} />
                        )
                    })
                    }
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Home;