import {Box } from '@mui/material'


export default function Video() {
    return (
        <Box className="pb-20 mt-16">
                    <iframe 
                    width="800" 
                    height="500" 
                    src='https://www.youtube.com/embed/E5hqcM2AeSM'
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        </Box>
    );
}
