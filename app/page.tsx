import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import IconBlock from "./home/iconBlock";
import TextBlock from "./home/textBlock";

export default function Home() {
  return (
    <div className="">
      <h1 className="font-bold text-5xl pt-8">Nauzet Hernández</h1>
      <h2 className="italic text-lg text-gray-500">
        Software engineer and Flutter enthusiast
      </h2>
      <p className="text-2xl py-8">I tell jokes and code for a living</p>
      <div className="grid grid-cols-2 gap-4">
        <TextBlock
          text="I'm Nauzet, a software engineer and a Flutter enthusiast who loves the front side of things"
          highlightedText="Nauzet"
        />
        <TextBlock
          text="Aspiring to build a healty and productive enviroment with my teams. Persons over company, you say?"
          highlightedText="healty and productive"
        />
        <TextBlock
          text="I live in Las Palmas, The Canary Islands, Spain; advocating for a remote work life"
          highlightedText="Las Palmas"
        />
        <TextBlock
          text="My current interests are the bass, playing chess and working out and as everything in life, it's a work in progress"
          highlightedText="interests"
        />
      </div>

      <IconBlock iconPath="" content="" />
      <IconBlock iconPath="" content="" />
      <IconBlock iconPath="" content="" />
    </div>
  );
}
