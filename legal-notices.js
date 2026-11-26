const companyName = 'IDEAL TREND HUNGARY Szolgáltató és Kereskedelmi Korlátolt Felelősségű Társaság';
const companyAddress = '8095 Pákozd, Szeder utca 33–37.';
const companyCourt = 'Székesfehérvári Törvényszék Cégbírósága';
const contactEmail = '<a href="mailto:info@ith13.com">info@ith13.com</a>';
const hostingEmail = '<a href="mailto:info@hetzner.com">info@hetzner.com</a>';
const processorAgreement = 'https://web3forms.com/dpa';
const supervisoryAuthority = 'https://www.naih.hu/';

const LEGAL_NOTICES = {
  en: {
    close: 'Close',
    privacy: `
      <p>Updated <time datetime="2026-11-26">26 November 2026</time></p>
      <h3>Data controller</h3>
      <p><strong>IDEAL TREND HUNGARY Kft.</strong> (ITH Group), ${companyAddress}, Hungary.
        Company registration number 07-09-032509. Email ${contactEmail}. Phone +36 30 527 2010.</p>
      <h3>Enquiries and requests for quotation</h3>
      <p>We use your name, email address, any company or organisation you identify and the details
        you provide to respond, discuss your project and prepare a quote. Your name and email address
        are required to submit the form and receive a reply. The remaining fields are optional.</p>
      <p>For business contacts and general enquiries, our legal basis is our legitimate interest in
        responding to enquiries and discussing potential orders (GDPR Article 6(1)(f)). If you request
        a quote in your own name as a potential contracting party, we process the data necessary to
        take those steps at your request (GDPR Article 6(1)(b)).</p>
      <h3>Service providers and international transfers</h3>
      <p>Web3Forms, operated by Web3Creative, processes the form submissions on our behalf and sends them
        to ${contactEmail}. DotRoll Kft. in Hungary provides our email service. Web3Creative operates from India
        and may process data outside the European Economic Area, including through its subprocessors.
        The European Commission's standard contractual clauses are incorporated into the
        <a href="${processorAgreement}">Web3Forms Data Processing Agreement</a>. You can ask for a copy of the applicable
        safeguards at ${contactEmail}.</p>
      <h3>Website hosting and security</h3>
      <p>Hetzner Online GmbH provides hosting. The server processes technical information such as IP
        address, request time, requested resource and browser information to serve the website and
        investigate errors and abuse. Our legitimate interest is operating and protecting the website
        (GDPR Article 6(1)(f)). See the <a href="#cookie-policy" data-legal="cookie">Cookie Policy</a>
        for how the site remembers your language.</p>
      <h3>Retention</h3>
      <p><strong>Web3Forms automatically deletes submissions one year after receipt.</strong>
        In our mailbox, we keep the correspondence while the enquiry is open or the quote is still valid.
        Data needed for an order, a legal obligation or the handling of a claim is kept for the relevant
        purpose. Server logs follow the server's log rotation schedule. Log entries needed to
        investigate a security incident may be kept until the investigation is complete.</p>
      <h3>Your rights</h3>
      <p>At ${contactEmail} you can request access, correction, erasure or restriction of your personal data,
        and data portability where applicable. You can complain to a supervisory authority, including
        Hungary's <a href="${supervisoryAuthority}">National Authority for Data Protection and Freedom of Information
        (NAIH)</a>, or seek a judicial remedy.</p>
      <h3>Right to object</h3>
      <p>You can object at any time, on grounds relating to your particular situation, to processing based
        on legitimate interest. Send your request to ${contactEmail}.</p>`,
    cookie: `
      <p>This website uses no analytics or advertising trackers. When you choose a language, the site
        saves that choice in your browser under <code>ith-language</code> for later visits.
        The preference is valid for 30 days from your selection. The site removes an expired entry on
        your next visit. You can clear it at any time by deleting this site's data in your browser.</p>
      <p>For hosting and enquiries, see the <a href="#privacy-policy" data-legal="privacy">Privacy Policy</a>.</p>`,
    imprint: `
      <h3>Website operator</h3>
      <p><strong>${companyName}</strong> (IDEAL TREND HUNGARY Kft.)<br>
        Registered office ${companyAddress}, Hungary<br>
        Registration court ${companyCourt} (Company Court of the Székesfehérvár Regional Court)<br>
        Company registration number 07-09-032509<br>
        Tax number 24740054-2-07<br>EU VAT number HU24740054<br>
        Email ${contactEmail}<br>Phone +36 30 527 2010</p>
      <h3>Hosting provider</h3>
      <p>Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany<br>Email ${hostingEmail}</p>
      <h3>Enquiries and orders</h3>
      <p>Use the forms to request a quote. Manufacturing, pricing and delivery terms are agreed separately for each order.</p>`
  },
  hu: {
    close: 'Bezárás',
    privacy: `
      <p>Frissítve <time datetime="2026-11-26">2026. november 26.</time></p>
      <h3>Adatkezelő</h3>
      <p><strong>IDEAL TREND HUNGARY Kft.</strong> (ITH Group), ${companyAddress}, Magyarország.
        Cégjegyzékszám 07-09-032509. E-mail ${contactEmail}. Telefon +36 30 527 2010.</p>
      <h3>Kapcsolatfelvétel és ajánlatkérés</h3>
      <p>A megkeresés megválaszolásához, a projekt egyeztetéséhez és az ajánlat elkészítéséhez a nevét,
        e-mail-címét, a megadott cég vagy szervezet nevét és a megkeresés részleteit kezeljük.
        Az űrlap elküldéséhez és a válaszadáshoz a név és az e-mail-cím megadása szükséges.
        A többi mező kitöltése önkéntes.</p>
      <p>Céges kapcsolattartók és általános megkeresések esetén a jogalap a megkeresések
        megválaszolásához és a lehetséges megrendelések egyeztetéséhez fűződő jogos érdekünk
        (GDPR 6. cikk (1) bekezdés f) pont). Ha saját nevében, leendő szerződő félként kér ajánlatot,
        az Ön kérésére tett szerződéskötés előtti lépésekhez szükséges adatokat kezeljük
        (GDPR 6. cikk (1) bekezdés b) pont).</p>
      <h3>Szolgáltatók és nemzetközi adattovábbítás</h3>
      <p>A Web3Creative által üzemeltetett Web3Forms adatfeldolgozóként továbbítja az űrlapokon megadott
        adatokat az ${contactEmail} postafiókba. A levelezési szolgáltatást a magyarországi DotRoll Kft.
        biztosítja. A Web3Creative Indiából működik, és alvállalkozóin keresztül az Európai Gazdasági
        Térségen kívül is kezelhet adatokat. Az Európai Bizottság adattovábbítási szerződéses
        kikötéseit a <a href="${processorAgreement}">Web3Forms adatfeldolgozási megállapodása</a> tartalmazza.
        Az alkalmazott garanciák másolata az ${contactEmail} címen kérhető.</p>
      <h3>Tárhely és biztonság</h3>
      <p>A tárhelyszolgáltató a Hetzner Online GmbH. A kiszolgáló a weboldal működtetéséhez,
        a hibák kivizsgálásához és a visszaélések megelőzéséhez technikai adatokat kezel,
        például IP-címet, a kérés időpontját, a lekért erőforrást és böngészőadatokat.
        A jogalap a weboldal működtetéséhez és védelméhez fűződő jogos érdekünk
        (GDPR 6. cikk (1) bekezdés f) pont). A nyelvválasztásról a
        <a href="#cookie-policy" data-legal="cookie">Cookie-szabályzat</a> ad tájékoztatást.</p>
      <h3>Adatmegőrzés</h3>
      <p><strong>A Web3Forms a beküldött űrlapadatokat a beérkezéstől számított egy év után automatikusan törli.</strong>
        A postafiókban a levelezést addig őrizzük, amíg a megkeresés nyitott vagy az ajánlat érvényes.
        A megrendeléshez, jogi kötelezettséghez vagy jogi igény rendezéséhez szükséges adatokat
        az adott célhoz igazodó ideig őrizzük meg. A szervernaplókra a kiszolgáló naplóforgatási
        rendje vonatkozik. A biztonsági eseményhez kapcsolódó bejegyzéseket a kivizsgálás lezárásáig
        megőrizhetjük.</p>
      <h3>Érintetti jogok</h3>
      <p>Az ${contactEmail} címen kérheti az adataihoz való hozzáférést, azok helyesbítését, törlését vagy
        az adatkezelés korlátozását, illetve az alkalmazandó feltételek mellett az adathordozhatóságot.
        Panaszt tehet a felügyeleti hatóságnál, Magyarországon a
        <a href="${supervisoryAuthority}">Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH)</a>,
        valamint bírósághoz fordulhat.</p>
      <h3>Tiltakozáshoz való jog</h3>
      <p>Saját helyzetével kapcsolatos okból bármikor tiltakozhat a jogos érdeken alapuló
        adatkezelés ellen az ${contactEmail} címen.</p>`,
    cookie: `
      <p>A weboldal analitikai és hirdetési követőeszközök nélkül működik. A választott nyelvet
        a böngésző helyi tárhelyén, az <code>ith-language</code> kulcs alatt tároljuk a későbbi
        látogatásokhoz. A beállítás a választástól számított 30 napig érvényes. A lejárt bejegyzést
        a következő látogatáskor töröljük. A böngészőben a webhely adatainak törlésével bármikor eltávolíthatja.</p>
      <p>A tárhely és a kapcsolatfelvétel részleteit az
        <a href="#privacy-policy" data-legal="privacy">Adatkezelési tájékoztató</a> tartalmazza.</p>`,
    imprint: `
      <h3>Weboldal üzemeltetője</h3>
      <p><strong>${companyName}</strong> (IDEAL TREND HUNGARY Kft.)<br>
        Székhely ${companyAddress}<br>
        Nyilvántartó cégbíróság ${companyCourt}<br>
        Cégjegyzékszám 07-09-032509<br>
        Adószám 24740054-2-07<br>Közösségi adószám HU24740054<br>
        E-mail ${contactEmail}<br>Telefon +36 30 527 2010</p>
      <h3>Tárhelyszolgáltató</h3>
      <p>Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Németország<br>E-mail ${hostingEmail}</p>
      <h3>Ajánlatkérés és megrendelés</h3>
      <p>Az űrlapon ajánlatot kérhet. A gyártási, árazási és szállítási feltételekről megrendelésenként külön állapodunk meg.</p>`
  },
  de: {
    close: 'Schließen',
    privacy: `
      <p>Aktualisiert am <time datetime="2026-11-26">26. November 2026</time></p>
      <h3>Verantwortlicher</h3>
      <p><strong>IDEAL TREND HUNGARY Kft.</strong> (ITH Group), ${companyAddress}, Ungarn.
        Handelsregisternummer 07-09-032509. E-Mail ${contactEmail}. Telefon +36 30 527 2010.</p>
      <h3>Kontakt und Angebotsanfragen</h3>
      <p>Wir verarbeiten Ihren Namen, Ihre E-Mail-Adresse, gegebenenfalls Ihr Unternehmen oder Ihre
        Organisation und Ihre Angaben, um zu antworten, das Projekt zu besprechen und ein Angebot
        zu erstellen. Name und E-Mail-Adresse sind für das Absenden und die Antwort erforderlich.
        Die übrigen Angaben sind freiwillig.</p>
      <p>Bei geschäftlichen Kontakten und allgemeinen Anfragen beruht die Verarbeitung auf unserem
        berechtigten Interesse an der Bearbeitung von Anfragen und der Abstimmung möglicher Aufträge
        (Art. 6 Abs. 1 Buchst. f DSGVO). Wenn Sie im eigenen Namen als möglicher Vertragspartner
        ein Angebot anfordern, verarbeiten wir die für die von Ihnen angefragten vorvertraglichen
        Maßnahmen erforderlichen Daten (Art. 6 Abs. 1 Buchst. b DSGVO).</p>
      <h3>Dienstleister und internationale Übermittlungen</h3>
      <p>Web3Forms wird von Web3Creative betrieben und übermittelt als Auftragsverarbeiter die Formulardaten
        an ${contactEmail}. DotRoll Kft. in Ungarn stellt unseren E-Mail-Dienst bereit. Web3Creative ist
        von Indien aus tätig und kann Daten auch über seine Unterauftragsverarbeiter außerhalb
        des Europäischen Wirtschaftsraums verarbeiten. Die Standardvertragsklauseln der Europäischen
        Kommission sind Bestandteil der <a href="${processorAgreement}">Auftragsverarbeitungsvereinbarung von Web3Forms</a>.
        Eine Kopie der einschlägigen Garantien können Sie unter ${contactEmail} anfordern.</p>
      <h3>Webhosting und Sicherheit</h3>
      <p>Hetzner Online GmbH stellt das Hosting bereit. Der Server verarbeitet technische Daten wie
        IP-Adresse, Zeitpunkt der Anfrage, angeforderte Ressource und Browserinformationen zur
        Bereitstellung der Website, Fehleranalyse und Missbrauchsprävention. Rechtsgrundlage ist
        unser berechtigtes Interesse am Betrieb und Schutz der Website (Art. 6 Abs. 1 Buchst. f DSGVO).
        Informationen zur Sprachauswahl finden Sie in der
        <a href="#cookie-policy" data-legal="cookie">Cookie-Richtlinie</a>.</p>
      <h3>Speicherdauer</h3>
      <p><strong>Web3Forms löscht die Formulareingaben automatisch ein Jahr nach Eingang.</strong>
        Im Postfach bewahren wir die Korrespondenz auf, solange die Anfrage offen oder das Angebot
        gültig ist. Daten für einen Auftrag, eine gesetzliche Verpflichtung oder einen Rechtsanspruch
        bewahren wir für den jeweiligen Zweck auf. Für Serverprotokolle gilt die Protokollrotation
        des Servers. Zur Untersuchung eines Sicherheitsvorfalls benötigte Einträge können bis zum
        Abschluss der Untersuchung aufbewahrt werden.</p>
      <h3>Ihre Rechte</h3>
      <p>Unter ${contactEmail} können Sie Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung
        und, soweit anwendbar, Datenübertragbarkeit verlangen. Sie können sich bei einer
        Aufsichtsbehörde beschweren, etwa bei der
        <a href="${supervisoryAuthority}">ungarischen Datenschutz- und Informationsfreiheitsbehörde (NAIH)</a>,
        oder gerichtlichen Rechtsschutz in Anspruch nehmen.</p>
      <h3>Widerspruchsrecht</h3>
      <p>Sie können unter ${contactEmail} jederzeit aus Gründen, die sich aus Ihrer besonderen Situation
        ergeben, gegen die Verarbeitung auf Grundlage berechtigter Interessen Widerspruch einlegen.</p>`,
    cookie: `
      <p>Diese Website verwendet keine Analyse- oder Werbetracker. Wenn Sie eine Sprache wählen,
        speichert die Website Ihre Auswahl unter <code>ith-language</code> im lokalen Browserspeicher
        für spätere Besuche. Die Einstellung ist ab der Auswahl 30 Tage gültig. Ein abgelaufener
        Eintrag wird beim nächsten Besuch gelöscht. Sie können ihn jederzeit über die Website-Daten
        Ihres Browsers entfernen.</p>
      <p>Informationen zu Webhosting und Anfragen finden Sie in der
        <a href="#privacy-policy" data-legal="privacy">Datenschutzerklärung</a>.</p>`,
    imprint: `
      <h3>Betreiber der Website</h3>
      <p><strong>${companyName}</strong> (IDEAL TREND HUNGARY Kft.)<br>
        Sitz ${companyAddress}, Ungarn<br>
        Registergericht ${companyCourt}<br>
        Handelsregisternummer 07-09-032509<br>
        Steuernummer 24740054-2-07<br>Umsatzsteuer-Identifikationsnummer HU24740054<br>
        E-Mail ${contactEmail}<br>Telefon +36 30 527 2010</p>
      <h3>Hosting-Anbieter</h3>
      <p>Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland<br>E-Mail ${hostingEmail}</p>
      <h3>Anfragen und Aufträge</h3>
      <p>Über das Formular können Sie ein Angebot anfordern. Fertigungs-, Preis- und Lieferbedingungen vereinbaren wir für jeden Auftrag einzeln.</p>`
  },
  it: {
    close: 'Chiudi',
    privacy: `
      <p>Aggiornata il <time datetime="2026-11-26">26 novembre 2026</time></p>
      <h3>Titolare del trattamento</h3>
      <p><strong>IDEAL TREND HUNGARY Kft.</strong> (ITH Group), ${companyAddress}, Ungheria.
        Numero di registrazione 07-09-032509. E-mail ${contactEmail}. Telefono +36 30 527 2010.</p>
      <h3>Contatti e richieste di preventivo</h3>
      <p>Trattiamo il nome, l'indirizzo e-mail, l'eventuale azienda o organizzazione e le informazioni
        fornite per rispondere, discutere il progetto e preparare un preventivo. Il nome e l'indirizzo
        e-mail sono necessari per inviare il modulo e ricevere una risposta. Gli altri campi sono facoltativi.</p>
      <p>Per i contatti aziendali e le richieste generali, la base giuridica è il nostro legittimo
        interesse a gestire le richieste e discutere eventuali ordini (art. 6, par. 1, lett. f del GDPR).
        Se chiedi un preventivo a tuo nome come potenziale parte contrattuale, trattiamo i dati
        necessari per adottare le misure precontrattuali da te richieste (art. 6, par. 1, lett. b del GDPR).</p>
      <h3>Fornitori e trasferimenti internazionali</h3>
      <p>Web3Forms, gestito da Web3Creative, tratta i dati del modulo per nostro conto e li invia a ${contactEmail}.
        DotRoll Kft., con sede in Ungheria, fornisce il servizio di posta elettronica. Web3Creative
        opera dall'India e può trattare dati anche fuori dallo Spazio economico europeo tramite
        i propri sub-responsabili. Le clausole contrattuali tipo della Commissione europea sono incluse
        nell'<a href="${processorAgreement}">accordo sul trattamento dei dati di Web3Forms</a>.
        Puoi chiedere una copia delle garanzie applicabili scrivendo a ${contactEmail}.</p>
      <h3>Hosting e sicurezza</h3>
      <p>Hetzner Online GmbH fornisce l'hosting. Il server tratta dati tecnici come l'indirizzo IP,
        l'orario della richiesta, la risorsa richiesta e le informazioni sul browser per erogare
        il servizio, analizzare i problemi e prevenire gli abusi. La base giuridica è il nostro
        legittimo interesse al funzionamento e alla protezione del sito (art. 6, par. 1, lett. f del GDPR).
        Per la scelta della lingua, consulta l'<a href="#cookie-policy" data-legal="cookie">Informativa sui cookie</a>.</p>
      <h3>Periodo di conservazione</h3>
      <p><strong>Web3Forms cancella automaticamente i dati del modulo dopo un anno dalla ricezione.</strong>
        Conserviamo la corrispondenza nella casella e-mail finché la richiesta è aperta o il preventivo
        è valido. I dati necessari per un ordine, un obbligo di legge o una pretesa giuridica sono
        conservati per il tempo richiesto dalla relativa finalità. I log sono soggetti alla rotazione
        del server. Le registrazioni necessarie per esaminare un incidente di sicurezza possono essere
        conservate fino alla conclusione dell'indagine.</p>
      <h3>I tuoi diritti</h3>
      <p>Puoi chiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi
        dati e, quando applicabile, la portabilità, scrivendo a ${contactEmail}. Puoi anche proporre reclamo
        a un'autorità di controllo, tra cui l'<a href="${supervisoryAuthority}">Autorità nazionale ungherese per la
        protezione dei dati e la libertà di informazione (NAIH)</a>, o ricorrere all'autorità giudiziaria.</p>
      <h3>Diritto di opposizione</h3>
      <p>Puoi opporti in qualsiasi momento al trattamento basato sul legittimo interesse per motivi
        legati alla tua situazione particolare, scrivendo a ${contactEmail}.</p>`,
    cookie: `
      <p>Questo sito non usa strumenti di tracciamento per analisi o pubblicità. Quando scegli una
        lingua, il sito la memorizza nel browser con la chiave <code>ith-language</code> per le
        visite successive. La preferenza è valida per 30 giorni dalla scelta. Il sito elimina la
        voce scaduta alla visita successiva. Puoi rimuoverla cancellando i dati del sito dal browser.</p>
      <p>Per informazioni sull'hosting e sulle richieste, consulta l'<a href="#privacy-policy" data-legal="privacy">Informativa sulla privacy</a>.</p>`,
    imprint: `
      <h3>Gestore del sito</h3>
      <p><strong>${companyName}</strong> (IDEAL TREND HUNGARY Kft.)<br>
        Sede legale ${companyAddress}, Ungheria<br>
        Autorità di registrazione ${companyCourt}<br>
        Numero di registrazione 07-09-032509<br>
        Codice fiscale 24740054-2-07<br>Partita IVA UE HU24740054<br>
        E-mail ${contactEmail}<br>Telefono +36 30 527 2010</p>
      <h3>Fornitore di hosting</h3>
      <p>Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germania<br>E-mail ${hostingEmail}</p>
      <h3>Richieste e ordini</h3>
      <p>Usa il modulo per richiedere un preventivo. Le condizioni di produzione, prezzo e consegna sono concordate per ciascun ordine.</p>`
  }
};
