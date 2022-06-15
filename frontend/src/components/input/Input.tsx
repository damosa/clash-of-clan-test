
import classNames from 'classnames';

interface IProps {
    className?: string;
    placeholder: string;
}

export const Input = ({ placeholder, className} : IProps) => {
    return (
        <>
            <div className={classNames( className)}>
                <input type="text" className="form-control" placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2"/>
            </div>
        </>
    )
}
