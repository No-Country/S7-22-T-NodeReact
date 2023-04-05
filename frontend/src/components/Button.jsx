const Button = ({ size, variant, text, type, onClick, visible }) => {
    let bgColour, borderColour, textColour = '';
    let disabled = false;

    switch (variant) {
        case 'success':
            bgColour = 'bg-success';
            textColour = 'text-white';
            break;
        case 'danger':
            bgColour = 'bg-danger';
            textColour = 'text-white';
            break;
        case 'disabled':
            bgColour = 'bg-disabled-bg';
            textColour = 'text-disabled-text';
            disabled = true;
            break;
        case 'interactive':
            bgColour = 'bg-interactive';
            textColour = 'text-white';
            break;
        case 'normal':
            bgColour = 'bg-white';
            textColour = 'text-black';
            borderColour = 'border border-border';
            break;
        default:
            bgColour = 'bg-primary';
            textColour = 'text-white';
            break;
    }

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={`${size === 'full' ? 'w-full' : '' } ${borderColour} ${bgColour} ${textColour} ${visible ? 'block' : 'hidden'} py-2.5 px-5 rounded-md font-medium text-sm`}>
            { text }
        </button>
    )
}

export default Button;