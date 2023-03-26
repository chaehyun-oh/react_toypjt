import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {
    const { navigate, currentPath } = useNavigation();

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        navigate(to)
    };

    return <a href={to} onClick={handleClick} className="hover:text-blue-400">{children}</a>
};

export default Link;