// components/Polityka.
import Navbar from '../components/Navbar';
import React from 'react';

const Polityka: React.FC = () => {
  return (
    <>
   <Navbar />
    <section className="max-w-3xl mx-auto px-4 py-8 text-black">
  <h1 className="text-2xl font-bold mb-6">Polityka Prywatności</h1>

  <p className="mb-4">HasAcademy szanuje prywatność swoich użytkowników i dba o ochronę przekazanych danych osobowych. Niniejsza Polityka Prywatności wyjaśnia, jakie dane zbieramy, w jakim celu oraz w jaki sposób są one przechowywane i chronione.</p>

  <h2 className="text-xl font-semibold mt-6 mb-2">1. Administrator danych</h2>
  <p className="mb-4">Administratorem danych osobowych jest HasAcademy.</p>

  <h2 className="text-xl font-semibold mt-6 mb-2">2. Zakres zbieranych danych</h2>
  <p className="mb-4">Za pośrednictwem formularza kontaktowego zbierane są następujące dane:</p>
  <ul className="list-disc list-inside mb-4">
    <li>Imię</li>
    <li>Adres e-mail</li>
    <li>Treść wiadomości</li>
  </ul>

  <h2 className="text-xl font-semibold mt-6 mb-2">3. Cel przetwarzania danych</h2>
  <p className="mb-4">Dane osobowe są przetwarzane wyłącznie w celu:</p>
  <ul className="list-disc list-inside mb-4">
    <li>udzielenia odpowiedzi na przesłane zapytanie,</li>
    <li>prowadzenia korespondencji związanej z działalnością HasAcademy.</li>
  </ul>

  <h2 className="text-xl font-semibold mt-6 mb-2">4. Podstawa prawna przetwarzania</h2>
  <p className="mb-4">Przetwarzanie danych odbywa się na podstawie:</p>
  <ul className="list-disc list-inside mb-4">
    <li>art. 6 ust. 1 lit. f RODO (uzasadniony interes administratora – kontakt z użytkownikiem),</li>
    <li>lub art. 6 ust. 1 lit. a RODO (zgoda użytkownika) – w przypadku dobrowolnego podania danych.</li>
  </ul>

  <h2 className="text-xl font-semibold mt-6 mb-2">5. Przechowywanie danych</h2>
  <p className="mb-4">Dane osobowe są przechowywane przez okres niezbędny do realizacji celu kontaktowego, a następnie mogą zostać usunięte, chyba że istnieje inna podstawa do ich dalszego przetwarzania.</p>

  <h2 className="text-xl font-semibold mt-6 mb-2">6. Prawa użytkownika</h2>
  <p className="mb-4">Użytkownik ma prawo do:</p>
  <ul className="list-disc list-inside mb-4">
    <li>dostępu do swoich danych,</li>
    <li>ich sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
    <li>wniesienia sprzeciwu wobec przetwarzania,</li>
    <li>przenoszenia danych,</li>
    <li>wniesienia skargi do organu nadzorczego (Prezes UODO).</li>
  </ul>

  <h2 className="text-xl font-semibold mt-6 mb-2">7. Dobrowolność podania danych</h2>
  <p className="mb-4">Podanie danych osobowych jest dobrowolne, ale niezbędne do skontaktowania się z HasAcademy poprzez formularz.</p>

  <h2 className="text-xl font-semibold mt-6 mb-2">8. Bezpieczeństwo danych</h2>
  <p className="mb-4">Dokładamy wszelkich starań, aby zapewnić odpowiednie środki techniczne i organizacyjne chroniące dane przed nieuprawnionym dostępem, utratą lub zniszczeniem.</p>

  <h2 className="text-xl font-semibold mt-6 mb-2">9. Kontakt</h2>
  <p className="mb-4">W sprawach związanych z przetwarzaniem danych osobowych prosimy o kontakt na adres e-mail: <strong>kontakt@hasacademy.pl</strong></p>
</section>
</>
  );
};

export default Polityka;
