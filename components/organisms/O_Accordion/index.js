import React, { useEffect, useState, useRef } from "react";
import { Accordions, Panel } from "./style";

const Index = (props) => {
  const { title, number, children } = props;
  const sectionRef = useRef(null);
  const [acc2, setAcc2] = useState();
  const [toggleAcc, setToggleAcc] = useState(false);

  useEffect(() => {
    let acc = document.getElementsByClassName("accordion");
    setAcc2(acc);
    let i;

    if (acc2) {
      for (i = 0; i < acc2.length; i++) {
        acc2[i].addEventListener("click", function () {
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    }
  }, [acc2]);

  return (
    <>
      <Accordions
        onClick={() => {
          setToggleAcc(!toggleAcc);
        }}
        ref={sectionRef}
        className="accordion"
      >
        <span style={{ color: "#009FE3", fontWeight: "normal" }}>
          {number + 1}. {title}
        </span>
      </Accordions>
      <Panel>{children}</Panel>
    </>
  );
};

export default Index;
