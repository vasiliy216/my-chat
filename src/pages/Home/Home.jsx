import React from 'react'
import { Message, Dialogs } from '../../components/'
import Img_1 from '../../assets/img_1.jpg'

function Home() {
    return (

        <Dialogs
            userId={0}
            items={[
                {
                  "_id": "6058e51bef744aa9d6c4931d",
                  "text": "Proident dolor velit dolor sunt non adipisicing cupidatat. Duis veniam labore tempor quis ullamco qui Lorem ut duis aliquip qui. Non incididunt tempor eiusmod veniam excepteur.",
                  "date": "Mon Jul 31 1972 16:49:54 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51bae536c7d2d324481",
                    "fullname": "Staci Lynch",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51b49c906663adf8352",
                  "text": "Anim dolor nulla est sit excepteur et do. Fugiat enim officia cupidatat deserunt cillum magna proident officia ipsum pariatur sint. Elit sit non incididunt exercitation.",
                  "date": "Fri Jun 10 2016 08:32:57 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51b28e4819cc236ab50",
                    "fullname": "Mandy House",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51b1d35db57d9d8daee",
                  "text": "Laborum est velit exercitation cillum sint quis. Tempor cillum aute qui ipsum occaecat qui anim. Cillum cupidatat Lorem anim deserunt qui incididunt ipsum veniam commodo adipisicing anim do tempor.",
                  "date": "Mon Jun 08 1981 04:49:19 GMT+0400 (Москва, летнее время)",
                  "user": {
                    "_id": "6058e51b7a0da5b243068cfe",
                    "fullname": "Lancaster Glover",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51bbb1c59f695c1205f",
                  "text": "Anim laboris mollit qui dolor aute dolore adipisicing elit qui. In enim sint in Lorem consectetur reprehenderit Lorem amet adipisicing commodo magna do. Ex aliqua id cupidatat non Lorem velit adipisicing ad veniam adipisicing ex excepteur.",
                  "date": "Mon Mar 06 1995 07:33:18 GMT+0200 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51bb28cf8ef862da144",
                    "fullname": "Patrice Harding",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51b4cd00e06c9a1cd9a",
                  "text": "Laborum culpa consectetur consectetur et duis nulla tempor id dolor voluptate consectetur. Cillum officia dolore veniam mollit ullamco sint nostrud eu quis commodo. Sint qui proident consectetur in do aliqua exercitation ullamco officia excepteur nulla eu occaecat.",
                  "date": "Tue Mar 26 1991 07:35:22 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51bfae6406784cd52fa",
                    "fullname": "Doyle Finley",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51bebe6d13fd48dfbb8",
                  "text": "Fugiat culpa esse irure veniam laboris pariatur ipsum velit deserunt consequat minim est id exercitation. Laboris ex excepteur commodo non mollit nisi esse aute sit pariatur sit velit proident. Sint amet anim sunt est eiusmod cillum.",
                  "date": "Thu Jan 21 2021 15:01:44 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51b41f6b78b165db894",
                    "fullname": "Fern Gonzales",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51b0f261292be2f7f73",
                  "text": "Dolor fugiat et veniam labore ex do pariatur consequat in ipsum tempor est deserunt. Incididunt nisi pariatur sit enim occaecat ullamco excepteur labore pariatur culpa ullamco incididunt nulla. Esse pariatur laboris aute id et dolore cupidatat magna reprehenderit officia in sit.",
                  "date": "Sun Jul 03 1994 21:20:57 GMT+0300 (Москва, летнее время)",
                  "user": {
                    "_id": "6058e51b4c97ca1f045bb087",
                    "fullname": "Dolly Durham",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51bd6b554367cf8fde3",
                  "text": "Dolore Lorem aliqua sunt pariatur aliqua enim duis incididunt amet. Adipisicing labore incididunt consequat cillum cillum irure deserunt magna in cupidatat. Fugiat excepteur do anim ullamco fugiat cillum ad laboris exercitation consectetur.",
                  "date": "Fri Mar 25 1983 16:34:37 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51ba72eef611a17af04",
                    "fullname": "Priscilla Russell",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51b8477862a455d004d",
                  "text": "Est tempor ad ipsum excepteur in ea ullamco sint quis. Ullamco aute sint sint reprehenderit adipisicing consequat ullamco laborum cupidatat aute. Minim deserunt pariatur ad aliquip Lorem ipsum cupidatat in Lorem commodo irure dolor ea.",
                  "date": "Tue Nov 01 1977 14:40:00 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51bbc3bbf001cc2a682",
                    "fullname": "Marisol Leblanc",
                    "avatar": null
                  }
                },
                {
                  "_id": "6058e51b94787ebe76771362",
                  "text": "Velit nisi proident nisi ipsum. Deserunt ad mollit amet et culpa mollit. Ex ullamco quis nisi aliquip ea velit sit.",
                  "date": "Tue Jun 07 1977 20:07:38 GMT+0300 (Москва, стандартное время)",
                  "user": {
                    "_id": "6058e51b9c6e56474a5d4fb8",
                    "fullname": "Teri Price",
                    "avatar": null
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
        //         avatar={false}
        //         text="Нихуя"
        //         date="Mon Mar 16 2021 20:39:36 GMT+0300 (Москва, стандартное время)"
        //     />
        // </div>
    )
}

export default Home
