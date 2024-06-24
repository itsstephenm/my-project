
import Image from "next/image";
import  Main from '../../components/Main'
import Aboout from '../../components/Aboout';
import Skills from "../../components/Skills";
import Projects from '../app/Projects/page';
import Contactsection from '../../components/Contactsection';
import Mode from  './ModeToggleButton/Mode'

export default function Home() {

  return (
    <div>
      <title>Stephen | Front-end Developer</title>
      <Main/>
      <Aboout/>
      <Skills/>
      <Projects/>
      <Contactsection/>
    </div>
  );
}
