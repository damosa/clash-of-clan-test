import classNames from 'classnames';

interface IProps {
    text: string;
    selected?: boolean;
    value?: string;
}

export const Option = ({text, selected, value} : IProps) => {
  return (
        <option className={classNames("dropdown-item", {selected: selected})} value={value}>{text}</option>
  )
}
