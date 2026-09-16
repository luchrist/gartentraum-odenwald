export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

// Der Fotopool aus der Akquise enthält aktuell keine fertigen Projektfotos,
// die eindeutig einem konkreten Referenzprojekt zugeordnet werden könnten
// (nur drei Baustellenfotos ohne Vorher-Aufnahme derselben Anlage). Eine
// Referenzsektion ohne echte Projektbilder wäre irreführend, deshalb bleibt
// die Liste leer und das Referenzen-Modul blendet sich sauber aus, bis der
// Kunde eigene Vorher/Nachher-Aufnahmen nachreicht.
export const referenzen: Referenz[] = [];
