import React from "react";
import "./Collapse.scss";

export function Collapse() {
  const elts = document.querySelectorAll(".accordion-element");
  const firstActive = document.querySelector(".accordion .active");
  const section = firstActive.children[1].querySelector("p");
  const sectionHeight = section.offsetHeight + 20;
  firstActive.children[1].style.height = sectionHeight + "px";

  return (
    <div className="accordion">
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
            ateliers sur la sécurité domestique pour nos hôtes..
          </p>
        </div>
      </div>
    </div>
  );
}
