import React from 'react'
import Message from '../../components/section/Message/Message'
import Img_1 from '../../assets/img_1.jpg'
import Dialogs from '../../components/section/Dialogs/Dialogs'

function Home() {
    return (

        <Dialogs items={[
            {
                user: {
                    fullName: 'Telegram',
                    avatar: Img_1
                },
                message: {
                    text: 'Код подтверждения: 00000',
                    date: '8.41 PM'
                }
            },{
                user: {
                    fullName: 'Вераника',
                    avatar: 'https://i.pinimg.com/originals/78/76/3d/78763df33e74e5a01dcbeb5356bb7fc3.jpg'
                },
                message: {
                    text: 'Привет. Ты как?',
                    date: '9.08 PM'
                }
            }
        ]} />



        // <div className="mes">
        //     <Message
        //         isMe={false}
        //         avatar={Img_1}
        //         text="Hello"
        //         date="Mon Mar 15 2021 20:20:02 GMT+0300 (Москва, стандартное время)"
        //     />
        //     <Message
        //         isMe={true}
        //         avatar={Img_1}
        //         text="Hello"
        //         date="Mon Mar 15 2021 20:36:14 GMT+0300 (Москва, стандартное время)"
        //     />
        //     <Message
        //         isMe={true}
        //         avatar={Img_1}
        //         text="Whats up?"
        //         date="Mon Mar 15 2021 20:39:36 GMT+0300 (Москва, стандартное время)"
        //     />
        //     <Message
        //         isMe={false}
        //         avatar={Img_1}
        //         text="Нихуя"
        //         date="Mon Mar 16 2021 20:39:36 GMT+0300 (Москва, стандартное время)"
        //     />
        // </div>
    )
}

export default Home
