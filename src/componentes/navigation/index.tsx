import Link from "next/link"

const navItems = [  //Esto se un objeto para reemplazar el pedido API
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Productos',
        route: '/productos'
    },
    {
        label: 'Contacto',
        route: '/contacto'
    }
]   

export default function Navigation() {
    return (
        <div>
            {navItems.map((item, index) => {
                return <Link key = {index} href={item.route}> {item.label} </Link>
            })} 
        </div>
    )
}