import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");


// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(request: Request, res:Response) {

  try {

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "razanamihoatrajeanchristian@gmail.com", 
        pass: "pdiyeuprquhkkgjj",
      },
    });
  
    let data: {
      fullName: String,
      email: String,
      companyName?: String,
      companyRole?: String,
      object: String,
      message: String,
    } = await request.json()

    let message =  "<div> Message de la part de "+ data.fullName + (data.companyName ?  " De la société "+ data.companyName : " ")+ "."+ ((data.companyRole ?  "\n Rôle dans la société "+ data.companyRole : " "))+ " \n Adresse email : "+data.email+ "</div>" + data.message


    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: data.email, // sender address
      to: "chrissraz22@gmail.com", // list of receivers
      subject: "OPPORTUNITY FROM WEBSITE ✔ " + data.object, // Subject line
      text:message, // plain text body
      html: message, // html body
    });
    
    return new Response('Mail sent')

  } catch (error:any) {

    // console.log("Error");

    // console.log(request.body.object)

    
    // console.log(JSON.parse(request.body))

    return new Response('Mail not sent. Details: '+error.message)


  }



   

}
  