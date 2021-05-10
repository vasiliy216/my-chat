import React, {Fragment} from 'react'
import formatDistance from 'date-fns/formatDistanceToNowStrict'
import ruLocale from 'date-fns/locale/ru'

const Time = ({ date }) => (
    <Fragment>
        {formatDistance(date, { addSuffix: true, locale: ruLocale })}
    </Fragment>
);

export default Time;