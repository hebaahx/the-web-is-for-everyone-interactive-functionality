# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Dit project is gemaakt voor Frankendael, een botanische tuin in Amsterdam. In de webapp kunnen bezoekers nieuws lezen over planten in het park, artikelen liken en reacties plaatsen. Ook kunnen ze de plantencollectie bekijken, verdeeld in planten die op dit moment bloeien en planten die al uitgebloeid zijn.

De interactie in de app werkt met GET en POST requests. Als een bezoeker een artikel opent, vraagt de server via een GET request informatie op bij de Directus API. Denk aan het artikel zelf, het aantal likes en de reacties. De server zet dit samen en stuurt het als HTML naar de browser.

Als een bezoeker een like geeft of een reactie plaatst, wordt er via een formulier een POST request naar de server gestuurd. De server slaat deze gegevens op in de Directus API en stuurt de gebruiker daarna terug naar dezelfde pagina. Hierdoor werkt alles zonder JavaScript, alleen met HTML en HTTP.

Na het versturen van een like of reactie krijgt de bezoeker een bevestiging te zien. Gaat er iets mis, dan verschijnt er een foutmelding. Dit wordt geregeld via kleine stukjes informatie in de URL, zoals ?liked=true of ?error=true, die de server doorgeeft aan de template
- 🌐 Live demo: https://the-web-is-for-everyone-interactive-tlju.onrender.com

- <img width="350" height="450" alt="image" src="https://github.com/user-attachments/assets/ad6633e6-daf4-4c8f-bf1e-a3696146c992" />


## Gebruik
De webapp is bedoeld voor parkbezoekers die via hun telefoon meer willen weten over de planten in Frankendael.

Als gebruiker kun je nieuws lezen over planten, artikelen liken en reacties plaatsen via het spreekwolkje. Ook kun je de plantencollectie bekijken (in bloei en na de bloei) en een plant aanklikken voor meer informatie.

De app laat verschillende states zien: een succesmelding na een like of reactie, een foutmelding als er iets misgaat, een lege state als er nog geen reacties zijn en de normale weergave met bestaande likes en reacties.

Dit sluit aan op de user story’s. Als gebruiker kun je een artikel liken om je interesse te tonen, waarbij het aantal likes direct wordt bijgewerkt. Ook kun je reageren op een artikel, waarna je ziet dat het aantal reacties stijgt en jouw reactie zichtbaar wordt.

## Kenmerken
In dit project is Node.js met Express gebruikt om de server te bouwen. Hiermee worden GET en POST requests afgehandeld, zoals het ophalen van artikelen en het versturen van likes en reacties.

De HTML-pagina’s worden opgebouwd met LiquidJS. Deze templating engine vult de pagina met data uit de Directus API, zoals nieuws, planten, likes en comments.

In de HTML is gebruikgemaakt van formulieren om interactie mogelijk te maken zonder JavaScript. Ook wordt het <details> en <summary> element gebruikt als een simpele comment popup.

De webapp werkt daardoor volledig server-side, met een duidelijke en toegankelijke structuur.

### Aanpak: Progressive Enhancement
In dit project is gewerkt volgens het principe van progressive enhancement: eerst een basis die altijd werkt, daarna extra verbeteringen voor moderne browsers.

De basis is opgebouwd met HTML die zonder JavaScript al werkt. Likes en reacties worden verstuurd via <form> elementen met POST requests. Voor het openen van reacties is <details> en <summary> gebruikt, zodat dit native werkt in de browsweer.

Daarna is de styling toegevoegd met CSS. Hierbij is rekening gehouden met browserondersteuning. Er is gebruik gemaakt van CSS nesting, met fallbacks voor oudere browsers. Ook is gelet op toegankelijkheid. Animaties worden alleen getoond als de gebruiker heeft aangegeven dat beweging geen probleem is, via prefers-reduced-motion. https://github.com/hebaahx/the-web-is-for-everyone-interactive-functionality/blob/e2877480c090f0ac39df2f16db2cc576cdb048f7/public/style.css#L533-L538

Na interacties zoals een like of reactie geeft de server feedback via de URL. Met query parameters zoals liked=true of error=true wordt in de template bepaald welke melding getoond wordt. Zo ziet de gebruiker een succes-, fout- of lege state. <img width="300" height="350" alt="image" src="https://github.com/user-attachments/assets/dda029ef-c5f4-4f55-a350-81e4765b037a" />


## Installatie
Wil je als developer met deze code werken, dan kun je de volgende stappen volgen.

Dit doe je door deze repository te clonen op je eigen computer:
git clone https://github.com/hebaahx/the-web-is-for-everyone-interactive-functionality

Ga daarna naar de map van het project en installeer alle benodigde packages:
npm install

Start vervolgens de server met:
npm start

Open daarna je browser en ga naar:
http://localhost:8000

De app werkt direct, omdat de data wordt opgehaald via de Directus API van FDND Agency. Je hebt dus geen eigen database nodig.


## Bronnen
- https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/resize
- https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
- https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/
- https://caniuse.com/
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
