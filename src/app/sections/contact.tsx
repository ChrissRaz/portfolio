import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { isCancel, AxiosError } from "axios";

import {
  faContactBook,
  faPhone,
  faAddressBook,
  faMailReply,
  faInbox,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { T_INTREST } from "@/app/types";



const Contact = ({userIntrest}:any) => {
  
  userIntrest = userIntrest as T_INTREST;

  const [formData, SetFormData] = useState<{
    fullName: string;
    email: string;
    companyName: string;
    companyRole: string;
    object: string;
    message: string;
  }>({
    fullName: "",
    email: "",
    companyName: "",
    companyRole: "",
    object: "",
    message: "",
  });

  const [emailValid, setEmailValidation] = useState<undefined | boolean>(
    undefined
  );

  const [isSubmitted, setSubmsion] = useState<boolean>(false)

  const [formStatus, setFormStatus] = useState<"SENDING"| "SENT" | "FAILED" | undefined>(undefined)


  const handleSentEvent = (e: any) => {
    // console.log("send");
    setSubmsion(true);

    if (formData.fullName.trim().length!=0 && formData.email.trim().length!=0 && formData.object.trim().length!=0 && formData.message.trim().length!=0){

      setFormStatus("SENDING");
      axios
      .post("/api/mail", {...formData, message: formData.message + " NAVIGATION: " + (userIntrest ?? "Aucun")})
      .then(function (response) {
        // console.log(response);
        setFormStatus("SENT");
      })
      .catch(function (error) {
        // console.log(error);
        setFormStatus("FAILED");
      });

    }
    
  };

  const handleInputChange = (e: any) => {

    let value = e.target.value;

    SetFormData({
      ...formData,
      [e.target.name]: value,
    });

    if (e.target.name == "email") {
      if (/\S+@\S+\.\S+/.test(value)) {
        setEmailValidation(true);
      } else {
        setEmailValidation(false);
      }
    }
  };

  return (
    <section className="flex flex-col justify-between md:flex-row md:justify-around md:align-middle md:items-center h-5/6 relative top-16 md:top-0 ml-10 md:ml-0">

      <div className="w-[85%] md:w-1/4 h-1/2">
        <h2 className="text-xl md:text-4xl text-principal font-extrabold">Get in touch   <FontAwesomeIcon className="text-principal ml-5 animate-wave origin-bottom text-3xl md:text-5xl" icon={faHandshake} /></h2>

        <br />

        <p className="font-bold text-[13px] md:text[22px]">
          Ask me questions or send me your project informations. <br /> I will
          answer your inquiries in a few time.
        </p>

        <ul className="mt-4 mb-2 md:mb-0 md:mt-20 font-light flex flex-col md:justify-around md:h-2/3 ">
          <li>
            <span>
              <FontAwesomeIcon className="text-principal mr-3" icon={faInbox} />
            </span>
            <span className="text-[12px] md:text-[16px]">chrissraz22@gmail.com</span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon className="text-principal mr-3" icon={faPhone} />
            </span>
            <span className="text-[12px] md:text-[16px]" >+261 34 76 702 09</span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon
                className="text-principal mr-3"
                icon={faAddressBook}
              />
            </span>
            <span className="text-[12px] md:text-[16px]">Lot AV015 Ambatoroka Ambony - Antananarivo Madagascar</span>
          </li>
        </ul>
      </div>

      <div className="w-[90%] md:w-2/5">
        <form method="post">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-full md:w-2/5 relative">
              <div>
                <small className="text-secondaire text-[9px]">Full Name *</small>
              </div>

              <input
                className="appearance-none  border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none bg-opacity-0 my-input"
                type="text"
                aria-label="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                title="Ce champs est requis"
              />
              { formData.fullName.length == 0  && isSubmitted? 
                <div className="absolute -bottom-4 ">
                  <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                </div> : ""
              }
            </div>

            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2  w-full md:w-2/5 relative">
              <div>
                <small className="text-secondaire">Email *</small>
              </div>
              <input
                className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none  my-input"
                type="email"
                aria-label="First name"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                title="Ce champs est requis"
              />
              { emailValid == true || emailValid  == undefined || formData.email.length ==0 ? (
                ""
              ) : (
                <div className="absolute -bottom-4 ">
                  <small className="text-[10px] text-[#F70000]">
                    Invalide ex: identifiant@domain.com
                  </small>
                </div>
              )}
              { formData.email.length == 0  && isSubmitted? 
                <div className="absolute -bottom-4 ">
                  <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                </div> : ""
              }
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-2/5 relative">
              <div>
                <small className="text-secondaire">Company Name</small>
              </div>

              <input
                className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none  my-input"
                type="text"
                aria-label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-2/5">
              <div>
                <small className="text-secondaire">
                  Your Role in the company
                </small>
              </div>
              <input
                className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none  my-input"
                type="email"
                aria-label="Role in company"
                name="companyRole"
                value={formData.companyRole}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-full relative mb-2">
            <div>
              <small className="text-secondaire">Objet *</small>
            </div>

            <input
              className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none  my-input"
              type="text"
              aria-label="Object"
              name="object"
              value={formData.object}
              onChange={handleInputChange}
              required
              title="Ce champs est requis"
            />
              { formData.object.length == 0  && isSubmitted? 
                <div className="absolute -bottom-4 ">
                  <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                </div> : ""
              }
          </div>

          <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-full">
            <div>
              <small className="text-secondaire">Your Message *</small>
            </div>

            <textarea
              className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 h-12 leading-tight focus:outline-none  my-input message-input"
              aria-label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              title="Ce champs est requis"
            />
              { formData.message.length == 0  && isSubmitted? 
                <div className="absolute bottom-2 ">
                  <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                </div> : ""
              }
            {/* <div className="absolute -bottom-4 ">
              <small className="text-[10px] text-[#F70000]">Requis</small>
            </div> */}
            
          </div>

          <span className="bg-principal p-1 w-28 flex flex-row justify-center mt-12 text-sm cursor-pointer">
            <a onClick={handleSentEvent}>Send</a>
          </span>
          <span>
            { formStatus=="SENDING" ? <div className="text-[10px] text-[#179cd9]"> Sending your message... </div> : ""}
            { formStatus=="SENT" ?  <div className="text-[10px] text-[#4ECB71]"> Thank you for your contact, I will answer you as soon as possible : ) </div>: ""}
            { formStatus=="FAILED" ? <div className="text-[10px] text-[#F70000]"> An error has occurred, please try again and if the error persists you can send me your message from the address beside </div> : ""}
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
