import { Metadata } from "next";
import Hero from "../components/Hero";
const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export const metadata: Metadata = {
  title: 'About me',
  description:'Yerim에 대하여'
}

export default function PostPage() {
  return (
    <>
      <Hero />

      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br /> 사람과 디자인을 담는 웹앱을
          만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Carrer</h2>
        <p>
          구글러 (-Now)
          <br />
          메이스북 (-2019)
          <br />
          삼준전자 (-2015)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node
          <br />
          Git, Clean Code
          <br />
          VS Code, IntelliJ, MongoDB
        </p>
      </section>
    </>
  );
}
