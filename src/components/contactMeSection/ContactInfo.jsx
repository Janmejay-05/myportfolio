import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="janmejayazala@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+8401300367" Image={FiPhone} />
      <SingleInfo text="Ahmedabad,India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
