import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6"
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";


export default function CardSection() {
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
                    />
                    <Button
                        color='purple'
                    >
                        Explore
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}