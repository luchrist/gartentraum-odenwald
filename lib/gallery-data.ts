export interface GalleryItem {
  src: string;
  alt: string;
}

// Kuratiert aus der bisherigen Website des Betriebs
// (gartentraumodenwald.wordpress.com): fünf Motive aus realen Projekten von
// Michael und Benjamin Arnold, von der Schwimmteichanlage bis zur
// geschwungenen Holzterrasse.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/galerie/schwimmteich-mit-terrasse.jpg",
    alt: "Naturnaher Schwimmteich mit Holzdeck und Sitzbereich vor modernem Wohnhaus",
  },
  {
    src: "/assets/galerie/pflasterweg-dunkler-stein.jpg",
    alt: "Geschwungener Weg aus dunklen Pflasterelementen entlang einer Staudenbepflanzung",
  },
  {
    src: "/assets/galerie/naturteich-detail.jpg",
    alt: "Detail eines angelegten Naturteichs mit klarem Wasser, Kies und Holzsteg",
  },
  {
    src: "/assets/galerie/gartenanlage-kopfsteinpflaster.jpg",
    alt: "Fertige Gartenanlage mit Kopfsteinpflaster, frischem Rasen und Randbepflanzung",
  },
  {
    src: "/assets/galerie/holzterrasse-geschwungen.jpg",
    alt: "Geschwungene Holzterrasse zwischen Hostas und Findlingen",
  },
];
