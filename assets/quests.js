const questsTab = [
	"Wybierz temat. Wymieniacie po kolei coś z tej kategorii dopóki ktoś się nie pomyli. Pomyleniec wali shota!",
	"Walisz dwa kielichy",
	"Każdy kto zna jakiś mleczny produkt musi się napić",
	"Każdy kto patrzy na tę kartę musi się napić",
	"Musisz zrobić wszystko co osoba po Twojej prawej Ci rozkaże. Jeśli odmówisz pijesz",
	"Pijesz jeśli Polski to nie twój ojczysty język",
	"Napełnij swój kielich po czym przechyl go do dna",
	"Napij się jeśli nie pamiętasz swojej poprzedniej karty",
	"Opowiedz żart Jeśli nikt się nie zaśmieje pijesz",
	"Wybierz kogoś kto sobie jebnie kielicha",
	"Wybierz orzeł czy reszka i rzuć monetą. Jeśli trafiłeś piją wszyscy prócz Ciebie. Jeśli nie chlejesz sam",
	"Możesz wymyślić zasadę której reszta graczy będzie musiała przestrzegać do końca gry, chyba że wolą się napić",
	"Każdy musi zatańczyć jakiś głupi taniec jeśli nie to pijecie",
	"Klepnij gracza po Twojej lewej w dupsko",
	"Wybierz osobę która ma najpiękniejsze oczy. Musi się napić",
	"Nie możesz mówić po Polsku przez następną rundę",
	"Zadzwoń do kogoś i powiedz że go kochasz (byle nie do matki)",
	"Ćpuny piją",
	"Każdy gracz musi wydać dźwięk jakiegoś zwierzęcia. Osoba która odmówi pije",
	"Wystukaj rytm na stole palcami Jeśli osoba po Twojej prawej nie jest w stanie powtórzyć musi się napić",
	"Każdy kto twierdzi że nie jest pijany musi się napić",
	"Ateiści piją",
	"W tylu ilu krajach byłeś tyle pijesz",
	"Zaczynając od Ciebie musisz skomplementować osobę po Twojej lewej stronie i tak po kolei",
	"Najbardziej najebany gracz musi się napić",
	"Walisz shota",
	"Pijesz",
	"Chlejesz",
	"Do dna",
	"Walisz dwa kielichy",
	"Wypij jeśli nigdy się nie biłeś",
	"Zrób 10 pompek",
	"Wyścig alkusów. Kto wypije ostatni musi wypić kolejnego.",
	"Zamień się częścią garderoby z osobą po Twojej lewej",
	"Spróbuj iść po linii prostej. Jeśli Ci się nie uda pijesz",
	"Każdy ma stanąć na jednej nodze. Kto pierwszy się wyjebie pije.",
	"Wszyscy piją",
	"Chlejecie wszyscy",
	"Walnijcie sobie",
	"Wypij brudzie z osobą po Twojej prawej",
	"Zrób sobie selfie z osobą po lewej po czym wypijcie",
	"Każdy kto uprawiał seks z więcej niż 5 osobami musi się napić ",
	"Każdy kto widział jakikolwiek film z Adamem Sandlerem pije",
	"Zaczynając od Ciebie wymieniajcie piosenki disco polo. Osoba której braknie pomysłów pije",
	"Osoba po Twojej lewej ma zadać Ci pytanie.",
	"Zdejmij część swojej garderoby.",
	"Jeśli uprawiałeś seks z innym graczem pijesz",
	"Co wolicie psy czy koty, mniejszość pije ",
	"Pocałuj gracza po Twojej lewej stronie",
	"Zrób graczowi po prawej masaż",
	"Single piją",
	"Pary piją",
	"Rozwodnicy/Rozwódki piją",
	"Wypij jeśli jest po północy",
	"Narysuj coś na czole wybranemu przez siebie graczowi",
	"Odwróć się plecami do reszty. Jeśli zgadniesz kto klepnął Cię w ramię piją wszyscy prócz Ciebie.",
	"Podaj datę urodzin gracza po Twojej prawej. Jeśli powiesz dobrze on pije, jeśli nie pijesz Ty",
	"Najwyższa osoba pije",
	"Najgrubsza osoba pije",
	"Najchudsza osoba pije",
	"Najniższa osoba pije",
	"Osoba z największymi uszami pije",
	"Brodacze piją",
	"Palacze piją",
	"Wybierz dwóch graczy którzy muszą się napić",
	"Wypij kielicha bez używania rąk",
	"Zaśpiewaj kawałek piosenki wybranej przez osobę po Twojej prawej stronie",
	"Gracz który ostatni był w toalecie pije",
	"Osoba z najprostszymi zębami pije",
	"Wymień pięć państw na literę 'P'",
	"Wymień dziesięć słów na literę 'K'",
	"Posiadacze kotów piją.",
	"Posiadacze psów piją.",
	"Opowiedz o najdziwniejszym porno jakim oglądałeś",
	"Opowiedz o swoim najskrytszym sekrecie",
	"W jakim wieku zacząłeś się masturbować",
	"Wybierz słowo które będzie zakazane do końca gry. Za każdym razem gdy ktoś je wymówi pije.",
	"Zagrajcie w głuchy telefon. Jeśli hasło zostanie pokręcone pije każdy",
	"Największy luzak pije",
	"Osoba z największym kijem w dupie pije",
	"Każdy kto używa teraz telefonu pije",
	"Wymieniajcie po kolei marki samochodów. Osoba której braknie pomysłów pije",
	"Wymieniajcie po kolei rasy psów. Osoba której braknie pomysłów pije",
	"Każdy musi dotknąć stołu. Ostatni wali shota",
	"Smakosze wina piją",
	"Najstarszy gracz pije",
	"Najmłodszy gracz pije",
	"Siłuj się na rękę z osobą po Twojej prawej",
	"Każdy musi Cię skomplementować inaczej pije",
	"Używaj jedynie swojej lewej ręki przez jedną rundę",
	"Zrób 20 pajacyków",
	"Każdy ma podnieść ręce do góry. Ostatni pije",
	"Przytul wybranego przez siebie gracza",
	"Osoba która najładniej pachnie pije",
	"Opowiedz o filmie. Jeśli gracz po prawej stronie nie zgadnie tytułu musi się napić",
	"Stoisz przez jedną rundę",
	"Osoba która zwiedziła najwięcej krajów pije",
	"Jeśli przeczytałeś kiedykolwiek książkę pijesz",
	"Wypij trzy shoty",
	"Opowiedz dwie prawdy jedno kłamstwo. Gracze którzy nie zgadną co jest kłamstwem piją",
	"Możesz wymyślić zasadę którą reszta graczy będzie musiała przestrzegać do końca gry",
	"Osoby urodzone przed 2000 rokiem walą kielicha",
	"Zatańcz albo pij",
	"Gracz z największą ilością pieniędzy pije",
	"Najbiedniejszy gracz pije",
	"Opowiedz żart. Jeśli nikt się nie zaśmieje pijesz",
	"Smakosze piwa walą shota",
	"Najbardziej napakowany gracz pije",
	"Osoby bez prawa jazdy piją",
	"Osoby z prawem jazdy piją",
	"Wybierz gracza który ma rozebrać jakąś część swojej garderoby",
	"Opowiedz wszystkim gdzie i kiedy poznałeś osobę po Twojej prawej",
	"Opowiedz gdzie i kiedy przeżyłeś swój pierwszy raz",
	"Osoba z najdłuższymi włosami pije",
	"Osoba z najkrótszymi włosami pije",
	"Najbardziej blady gracz pije",
	"Najbardziej opalony gracz pije",
	"Zielonoocy piją",
	"Niebieskoocy piją",
	"Jeśli miałeś w tym roku urodziny pijesz",
	"Jeśli będziesz miał w tym roku urodziny pijesz",
	"Jeśli urodziłeś się w styczniu pijesz",
	"Jeśli urodziłeś się w lutym pijesz",
	"Jeśli urodziłeś się w marcu pijesz",
	"Jeśli urodziłeś się w kwietniu pijesz",
	"Jeśli urodziłeś się w maju pijesz",
	"Jeśli urodziłeś się w czerwcu pijesz",
	"Jeśli urodziłeś się w lipcu pijesz",
	"Jeśli urodziłeś się w sierpniu pijesz",
	"Jeśli urodziłeś się w wrześniu pijesz",
	"Jeśli urodziłeś się w październiku pijesz",
	"Jeśli urodziłeś się w listopadzie pijesz",
	"Jeśli urodziłeś się w grudniu pijesz",
	"Jeśli urodziłeś się po 2000 roku pijesz",
	"Jeśli urodziłeś się przed 2000 rokiem pijesz",
	"Pijesz jeśli kiedykolwiek przespałeś się z świeżo poznaną osobą w klubie",
	"Opowiedz dwie prawdy jedno kłamstwo. Gracze którzy nie zgadną co jest kłamstwem piją",
	"Jeśli byłeś kiedykolwiek w kościele pijesz", 
	"Wymień trzy aktorki porno", 
	"Wymień trzech aktorów porno", 
	"Zagwiżdż. Jeśli nie potrafisz to do dna", 
	"Jeśli chodzisz na siłownię pijesz", 
	"Wymień trzy piosenki zespołu Lady Pank", 
	"Wymień 3 marki papierosów", 
	"Osoba, która podczas tej rundy spojrzy w telefon pije",
	"Dwie osoby, które uznasz za podobne do siebie muszą się napić", 
	"Powiedz kto z grupy jest najmniej śmieszny. Jeśli nie masz odwagi powiedzieć walisz shota",
	"Powiedz kto z grupy Cię najbardziej wkurwia. Jeśli nie masz odwagi powiedzieć walisz shota",
	"Pokaż jakie gacie masz dzisiaj na sobie", 
	"Jaką najgorszą fame puśiłeś na kogoś w eter", 
	"Napisz do swojego byłego przyjaciela/przyjaciółki wiadomość, którą wymyślą inni gracze", 
	"Z którym graczem najchętniej poszłabyś/poszedłbyś na randkę", 
	"Jeśli kiedykolwiek obgadywałeś swojego obecnego przyjaciela to powiedz z kim", 
	"Jeśli uprawiałeś/uprawiałaś kiedykolwiek seks bez gumki pijesz", 
	"Czy kiedykolwiek oglądałeś porno w przypałowym miejscu", 
	"Jeśli uprawiałeś seks pod prysznicem pijesz", 
	"Nerdy piją", 
	"Czy posiadasz nudle swojego byłego lub obecnego partnera. Oświeć nas którego z nich", 
	"Napisz do rodzica 'mam gieta za 50 zł'", 
	"Jak myślisz, który z graczy miał najwięcej partnerek/partnerów seksualnych", 
	"Najdziwniejsza rzecz, która Cię podnieciła", 
	"Który gracz według Ciebie jest najmniej godny zaufania", 
	"Ile trwał Twój najdłuższy stosunek", 
	"Kogo z obecnych okłamałeś w ostatnim czasie", 
	"Osoba, która najczęściej rzyga na imprezach pije", 
	"Wybierzcie osobę, która jest najgorszym kierowcą", 
	"Kto z waszej grupy ma dupe wyżej niż sra", 
	"Jeśli jesteś w związku powiedz które z was jest lepsze w łóżku. Jeśli nie masz drugiej połówki to pijesz przegrywie", 
	"Jeśli nagrałeś kiedykolwiek tiktoka pijesz", 
	"Za każdym razem wydawaj z siebie seksi odgłosy, gdy ktoś będzie pił", 
	"Napijcie się wszyscy. Dopóki nie popijesz, nikt nie może tego zrobić", 
	"Jak myślisz, który gracz najlepiej całuje?", 
	"Opowiedz najgłupsza rzecz, którą zrobiłeś po alkoholu", 
	"Szepnij drugiemu graczowi od Twojej lewej sprośne słówko", 
	"Czy zdradziłbyś kiedykolwiek swojego partnera jeśli maiłby się o tym nie dowiedzieć", 
	"Kogo z tutaj obecnych chciałbyś zobaczyć w samej bieliźnie?",
	"Co jest według Ciebie najważniejsze w łóżku?", 
	"Kto sprawia największe problemy, gdy jest najebany?", 
	"Wymień 5 pozycji seksualnych", 
	"Jak uważasz, który z graczy przepieprza najwięcej na głupoty?", 
	"Który z graczy jest najbardziej gołosłowny?", 
	"Co wolisz, miesiąc bez seksu czy miesiąc bez internetu?", 
	


];

export default questsTab;
