// src/pages/Guide2.js

import React, { useState } from 'react';
import GuideContent from '../components/GuideContent';
import guide2Data from '../data/guide2';

function Guide2() {
  const [showExplanation, setShowExplanation] = useState(false); // État pour afficher ou cacher l'explication
  const handleToggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="guide">
      
      <div className="pdf-link">
        <a href="/documents/formulaire.pdf" target="_blank" rel="noopener noreferrer">
          Télécharger le PDF du Guide 2
        </a>
         {/* Bouton pour afficher l'explication */}
      <div className="explanation-button">
        <button onClick={handleToggleExplanation}>
          {showExplanation ? 'Masquer l\'explication' : 'Afficher l\'explication du PDF'}
        </button>
      </div>
      {/* Contenu de l'explication */}
      {showExplanation && (
        <div className="pdf-explanation">
        <h2>Champs à remplir dans le contrat :</h2>
  
        <h3>Représentant légal :</h3>
        <ul>
          <li>Nom et prénom du représentant légal</li>
          <li>DNI (Document National d'Identité) du représentant légal</li>
          <li>Nom de l'entité représentée</li>
          <li>Adresse pour les notifications
            <ul>
              <li>Rue, numéro, code postal, localité</li>
            </ul>
          </li>
        </ul>
  
        <h3>Données du centre :</h3>
        <ul>
          <li>Nom proposé pour le centre</li>
          <li>Localité du centre</li>
          <li>Adresse du centre
            <ul>
              <li>Rue, numéro, code postal</li>
            </ul>
          </li>
          <li>Téléphone, fax et courriel du centre</li>
        </ul>
  
        <h3>Titulaire (promoteur du centre) :</h3>
        <ul>
          <li>Personne physique ou morale qui promeut le centre</li>
          <li>CIF/NIF (Numéro d'Identification Fiscale)</li>
          <li>Adresse
            <ul>
              <li>Rue, numéro, localité, code postal</li>
            </ul>
          </li>
          <li>Téléphone, fax et courriel</li>
        </ul>
  
        <h3>Représentant :</h3>
        <ul>
          <li>Nom du représentant légal</li>
          <li>CIF/NIF du représentant</li>
          <li>Adresse
            <ul>
              <li>Rue, numéro, localité, code postal</li>
            </ul>
          </li>
          <li>Téléphone, fax et courriel</li>
        </ul>
  
        <h3>Enseignement proposé :</h3>
        <p>Pour chaque niveau éducatif (1er cycle, 2e cycle, éducation primaire, secondaire, etc.), indiquer :</p>
        <ul>
          <li>Nombre d'unités (classes)</li>
          <li>Nombre de places scolaires</li>
        </ul>
  
        <h3>Date et signature :</h3>
        <p>Lieu et date de signature à remplir à la fin du document.</p>
  
        <h2>Documents à fournir :</h2>
        <ol>
          <li>
            <strong>Document National d'Identité (DNI) :</strong>
            <ul>
              <li>DNI du titulaire, promoteur et/ou représentant.</li>
            </ul>
          </li>
          <li>
            <strong>Si le titulaire est une personne morale :</strong>
            <ul>
              <li>Copie simple de l'acte de constitution de la société (ni photocopie ni copie légalisée)</li>
              <li>Document attestant la nomination du représentant de l'entité promotrice</li>
              <li>Note simple mise à jour du Registre du Commerce</li>
              <li>Document avec le numéro d'identification fiscale définitif</li>
            </ul>
          </li>
          <li>
            <strong>Déclaration responsable :</strong>
            <ul>
              <li>Déclaration attestant que la personne ou l'entité promotrice n'est pas soumise aux interdictions prévues à l'article 3 du Décret 109/1992</li>
              <li>Si le promoteur est une personne morale, la déclaration doit être faite par les dirigeants ou par les personnes détenant 20 % ou plus du capital social</li>
            </ul>
          </li>
          <li>
            <strong>Projet de travaux ou plans :</strong>
            <ul>
              <li><em>Si le bâtiment est existant :</em>
                <ul>
                  <li>Fournir les plans actuels</li>
                </ul>
              </li>
              <li><em>Si des travaux sont prévus :</em>
                <ul>
                  <li>Fournir le projet de travaux pour l'aménagement</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Projet technique signé par un professionnel compétent, incluant :</strong>
            <ul>
              <li>Justification de conformité avec la législation sur la sécurité incendie et l'accessibilité</li>
              <li>Certificat signé par un professionnel garantissant que le centre répond aux conditions :
                <ul>
                  <li>Sanitaires</li>
                  <li>Acoustiques</li>
                  <li>D'accessibilité</li>
                  <li>De sécurité</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Titre juridique de l'usage du bâtiment :</strong>
            <ul>
              <li><em>Si le bâtiment est en propriété :</em>
                <ul>
                  <li>Copie simple de l'acte notarié de propriété</li>
                </ul>
              </li>
              <li><em>Si le bâtiment est en location :</em>
                <ul>
                  <li>Contrat de location</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Centres incomplets (si applicable) :</strong>
            <ul>
              <li>Document de la mairie attestant que le centre se situe dans une zone couverte par des dispositions légales spécifiques</li>
              <li>Documents justificatifs du permis d'utilisation de l'espace extérieur, si le centre dispose ou non d'un patio</li>
            </ul>
          </li>
        </ol>
      </div>
    )};
        <a href="/documents/formulaire2.pdf" target="_blank" rel="noopener noreferrer">
          Télécharger le PDF du Guide 2
        </a>

      
      </div>
      <h1>{guide2Data.title}</h1>
      <GuideContent sections={guide2Data.sections} />
    </div>
  );
}

export default Guide2;
