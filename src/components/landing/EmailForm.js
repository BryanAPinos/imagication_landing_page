import React from 'react'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6"
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

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
                        <H5>You have to see it to believe it!</H5>
                        <H6> Request a demo for Imagication! </H6>
                        <Input 
                            type="text"
                            size="regular"
                            outline={false}
                            placeholder="Enter Email:"
                            onChange={handleChangeInput}
                        />
                        <Button
                            color='purple'
                            onClick={handleClick}
                        >
                            Explore
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default EmailForm