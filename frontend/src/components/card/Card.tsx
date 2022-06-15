import classNames from 'classnames';

interface IProps {
    cardText: string;
    cardName: string;
    className?: string;
    cardFrequency: string;
    cardLevel: number;

}

export const Card = ({ cardText, cardName, className, cardLevel, cardFrequency }: IProps) => {
    return (
        <div className={classNames('card content-center mt-3', className)}  >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="text-dark"><strong>{cardName}</strong></h3>
                <p className="card-text text-dark">{cardText}</p>
                <div className="row">
                    <small className="col-md-6 card-text text-dark small-text">Freq: {cardFrequency}</small>
                    <small className="col-md-6 card-text text-dark">Nivel: {cardLevel}</small>
                </div>
            </div>
        </div>
    )
}
