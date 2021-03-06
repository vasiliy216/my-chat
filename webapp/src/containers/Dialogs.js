import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Dialog } from '../redux/actions'
import { Dialogs as NewDialog } from '../components/'
import store from '../redux/store'
import { Socket } from '../core'

const Dialogs = (props) => {

    const {
        fetchDialogs,
        items,
        user,
        setCurrentDialogId,
        fetchUser,
        fetchUsers,
        removeDialog,
        updateReadedStatus
    } = props;

    const [state, setState] = useState('');
    const [filter, setFilter] = useState([...items]);
    const [serchUsers, setSerchUsers] = useState([])

    const OnChangInput = (value = "") => {
        setFilter(
            items.filter(dialog_name => dialog_name.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                dialog_name.partner.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )

        if (!!value) {
            fetchUsers(value).then((users) => { //убираем пользователей, с которыми у нас есть диалог

                let newUsers = users.filter(function (item, index, currentArrey) {
                    for (let i = 0; i < currentArrey.length; i++) {
                        if (items[i].author.email === item.email || items[i].partner.email === item.email) return false;
                    }
                    return true;
                })

                setSerchUsers(newUsers);

            });
        } else {
            setSerchUsers(value);
        }

        setState(value);
    }

    const currentDialogId = data => {
        setCurrentDialogId(data);
    }

    const currentUserId = data => {
        fetchUser(data);
    }

    const removeDialogId = data => {
        removeDialog(data)
    }

    useEffect(() => {
        OnChangInput()
    }, [items])

    useEffect(() => {
        fetchDialogs();

        Socket.on('SERVER:DIALOG_CREATED', fetchDialogs);
        Socket.on('SERVER:DIALOG_DELETED', fetchDialogs);
        Socket.on('SERVER:NEW_MESSAGE', fetchDialogs);
        Socket.on('SERVER:MESSAGES_READED', updateReadedStatus);

        return () => {
            Socket.removeListener('SERVER:DIALOG_CREATED', fetchDialogs);
            Socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
        }
    }, []);

    return <NewDialog
        user={user}
        items={filter}
        onSearch={OnChangInput}
        valueInput={state}
        currentDialogId={currentDialogId}
        serchUsers={serchUsers}
        currentUserId={currentUserId}
        removeDialogId={removeDialogId}
    />
}

export default connect(({ dialogs, user }) => ({
    fetchDialogs: dialogs.fetchDialogs,
    setCurrentDialogId: dialogs.setCurrentDialogId,
    items: dialogs.items,
    user: user.data
}), Dialog)(Dialogs);