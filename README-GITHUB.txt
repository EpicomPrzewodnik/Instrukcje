JAK WRZUCIC NA GITHUB PAGES

1. Otworz repozytorium na GitHubie.
2. Wrzuc zawartosc tego folderu bez dodatkowego folderu nadrzednego:
   index.html, manifest.json, service-worker.js, css, js, icons, images i .nojekyll.
3. Wejdz w Settings -> Pages.
4. Ustaw: Deploy from a branch -> main -> /(root) -> Save.
5. Po publikacji otworz adres:
   https://TWOJ_LOGIN.github.io/NAZWA_REPOZYTORIUM/
6. Przy pierwszym uruchomieniu po zmianach uzyj Ctrl+F5.
7. Gdy przegladarka trzyma stary service worker:
   F12 -> Application -> Service Workers -> Unregister,
   potem Storage -> Clear site data i odswiez strone.

Wazne: nie zmieniaj wielkosci liter w nazwach plikow.
