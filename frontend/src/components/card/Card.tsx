import classNames from 'classnames';

interface IProps {
    cardText: string;
    cardName: string;
    className?: string;
    cardTag: string;
    cardLevel: number;
    image?: string;
}

export const Card = ({ cardText, cardName, className, cardLevel, cardTag, image }: IProps) => {
    return (
        <div className={classNames('card content-center mt-3', className)}  >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="text-dark" style={{ height: 60 }}><strong>{cardName}</strong></h4>
                <div className="pb-4">
                    <small className="card-text text-dark">{cardText}</small>
                </div>
                <div className="row">
                    <small className="col-md-6 card-text text-dark small-text">{cardTag}</small>
                    <small className="col-md-6 card-text text-dark" style={{ textAlign: 'right' }}>Nivel: {cardLevel}</small>
                </div>
            </div>
        </div>
    )
}
