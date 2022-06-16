
import classNames from 'classnames';

interface IProps {
    className?: string;
    placeholder: string;
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    [rest: string]: any;
}

export const Input = ({ placeholder, className, type = 'text', value, onChange, ...rest} : IProps) => {
    return (
        <input 
            type={type}
            className={classNames("form-control", className)} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
}
