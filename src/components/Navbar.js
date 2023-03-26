import Link from './Link';

function Navbar() {
    const links = [
        { label: 'Home', path: '/' },
        { label: 'Bookmark', path: '/bookmark' },
    ]

    const renderedLinks = links.map((link) => {
        return (
            <Link key={link.label} to={link.path}>
                {link.label}
            </Link>)
    })

    return (
        <div className='sticky top-0 flex justify-between p-3 bg-white w-full'>
            {renderedLinks}
        </div>
    )


}

export default Navbar;