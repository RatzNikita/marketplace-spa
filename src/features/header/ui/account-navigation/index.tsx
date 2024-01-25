import Menu from "../../../../shared/ui/Menu";
import {Account} from "../../../../entities/header";
import {useNavigate} from "react-router-dom";
import Button from "../../../../shared/ui/Button";


const optionsStub: { title: string, url: string }[] = [
    {
        title: 'Personal data',
        url: '/personal-data'
    },
    {
        title: 'Orders',
        url: '/orders'
    },
    {
        title: 'Reviews',
        url: '/reviews'
    },
    {
        title: 'Support',
        url: '/support'
    },
]

function AccountNavigation() {

    const navigation = useNavigate()

    const handleClick = (to: string) => {
        navigation(to)
    }

    return (
        <Menu component={<Account/>}>
            {optionsStub.map(item =>
                <Button key={item.title}
                        variant={'text'}
                        onClick={() => handleClick(item.url)}
                >
                    {item.title}
                </Button>)
            }
        </Menu>
    )
}

export default AccountNavigation