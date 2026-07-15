# Brasier — site vitrine

Un seul site, un seul dossier, prêt à être mis en ligne.

## Ce que contient ce dossier

```
package.json        ← obligatoire, indique à Vercel comment lancer le site
app/
  layout.js
  globals.css
  page.js            ← tout le contenu du site est ici
```

## Étapes pour le mettre en ligne

1. **Dézippe** ce dossier sur ton ordinateur si ce n'est pas déjà fait.
2. Va sur [github.com](https://github.com) et connecte-toi (ou crée un compte, gratuit).
3. Clique sur le **+** en haut à droite → **New repository**.
4. Donne-lui un nom (par exemple `brasier`), laisse le reste par défaut, clique **Create repository**.
5. Sur la page qui s'affiche, clique sur le lien **uploading an existing file**.
6. Ouvre le dossier `brasier` sur ton ordinateur, sélectionne **tout ce qu'il contient** (pas le dossier lui-même — tout ce qui est dedans), et glisse-le dans la zone d'upload de GitHub.
7. Descends en bas de la page, clique **Commit changes**.
8. Va sur [vercel.com](https://vercel.com), clique **Continue with GitHub** pour te connecter avec le même compte.
9. Clique **Add New** → **Project**, ton repo `brasier` apparaît dans la liste → clique **Import**.
10. Laisse tous les réglages par défaut, clique **Deploy**.
11. Après 1 à 2 minutes, ton site est en ligne avec une adresse du type `brasier.vercel.app`.

## Modifier les textes

Tout le contenu (titres, textes, adresse, téléphone) est directement dans `app/page.js` — ouvre-le avec n'importe quel éditeur de texte (même le Bloc-notes) et modifie ce qui est entre les balises.
