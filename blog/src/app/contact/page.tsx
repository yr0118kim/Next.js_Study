import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import ContactForm from "../components/ContactForm";
const LINKS = [
  {
    icon: <AiFillGithub></AiFillGithub>,
    url: "",
  },
  { icon: <AiFillLinkedin></AiFillLinkedin>, url: "" },
  { icon: <AiFillInstagram></AiFillInstagram>, url: "" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact me</h2>
      <p>loveyr0118@naver.com</p>s
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-500"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or send me an email</h2>
      <ContactForm></ContactForm>
    </section>
  );
}
