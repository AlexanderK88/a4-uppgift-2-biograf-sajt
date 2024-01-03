
Arbetsmetodik och agila projektmetoder Uppgift 2 - en biograf-sajt

------------------------------------------------------------
**Projektregler / Best practice :**
------------------------------------------------------------

1) **BEM-namngivning:**
Vi har antagit principerna för Block Element Modifier (BEM) för att namnge våra klasser. Genom att följa BEM skapar vi en strukturerad och lättläslig kodbas där varje komponent tydligt definieras och separeras från andra.

2) **SCSS-filer och Separation of Code:**
Vi implementerar kaskaderande stilmallar (SCSS) och använder separata filer för varje modul. Denna praxis, kombinerad med SCSS-filer, främjar återanvändning av kod och underlättar underhåll genom att tydligt separera olika delar av koden. Separation of Code möjliggör en mer organiserad och skalbar arkitektur för vårt projekt.

3) **Prettier och Git-hook:**
För att säkerställa en enhetlig och välskriven kod har vi integrerat Prettier i vårt projekt och använder en Git-hook för pre-commit. Detta garanterar att vår kod överensstämmer med överenskomna konventioner och är konsekvent formaterad.

4) **Användning av citattecken:**
I vårt kodskrivande använder vi dubbla citattecken för att definiera strängar. Detta val bidrar till enhetlighet och ökad läsbarhet genom att etablera en standard för strängrepresentation i koden.

5) **Pull Requests (PR):**
För att främja kvalitet och samarbete kräver vi minst två recensioner av varje Pull Request (PR) innan den kan mergas. Detta säkerställer att kodändringar granskas noggrant och att flera perspektiv beaktas innan de integreras i huvudgrenen.

6) **Branches och PR per PBI:**
Varje Product Backlog Item (PBI) kräver en separat branch och en tillhörande Pull Request för att underlätta spårbarhet och effektiv kodhantering. Denna praxis möjliggör även en smidigare integrationsprocess för specifika ändringar.

7) **Variabelnamn med camelCasing:**
Vi använder utförliga variabelnamn med camelCasing. Detta innebär att variabelnamn är beskrivande och följer camelCase-noteringen, vilket bidrar till tydlighet och förbättrad förståelse av koden.

8) **Hantering av Merge-konflikter:**
Vid merge-konflikter förväntas den utvecklare som orsakade konflikten lösa den. Samarbete uppmuntras dock, och om konflikter uppstår mellan utvecklare bör de samarbeta för att snabbt lösa dessa och undvika onödiga förseningar.

9) **Mergning av PR i ordning:**
Pull Requests mergas i den ordning de skapas. Dock, om det uppstår akuta behov som kräver en annan ordning för att undvika flaskhalsar i projektet, prioriterar vi kontinuerlig integration och förbättring av projektet över strikt sekventiell ordning.

10) **Integritet av kodändringar:**
För att bevara integriteten i kodbasen får ingen radera eller ändra någon annans kod utan förhandsavtalad tillåtelse. Detta säkerställer en spårbar och samstämmig historik av projektets utveckling.

11) **Fullständig PR-process:**
Processen för Pull Requests inkluderar lösning av eventuella merge-konflikter, två recensioner av kodändringarna och en slutlig merge. Denna process garanterar en hög kvalitet på koden och enighet bland teamet.

12) **Responsiv design:**
Vi följer en "Mobile First"-designprincip, vilket innebär att gränssnittet optimeras för mobila enheter och skärmar över 1200px, 1200px för laptops, 998px för tablets, 480px för porträttläge i mobiler och 370px för mini-mobiler. Detta säkerställer en användarvänlig och konsekvent upplevelse över olika enheter.

13) **Variabler och mixins för responsivitet:**
För att underlätta hantering av olika skärmstorlekar skapar vi variabler och mixins för responsiv design. Denna strategi gör det möjligt att effektivt anpassa och skala vår design för olika enheter och skärmstorlekar.
