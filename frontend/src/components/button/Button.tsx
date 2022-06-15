import classNames from 'classnames';

interface IProps {
  className?: string;
  children: React.ReactNode;
  colorClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  [rest: string]: any;
}

export const Button = ({colorClassName = 'btn-danger', children, className, onClick, ...rest }: IProps) => {
  return (
    <button 
      className={classNames('btn', className, colorClassName)} 
      type="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
