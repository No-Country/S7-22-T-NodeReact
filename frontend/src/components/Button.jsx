const Button = ({ size, variant, children }) => {
    let colour = '';

    switch (variant) {
        case 'success':
            colour = 'bg-green-700';
            break;
        case 'danger':
            colour = 'bg-red-700';
            break;
        case 'warning':
            colour = 'bg-yellow-700';
            break;
        default:
            colour = 'bg-primary';
            break;
    }

    return (
        <button className={`${size === 'full' ? 'w-full' : '' } ${colour} py-2 px-6 rounded-md text-white font-normal text-sm`}>
            { children }
        </button>
    );
}

export default Button;