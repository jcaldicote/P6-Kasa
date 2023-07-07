import React, { useEffect, useRef } from "react";
import "./Collapse.scss";

export function Collapse() {
  const accordionRef = useRef(null);

  useEffect(() => {
    const elts = accordionRef.current.querySelectorAll(".accordion-element");
    const firstActive =
      accordionRef.current.querySelector(".accordion .active");
    let section = firstActive.children[1].querySelector("p");
    let sectionHeight = section.offsetHeight + 20;
    firstActive.children[1].style.height = sectionHeight + "px";

    for (let elt of elts) {
      elt.addEventListener("click", function () {
        const active = accordionRef.current.querySelector(".accordion .active");

        active.classList.remove("active");
        active.children[1].style.height = 0;

        this.classList.add("active");

        let section = this.children[1].querySelector("p");
        let sectionHeight = section.offsetHeight + 20;
        this.children[1].style.height = sectionHeight + "px";
      });
    }
  }, []);

  return (
    <div ref={accordionRef} className="accordion">
      <div className="accordion-element active">
        <h1 className="accordion-header">Fiabilité</h1>
        <div className="accordion-content">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </div>
      <div className="accordion-element">
        <h1 className="accordion-header">Respect</h1>
        <div className="accordion-content">
          <p>
            les annonces postées sur kasa garantissent une fiabilité totale. les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </div>
      <div className="accordion-element">
        <h1 className="accordion-header">Service</h1>
        <div className="accordion-content">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      </div>
      <div className="accordion-element">
        <h1 className="accordion-header">Sécurité</h1>
        <div className="accordion-content">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </div>
  );
}
