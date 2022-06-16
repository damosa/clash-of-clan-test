interface FREQUENCY {
    [key: string]: string;
    always: string;
    moreThanOncePerWeek: string;
    lessThanOncePerWeek: string;
    oncePerWeek: string;
    unknown: string;
    never: string;
}

export const FREQUENCYS: FREQUENCY = {
    always: 'Siempre',
    moreThanOncePerWeek: 'Más de una vez por semana',
    lessThanOncePerWeek: 'Menos de una vez por semana',
    oncePerWeek: 'Una vez por semana',
    unknown: 'Desconocido',
    never: 'Nunca'
}