// const nodemailer = require("nodemailer")

// // const options = {
// //     host: process.env.NODEMAILER_HOST,
// //     port: Number(process.env.NODEMAILER_PORT),
// //     secure: false,
// //     auth: {
// //         user: process.env.NODEMAILER_USER,
// //         pass: process.env.NODEMAILER_PASSWORD,
// //     }    
// // }

// async function asd() {
//     // const testAccount = await nodemailer.createTestAccount();

//     const options = {
//         service: 'email',
//         auth: {
//             user: process.env.NODEMAILER_USER,
//             pass: process.env.NODEMAILER_PASSWORD,
//         }
//     }

//     const transport = nodemailer.createTransport(options)

//     const info = await transport.sendMail(
//         {
//             from: 'test_to_tst@mail.ru',
//             to: 'vasiliypunko@mail.ru',
//             subject: "Email confirmation",
//             html: `Click on the <a href="http://localhost:4000/verifi?hash=">confirmation link</a>`,
//         },
//         function (err, info) {
//             if (err) console.log(err);
//             else console.log(info);
//         }
//     );

//     console.log(info)
// }

// asd();

// module.exports = asd;

// // module.exports = () => nodemailer.createTransport({
// //     host: process.env.NODEMAILER_HOST,
// //     port: Number(process.env.NODEMAILER_PORT),
// //     secure: false,
// //     auth: {
// //         user: process.env.NODEMAILER_USER,
// //         pass: process.env.NODEMAILER_PASSWORD,
// //     }
// // })