# Tekoäly muuttaa tietojenkäsittelyn opetuksen ja opiskelun 

Mitä on tietojenkäsittelyn opiskelu ja asiantuntijuus nyt uuden aikakauden kynnyksellä ja mitä se on viiden vuoden kuluttua, aikajänteellä jolle opetussuunnitelmat tehdään? Tämä kirjoitus toimii esimerkkinä tulevaisuusden ennakointiosaamisestani.

Tekoälyn nopea kehitys on mullistanut ohjelmistoalan ja tietojenkäsittelyn (ICT) käytännöt vain parin viime vuoden aikana. Kun tekoälytyökalut integroituvat kiinteäksi osaksi ohjelmistokehitystä, on alan koulutuksen ja opiskelijoiden mukauduttava uuteen todellisuuteen. Ulkoa opettelu ja niin sanottu "rutiinikoodaaminen" vähenee, eikä ole enää olennaista tarkkaan muistaa esimerkiksi for-silmukan rakennetta tai koodin muotoa, syntaksia. Näiden rakenteiden toiminnan ymmärtämisen tarve sen sijaan ei ainakaan vielä katoa, ja asiantuntemuksen painopiste siirtyy. Tulevaisuuden ICT-asiantuntijalta vaaditaan laajoja kokonaisuuksien hallinnan taitoja, tekoälylukutaitoa sekä vahvaa inhimillistä ongelmanratkaisukykyä.

## Koodin kirjoittamisesta arkkitehtuurin ja ihmisen ymmärtämiseen

Perinteisesti tietojenkäsittelyn opinnoissa on painotettu voimakkaasti ohjelmointikielten syntaksin ja käsin koodaamisen opettelua. Tekoälyn myötä tämä "raaka, itsenäinen koodaustyö" on kuitenkin vähenemässä. Epäselvää vielä on, jääkö koodin kirjoittaminen sellaisenaan kokonaan historiaan vai onko meillä vielä jatkossakin erikoistapauksia, joissa tätä osaamista tarvitaan. Ennakoin tätä hieman ja kysyin opiskelijoiden omaa näkemystä tähän käyttämällä tulevaisuuspyörä-arviointimenetelmää. Opiskelijoiden näkemys oli oman ennakko-oletukseni mukainen: tekoäly automatisoisi rutiininomaisen koodin kirjoittamisen.

Käytännön testit opettajakunnan kesken ovat taas näyttäneet, että yksityiskohtia tekoäly kyllä kirjoittaa, kun siltä  osataan kysyä oikeita asioita. Jopa arkkitehtuurivaihtoehtoja tyypillisiin ongelmiin tekoäly osaa esittää, mutta lopullisen ratkaisun tekeminen ja viimeistely edelleen jää tekijälle itselleen. Tekoäly ei, ainakaan vielä, tee juuri halutunlaista sovellusta alusta loppuun itsenäisesti pelkästään yksittäisillä prompteilla eli käyttäjän antamilla ohjeilla. Vaaditaan näkemystä siitä, millainen hyvä ja erityisesti ylläpidettävä ohjelmistoarkkitehtuuri on.

Tämä näyttäisi siirtävän opiskelun painopistettä merkittävästi: jatkossa **tärkeintä ei ole koodin tuottaminen, vaan sen lukeminen, validointi ja laajemman ohjelmistoarkkitehtuurin ymmärtäminen**. Opiskelijoiden on ymmärrettävä ohjelmoinnin perusrakenteet ja logiikka siinä määrin, että he kykenevät arvioimaan tekoälyn generoiman koodin tehokkuutta, turvallisuutta ja järkevyyttä käyttökontekstissaan. Tämän lisäksi on ymmärrettävä eri järjestelmien keskinäinen toiminta, olemassaolevat järjestelmät ja erityisesti loppukäyttäjät ja heidän tarpeensa. **Inhimillinen kanssakäynti käyttäjien, asiakkaan ja tilaajien kanssa korostuu.**

## Tekoäly henkilökohtaisena tutorina – hyödyt ja sudenkuopat

Aloittelevien ohjelmoijien koulutusta tutkineen artikkelin (*The Good and Bad of AI Tools in Novice Programming Education*) mukaan tekoäly toimii erinomaisena "pariohjelmoijana". Tekoäly voi tarjota opiskelijalle 24/7 ohjausta, selittää monimutkaisen koodin toimintaa, antaa esimerkkejä ja auttaa virheiden etsinnässä. Tämä pienentää opiskelijan kognitiivista kuormaa rutiinitehtävissä, jolloin energiaa vapautuu monimutkaisempien ongelmien ratkaisuun.

Tekoälyn käyttöön liittyy kuitenkin merkittäviä pedagogisia riskejä. Suurin uhka on **liiallinen tukeutuminen työkaluihin**, jolloin peruskonseptien ymmärrys voi jäädä ohueksi. Lisäksi tekoäly saattaa tarjota täysin vääriä tai harhaanjohtavia vastauksia, jotka näyttävät luotettavilta. Oppilaitosten onkin opetettava opiskelijoille tekoälyn vastuullista käyttöä ja kriittistä arviointikykyä.

Perinteiset arviointimenetelmät, kuten itsenäiset koodauskotitehtävät, menettävät merkityksensä, koska tekoäly ratkaisee ne sekunneissa. Arvioinnissa on siirryttävä suuntaan, jossa opiskelijan on itse **selitettävä koodinsa toimintalogiikka** ja todistettava todellinen ymmärryksensä esimerkiksi henkilökohtaisissa arviointikeskusteluissa.

Itse testasin tätä käytäntöä viimeisimmällä ohjelmistotestausta käsittelevällä opintojaksollani. Ohjelmistotestaus sinänsä on hyvä esimerkki alueesta, jossa tekoäly on ohjelmistotuotannossa vahvoilla: tekoäly osaa tehdä kattavia ja laadukkaita testejä ohjelmistolle, mutta ei vielä osaa ottaa huomioon kaikkia käyttäjävaatimuksia. Viimeistelyyn on hyvä olla ihmiskosketus. Opiskelijoiden suhteen tehtävien palautuksissa on nähtävissa artikkelin kuvaamia ilmiöitä: osa on ottanut tekoälyn parikoodaajana ja selittänyt itse raportissa mitä koodissa on tehty. Toiset taas ovat luottaneet suhteellisen sokeasti tekoälyn tuotoksiin analysoimatta niitä kattavasti. 

Tämän kaltaisen tehtävän arviointi osoittautuu hankalaksi, sillä tekoäly osaa tuottaa myös kommentteja varsin hyvin, joten taitavasti tekoälyä käyttävä opiskelija osaa tuottaa hyvän vastauksen harjoitukseen, ja silti jää epäselväksi se, millä tasolla opiskeltava aihe on ymmärretty. Tehtävät tulisi siis muotoilla siten, että opiskelijan tulee jollakin tavalla osoittaa tekemisensä taso. Tällä hetkellä näkemykseni on, että opiskelija on hyvä laittaa rakentamaan kokonaisuuksia ja arviointi suoritetaan syntyneen kokonaisuuden perusteella: vastasiko syntynyt tuote tarpeeseen, onko se käytettävä, tietoturvallinen ja ylläpidettävä? Arviointikriteerit on aseteltava tämän tavoitteen mukaisiksi.

## Inhimilliset taidot ja neuroepätyypillisyys kilpailuvalttina

Vuoteen 2035 tähtäävissä osaamisen ennakointiraporteissa korostuu, että vaikka teknologia hoitaa ohjelmistotekniset yksityiskohdat, tekoäly ei osaa ratkaista inhimillisiä tarpeita. Tulevaisuudessa tietojenkäsittelyn asiantuntijoilta vaaditaan entistä enemmän asiakaslähtöistä palveluiden kehittämisosaamista, monialaisten verkostojen hallintaa sekä yhteistyötaitoja. "Out-of-the-box" -ajattelu ja aidosti uutta luova ongelmanratkaisu jäävät edelleen ihmisen tehtäväksi.

Mielenkiintoisena piirteenä aineistosta nousee esiin neuroepätyypillisyyden (esim. Asperger, ADHD) rooli tulevaisuuden IT-työssä. Kun käsin koodaaminen vähenee, järjestelmien ja tekoälyn tuottaman koodin analysoinnissa tarvitaan poikkeuksellista kykyä havaita epäloogisuuksia ja virheitä. Nämä neuroepätyypilliset ominaisuudet voivat oikein tuettuna muodostua valtavaksi vahvuudeksi tekoälyn aikakaudella. Toisaalta taas tietyt ominaisuudet voivat tukea ongelmanratkaisun inhimillisiä puolia.

## Ennakointi ja joustavat opetussuunnitelmat

ICT-alan nopea muutos haastaa koko koulutusjärjestelmän rakenteet. Oppilaitosten on laadittava opetussuunnitelmia, jotka ovat voimassa vuosia, kun taas teknologia (kuten tekoäly) voi mullistaa alan kuukausissa.

Ratkaisuna tähän mielestäni voisi olla **jatkuva tulevaisuuden ennakointi**, jossa hyödynnetään tulevaisuudentutkimuksen menetelmiä siten, että ne ovat toteutettavissa jatkuvina toimintoina opetustyön ohessa. Opetussuunnitelmien on oltava riittävän joustavia: ydin ei voi enää olla nopeasti vanhenevassa nippelitiedossa tai yksittäisessä ohjelmointikielessä, vaan **oppimaan oppimisessa**, **tiedon arvioinnissa** ja **ongelmanratkaisutaidoissa**. Kun koulutus keskittyy asioiden välisiin riippuvuuksiin ja globaaliin lukutaitoon ("mitä tiedät, mitä et tiedä"), opiskelijat saavat resilienssiä selviytyä muuttuvassa teknologiakentässä. Tekoälyä on väistämätöntä opetella hyödyntämään, mutta se on tehtävä vastuullisesti monestakin näkökulmasta.

---

## Lähteet

> Zviel-Girshin, R. 2024. The Good and Bad of AI Tools in Novice Programming Education. The Center for Reseach in Technological and Engineering Education, Faculty of Engineering. Ruppin Academic Center. [https://doi.org/10.3390/educsci14101089](https://doi.org/10.3390/educsci14101089)