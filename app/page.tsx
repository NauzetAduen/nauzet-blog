import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import IconBlock from "./home/iconBlock";
import TextBlock from "./home/textBlock";

export default function Home() {
  return (
    <div>
      <h1>Nauzet Hernández</h1>
      <h2>Software Engineer</h2>
      <p>I develop things and complain at my managers</p>
      <TextBlock
        title="What do I do?"
        content="I’m a Software engineer with experience in the front-end side of things.\nAs a Flutter enthusiast, I love building mobile apps.\nI challenge myself everyday to help the teams I work with, trying to create a healthy and productive enviroment."
      />
      <TextBlock
        title="About me"
        content="My name is Nauzet, often known as Nau by the masses. I live in Las Palmas de Gran Canaria, Spain.\nI’m a Software engineer by the University of Las Palmas de Gran Canaria, with an intesification in software engineering.\nRecently, I’ve started learning to play the bass, with a special interest in funk bass music.
I go to the gym a couple of times a week, so.., a work in progress."
      />
      <IconBlock iconPath="" content="" />
      <IconBlock iconPath="" content="" />
      <IconBlock iconPath="" content="" />
    </div>
  );
}
