import React from 'react'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import Input from "@material-tailwind/react/Input";
import { Typography, Button } from '@mui/material'

var Airtable = require('airtable')
Airtable.configure({
    endpointURL: 'https://api.airtable.com', 
    apiKey: 'keyMWwdaxj6E6CFik'
})

var base = Airtable.base('appFXGuwbT0EsyH3W')

class EmailForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    render() {
        var email; 
        var current = new Date() 
        var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() 

        const handleClick = function (event) {
            base('Mailing List').create([
                {
                    'fields': {
                        'Email': email,
                        'Date': cDate
                    }
                }
            ])
        }

        const handleChangeInput = function (event) {
            email = event.target.value
        }

        return (
            <div className="relative flex content-center items-center justify-center h-screen">
                <Card className='self-center w-10/12'>
                    <CardBody>
                        <Typography>You have to see it to believe it! </Typography>
                        <Typography> Request a demo for Imagication! </Typography>
                        <Input 
                            type="text"
                            size="regular"
                            outline={false}
                            placeholder="Enter Email:"
                            onChange={handleChangeInput}
                        />
                        <Button
                            variant='contained'
                            onClick={handleClick}
                        >
                            <Typography>    
                                Explore
                            </Typography>
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default EmailForm