"use client";
import Accordion from "./components/Accordion";
import Card from "./components/card";

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(0);
  return (
    <>
      <div>
        <h1>Section Title</h1>
        <h2>Section Sub title</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid  gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          <div
            onClick={() => {
              setShow(0);
              console.log(show);
            }}
          >
            <Card />
          </div>
          <div
            onClick={() => {
              setShow(1);
              console.log(show);
            }}
          >
            <Card />
          </div>
          <div
            onClick={() => {
              setShow(2);
              console.log(show);
            }}
          >
            <Card />
          </div>
          <div
            onClick={() => {
              setShow(3);
              console.log(show);
            }}
          >
            <Card />

            {show === 0 && <>0</>}
            {show === 1 && <>1</>}
            {show === 2 && <>2</>}
            {show === 3 && <>3</>}
            {show === 4 && <>4</>}
          </div>
        </div>
      </div>
      <div>
        <div>
          <accord />
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </>
  );
}
