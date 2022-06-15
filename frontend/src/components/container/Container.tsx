import classNames from 'classnames';

interface Iprops {
  className: string;
  children: React.ReactNode;
  [rest: string]: any;
}


export const Container = ({children, className, classContainer, ...rest} : Iprops) => {
  return (
    <div className={classNames('container pt-5', className)} {...rest}>{children}</div>
  )
}
