export interface GalleryItem {
  src: string;
  alt: string;
}

// Der Akquise-Fotopool enthält für diesen Betrieb bislang nur drei
// Baustellenaufnahmen und keine breite Auswahl an Fertigstellung, Detail-
// und Team-Bildern. Für die Galerie braucht das Layout fünf ausbalancierte
// Motive, deshalb bleibt die Liste bewusst leer: die Komponente fällt dann
// auf die getesteten Template-Aufnahmen zurück, bis eigene Fotos vorliegen.
export const galleryItems: GalleryItem[] = [];
