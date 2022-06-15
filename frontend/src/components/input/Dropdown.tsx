import classNames from 'classnames';

interface IProps {
    className?: string;
    text: string;
    children: React.ReactNode;
}

export const Dropdown = ({ className, children }: IProps) => {
    return (
            <select className={classNames('form-control form-select-lg rounded', className)} aria-label=".form-select-lg example">
                {children}
            </select>
    )
}
