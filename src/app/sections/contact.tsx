import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faContactBook,
  faPhone,
  faAddressBook,
  faMailReply,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="flex justify-around align-middle items-center h-5/6 relative">
      <div className="w-1/4 h-1/2">
        <h2 className="text-4xl text-principal font-extrabold">Get in touch</h2>

        <br />

        <p className="font-bold">
          Ask me questions or send me your project informations. <br /> I will
          answer your inquiries in a few hours.
        </p>

        <ul className="mt-20 font-light flex flex-col justify-around h-2/3 ">
          <li>
            <span>
              <FontAwesomeIcon className="text-principal mr-3" icon={faInbox} />
            </span>
            <span>chrissraz22@gmail.com</span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon className="text-principal mr-3" icon={faPhone} />
            </span>
            <span>+261 34 76 702 09</span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon
                className="text-principal mr-3"
                icon={faAddressBook}
              />
            </span>
            <span>Lot AV015 Ambatoroka Ambony - Antananarivo Madagascar</span>
          </li>
        </ul>
      </div>

      <div className="w-2/5">
        <form action="" method="post">
          <div className="flex justify-between">
            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-2/5">
              <div>
                <small className="text-secondaire">Full Name *</small>
              </div>

              <input
                className="appearance-none  border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none bg-opacity-0 my-input"
                type="text"
                aria-label="Full name"
              />
            </div>

            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-2/5">
              <div>
                <small className="text-secondaire">Email *</small>
              </div>
              <input
                className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none  my-input"
                type="email"
                aria-label="First name"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-2/5">
              <div>
                <small className="text-secondaire">Company Name</small>
              </div>

              <input
                className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 leading-tight focus:outline-none  my-input"
                type="text"
                aria-label="Comany Name"
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
              />
            </div>
          </div>

          <div className="flex flex-col items-start border-b border-opacity-30 border-secondaire py-2 w-full">
            <div>
              <small className="text-secondaire">Your Message *</small>
            </div>

            <textarea
              className="appearance-none bg-opacity-0 border-none w-full text-principal mr-3 py-1 px-2 h-12 leading-tight focus:outline-none  my-input message-input"
              aria-label="Message"
            />

          </div>

          <div className="bg-principal p-1 w-28 flex flex-row justify-center mt-12 text-sm">
            <a href="">Send</a>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
