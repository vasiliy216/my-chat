import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Dialog } from '../redux/actions'
import { Dialogs as NewDialog } from '../components/'

const Dialogs = ({ createDialogs, setMessagesId, items, userId }) => {

    const [state, setState] = useState('');
    const [filter, setFilter] = useState([...items]);

    const OnChangInput = value => {
        setFilter(
            items.filter(dialog_name => dialog_name.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )
        setState(value);
    }

    useEffect(() => {
        if(!items.length) {
            createDialogs();
        } else {
            setFilter(items);
        }
    }, [items]);

    return <NewDialog
        userId={userId}
        items={filter}
        onSearch={OnChangInput}
        valueInput={state}
        onSelectId={setMessagesId}
    />
}

export default connect(({ dialogs }) => dialogs, Dialog)(Dialogs);