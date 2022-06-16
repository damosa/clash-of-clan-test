import classNames from 'classnames';

interface IProps {
    className?: string;
    children: React.ReactNode;
    onChange:  (e: React.ChangeEvent<HTMLSelectElement>) => void;
    [rest: string]: any;
}

export const Select = ({ className, children, ...rest }: IProps) => {
    return (
            <select 
                className={classNames('form-control form-select-lg rounded', className)}
                {...rest}
            >
                {children}
            </select>
    )
}
