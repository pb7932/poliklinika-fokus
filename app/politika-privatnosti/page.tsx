import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pravila Privatnosti',
  description: 'Saznajte kako Poliklinika Fokus prikuplja, koristi i štiti vaše osobne podatke. Pročitajte Pravila privatnosti za sve informacije.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/politika-privatnosti',
  }
};

const page = () => {
  return (
    <div className="relative z-0 font-open-sans">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden bg-white text-black">
            <div className="max-w-4xl mx-auto px-4 py-20 pt-36">
              <h1 className="text-3xl font-bold mb-4">Pravila Privatnosti</h1>
              <p className="text-gray-600 mb-6">Posljednja izmjena: 19. svibnja 2025.</p>

              <p className="mb-4">
                Ova Pravila privatnosti opisuju naša pravila i postupke prikupljanja, korištenja i otkrivanja vaših podataka kada koristite Uslugu, te vas obavještavaju o vašim pravima vezanim uz privatnost i načinu na koji vas zakon štiti.
              </p>

              <p className="mb-6">
                Koristimo vaše osobne podatke za pružanje i unapređenje Usluge. Korištenjem Usluge pristajete na prikupljanje i korištenje podataka u skladu s ovim Pravilima privatnosti. Ova Pravila privatnosti izrađena su uz pomoć <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" className="text-blue-600 underline">Privacy Policy Generator</a>.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Tumačenje i Definicije</h2>

              <h3 className="text-xl font-semibold mb-2">Tumačenje</h3>
              <p className="mb-4">
                Riječi čije početno slovo je veliko imaju značenja definirana u nastavku. Definicije vrijede jednako u jednini i množini.
              </p>

              <h3 className="text-xl font-semibold mb-2">Definicije</h3>
              <p className="mb-4">Za potrebe ovih Pravila privatnosti:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Povezana osoba</strong> označava subjekt koji kontrolira, koji je pod kontrolom ili je pod zajedničkom kontrolom s nekom stranom (50% ili više vlasništva).</li>
                <li><strong>Tvrtka</strong> (u daljnjem tekstu "Mi", "Naš", "Nama") označava OPTIKA "FOKUS", Vinka Međerala 9, 42000 Varaždin, Hrvatska.</li>
                <li><strong>Država</strong> znači Republiku Hrvatsku.</li>
                <li><strong>Uređaj</strong> označava bilo koji uređaj s kojim pristupate Usluzi, npr. računalo, mobitel ili tablet.</li>
                <li><strong>Osobni podaci</strong> su informacije koje se odnose na identificiranu ili identificabilnu osobu.</li>
                <li><strong>Usluga</strong> označava našu web stranicu.</li>
                <li><strong>Davatelj usluge</strong> označava osobu ili tvrtku koja obrađuje podatke u naše ime.</li>
                <li><strong>Podaci o korištenju</strong> su automatski prikupljeni podaci o načinu korištenja Usluge.</li>
                <li><strong>Web stranica</strong> označava Polikliniku Fokus, dostupnu na <a href="https://poliklinikafokus.hr/" target="_blank" className="text-blue-600 underline">https://poliklinikafokus.hr/</a>.</li>
                <li><strong>Vi</strong> označava osobu koja pristupa ili koristi Uslugu.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Prikupljanje i korištenje osobnih podataka</h2>

              <h3 className="text-xl font-semibold mb-3">Vrste prikupljenih podataka</h3>

              <h4 className="text-lg font-semibold mb-2">Osobni podaci</h4>
              <p className="mb-4">Za potrebe pružanja Usluge, možemo tražiti određene podatke koji vas mogu identificirati, kao što su:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Email adresa</li>
                <li>Ime i prezime</li>
                <li>Broj telefona</li>
                <li>Adresa, godina rođenja</li>
                <li>Podaci o korištenju Usluge</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2">Podaci o korištenju</h4>
              <p className="mb-4">
                Automatski prikupljamo informacije o vašem uređaju i načinu korištenja Usluge, uključujući IP adresu, tip preglednika, verziju, posjećene stranice, trajanje posjete i druge dijagnostičke podatke.
              </p>
              <p className="mb-6">
                Također možemo prikupljati podatke koje vaš preglednik šalje prilikom pristupa Usluzi, uključujući putem mobilnih uređaja.
              </p>

              <h3 className="text-xl font-semibold mb-3">Korištenje osobnih podataka</h3>
              <p className="mb-4">Vaše podatke koristimo za:</p>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>Pružanje i održavanje Usluge.</li>
                <li>Ispunjavanje ugovornih obveza.</li>
                <li>Kontaktiranje putem emaila, telefona ili SMS-a s obavijestima i informacijama.</li>
                <li>Slanje novosti, posebnih ponuda i obavijesti (s mogućnošću odjave).</li>
                <li>Rješavanje vaših zahtjeva i upita.</li>
                <li>Analizu poslovnih prijenosa i reorganizacija.</li>
                <li>Poboljšanje Usluge i marketinških aktivnosti.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Podjela vaših podataka</h3>
              <p className="mb-4">Podatke možemo dijeliti u sljedećim slučajevima:</p>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>S davateljima usluga za potrebe održavanja i analize Usluge.</li>
                <li>U slučaju poslovnih prijenosa, spajanja ili prodaje tvrtke.</li>
                <li>S povezanim osobama koje poštuju naša pravila privatnosti.</li>
                <li>S poslovnim partnerima za posebne ponude i promocije.</li>
                <li>Javno, ako sami podijelite informacije u javnim prostorima.</li>
                <li>S vašim pristanakom za druge svrhe.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Čuvanje podataka</h3>
              <p className="mb-4">
                Osobne podatke čuvamo samo koliko je potrebno za ostvarenje svrhe prikupljanja, poštujući zakonske obveze i rješavanje sporova.
              </p>
              <p className="mb-6">
                Podaci o korištenju se čuvaju kraće, osim ako je potrebno dulje zbog sigurnosti ili zakonskih zahtjeva.
              </p>

              <h3 className="text-xl font-semibold mb-3">Prijenos podataka</h3>
              <p className="mb-6">
                Vaši podaci mogu biti obrađivani i pohranjeni u državama izvan Hrvatske i EU. Prijenos je omogućen samo ako su na snazi odgovarajuće sigurnosne mjere u skladu s GDPR-om.
              </p>

              <h3 className="text-xl font-semibold mb-3">Vaša prava</h3>
              <p className="mb-4">
                Imate pravo pristupa, ispravka, brisanja i ograničenja obrade svojih osobnih podataka, pravo na prigovor i pravo na prenosivost podataka. Za ostvarenje prava, kontaktirajte nas.
              </p>

              <h3 className="text-xl font-semibold mb-3">Sigurnost podataka</h3>
              <p className="mb-6">
                Podatke štitimo tehničkim i organizacijskim mjerama, no potpuna sigurnost na internetu nije moguća.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Privatnost djece</h2>
              <p className="mb-4">
                Naša Usluga nije namijenjena osobama mlađima od 13 godina. Ne prikupljamo svjesno podatke od djece bez roditeljskog pristanka.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Poveznice na druge web stranice</h2>
              <p className="mb-6">
                Naša stranica može sadržavati poveznice na druge web stranice koje nisu pod našom kontrolom. Savjetujemo da provjerite njihove politike privatnosti.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Promjene Pravila privatnosti</h2>
              <p className="mb-6">
                Pravila privatnosti povremeno ažuriramo. O promjenama ćemo vas obavijestiti putem emaila ili obavijesti na stranici.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
              <p>Za sva pitanja vezana uz privatnost, kontaktirajte nas na:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Email: <a href="mailto:n.brijacak@gmail.com" className="text-blue-600 underline">n.brijacak@gmail.com</a></li>
              </ul>
            </div>

        </main>
        <Footer></Footer>
    </div>
  )
}

export default page