                                                            // header Start
function over(n) {
var image = n;
switch(image) {
    case 0:
    document.getElementById("im0").src="images/homepage1.png";
    break;
    case 1:
    document.getElementById("im1").src="images/About-Us-Icon-21.png";
    break;
    case 2:
    document.getElementById("im2").src="images/books1.png";
    break;
    case 3:
    document.getElementById("im3").src="images/magazine1.jpg";
    break;
    case 4:
    document.getElementById("im4").src="images/ContactUs-011.gif";
    break;
}

}

function out(n) {
var image = n;
switch(image) {
    case 0:
    document.getElementById("im0").src="images/homepage2.png";
    case 1:
    document.getElementById("im1").src="images/About-Us-Icon-22.png";
    break;
    case 2:
    document.getElementById("im2").src="images/books11.png";
    break;
    case 3:
    document.getElementById("im3").src="images/magazine2.jpg";
    break;
    case 4:
    document.getElementById("im4").src="images/ContactUs-0111.gif";
    break;
}

}
                                                           // header End

                                                           // Image Slider Start
var index = 1;
function slider(n) {
index = index + n;
change(index);
}
change(1);
function change(n) {
    var a = document.getElementsByClassName("sm");
    if(n > a.length) { index = 1;}
    if(n < 1) { index = a.length}
    for(i = 0; i < a.length;i++) {
        a[i].style.display="none";
    }
    a[index - 1].style.display="block";
}

autoRun();
function autoRun() {

change(index);
index++;
    setTimeout(autoRun,10000);
  
}

                                                           // Image Slider End
														   // Next Page 


function nextPage(n) {
  localStorage.setItem("number",n);
  var numbers = n;
  switch(numbers) {
      case 0:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","John Grisham");
      localStorage.setItem("Publication Date:","28/12/2016");
      localStorage.setItem("price",895);
      localStorage.setItem("dicountP",788);
      localStorage.setItem("save",107);
      localStorage.setItem("discountPer","12% OFF");
      break;
      case 1:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Inaam Kachachi");
      localStorage.setItem("Publication Date:","08/06/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",675);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 2:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Simon Baker");
      localStorage.setItem("Publication Date:","20/11/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1050);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 3:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Chris Skinner");
      localStorage.setItem("Publication Date:","05/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1600);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 4:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Brian Dibble");
      localStorage.setItem("Publication Date:","12/07/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1825);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 5:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Josh Pryor");
      localStorage.setItem("Publication Date:","17/09/2016");
      localStorage.setItem("price",2800);
      localStorage.setItem("dicountP",1960);
      localStorage.setItem("save",840);
      localStorage.setItem("discountPer","30% OFF");
      break;
      case 6:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Lois Lowry");
      localStorage.setItem("Publication Date:","02/08/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",825);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 7:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Joseph Nassise");
      localStorage.setItem("Publication Date:","12/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 8:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","John Edward");
      localStorage.setItem("Publication Date:","02/09/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",750);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 9:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","J.R.R Tolkien");
      localStorage.setItem("Publication Date:","12/03/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2499);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 10:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","12/04/2016");
      localStorage.setItem("price",799);
      localStorage.setItem("dicountP",695);
      localStorage.setItem("save",104);
      localStorage.setItem("discountPer","13% OFF");
      break;
      case 11:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","John Russo");
      localStorage.setItem("Publication Date:","15/07/2016");
      localStorage.setItem("price",1020);
      localStorage.setItem("dicountP",816);
      localStorage.setItem("save",204);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 12:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Liz Braswell");
      localStorage.setItem("Publication Date:","19/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1900);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 13:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Robeat A.Heinlein");
      localStorage.setItem("Publication Date:","16/06/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1200);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 14:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","DJ Kelly");
      localStorage.setItem("Publication Date:","20/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2199);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 15:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Omnibus");
      localStorage.setItem("Publication Date:","13/08/2016");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2250);
      localStorage.setItem("save",250);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 16:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Michael J.Totten");
      localStorage.setItem("Publication Date:","15/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 17:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Edgar Wallace");
      localStorage.setItem("Publication Date:","18/03/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 18:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Merryn Allingham");
      localStorage.setItem("Publication Date:","23/05/2016");
      localStorage.setItem("price",1800);
      localStorage.setItem("dicountP",1656);
      localStorage.setItem("save",144);
      localStorage.setItem("discountPer","8% OFF");
      break;
      case 19:
      localStorage.setItem("aboutStory","");
      localStorage.setItem("bookN","");
      localStorage.setItem("Author:","Fayette Fox");
      localStorage.setItem("Publication Date:","10/11/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
	  case 20:
      localStorage.setItem("aboutStory","HBO's hit series A Game of Thrones is based on George R. R. Martin's internationally best-selling series A Song of Ice and Fire, the greatest fantasy epic of the modern age. A Game of Thrones is the first volume in the series.");
      localStorage.setItem("bookN","A Game Of Thrones");
      localStorage.setItem("Author:","George R.R Martin");
      localStorage.setItem("Publication Date:","21/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1800);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 21:
      localStorage.setItem("aboutStory","It is the summer of 1777.  General George Washington and the Continental Army have been repeatedly beaten by the British Army during the first two years of what has become a bitter, bloody war.  Conventional wisdom tells Washington that it is time to retreat and regroup, ");
      localStorage.setItem("bookN","A Glimpse Of Freedom");
      localStorage.setItem("Author:","M.A. Bookout");
      localStorage.setItem("Publication Date:","12/05/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1199);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 22:
      localStorage.setItem("aboutStory","There are excellent reviews to befound of this book better reviews then I can give you but it traces Lincoln from his impoverished childhood through his youth and young manhood and rambling around Illinois and into Politics.");
      localStorage.setItem("bookN","Abraham Lincoln");
      localStorage.setItem("Author:","Benjamin P.Thomas");
      localStorage.setItem("Publication Date:","02/04/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2250);
      localStorage.setItem("save",250);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 23:
      localStorage.setItem("aboutStory",'"Prodigiously documented... Alison Weir must be highly commended for throwing such a brilliantly hard light on the relationship between the United States and Israel. I hope this marvelous book gets all the attention it deserves." – Ambassador Andrew Killgore');
      localStorage.setItem("bookN","Against Our Better Judgment");
      localStorage.setItem("Author:","Alison Weir");
      localStorage.setItem("Publication Date:","05/05/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",800);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 24:
      localStorage.setItem("aboutStory","Considered by some to be the greatest novel ever written, Anna Karenina is Tolstoy's classic tale of love and adultery set against the backdrop of high society in Moscow and Saint Petersburg. A rich and complex masterpiece, the novel charts the disastrous course of a love affair between Anna, a beautiful married woman, and Count Vronsky, a wealthy army officer. ");
      localStorage.setItem("bookN","Anna Karenina");
      localStorage.setItem("Author:","Leo Tolstoy");
      localStorage.setItem("Publication Date:","12/07/2015");
      localStorage.setItem("price",1499);
      localStorage.setItem("dicountP",1199);
      localStorage.setItem("save",300);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 25:
      localStorage.setItem("aboutStory","In 1869, San Francisco saloon owner Cera Cassidy offers redemption to any woman looking for honest work. At Cera's Place, men can get a decent hot meal with a whiskey, but if they want anything more, they have to take their desires elsewhere. One summer night, a distraught Chinese girl bursts through the swinging doors with a shocking tale of murder, kidnapping, and prostitution. Outraged, Cera vows to set things right.");
      localStorage.setItem("bookN","Cera's Place");
      localStorage.setItem("Author:","Elizabeth McKenna");
      localStorage.setItem("Publication Date:","17/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 26:
      localStorage.setItem("aboutStory","criminal world fraught with dishonesty and danger. Coming to terms with his new reality, he stumbles onto the love he thought he'd never find. Eventually, he discovers a side of himself he never knew existed, especially after the Drug Lord kidnaps his girlfriend. Start reading this lively romantic comedy now! If you like your comedy mixed with romance, order Finding Katie now");
      localStorage.setItem("bookN","Creator's Failure");
      localStorage.setItem("Author:","John J. Smith");
      localStorage.setItem("Publication Date:","02/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2899);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 27:
      localStorage.setItem("aboutStory","On May 1, 1915, with WWI entering its tenth month, a luxury ocean liner as richly appointed as an English country house sailed out of New York, bound for Liverpool, carrying a record number of children and infants");
      localStorage.setItem("bookN","Erik Larson");
      localStorage.setItem("Author:","Dead Wake");
      localStorage.setItem("Publication Date:","12/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 28:
      localStorage.setItem("aboutStory","During the summer of 1793, Mattie Cook lives above the family coffee shop with her widowed mother and grandfather. Mattie spends her days avoiding chores and making plans to turn the family business into the finest Philadelphia has ever seen. But then the fever breaks out.");
      localStorage.setItem("bookN","Fever");
      localStorage.setItem("Author:","Mary Beth Keane");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price",2000);
      localStorage.setItem("dicountP",800);
      localStorage.setItem("save",1200);
      localStorage.setItem("discountPer","40% OFF");
      break;
      case 29:
      localStorage.setItem("aboutStory","Small-town boys Caleb and Jake Boyd spend their days splitting logs and barely scraping by in the badlands of New Mexico. Caleb, a decorated war hero, wants to put his fighting days behind him, find a decent job, and start a quiet life with his new fiancé. But his brother Jake is always dreaming bigger than");
      localStorage.setItem("bookN","Let Honor prevail");
      localStorage.setItem("Author:","Delle Jacobs");
      localStorage.setItem("Publication Date:","12/03/2016");
      localStorage.setItem("price",2499);
      localStorage.setItem("dicountP",1999);
      localStorage.setItem("save",499);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 30:
      localStorage.setItem("aboutStory","Through the voices of merchants, peasants, and Ottoman officials, Beshara Doumani offers a major revision of standard interpretations of Ottoman history by investigating the ways in which urban-rural dynamics in a provincial setting appropriated and gave meaning to the larger forces of Ottoman rule and European economic expansion.");
      localStorage.setItem("bookN","Nablus");
      localStorage.setItem("Author:","Maseer Dahmi Afafal");
      localStorage.setItem("Publication Date:","12/04/2016");
      localStorage.setItem("price",799);
      localStorage.setItem("dicountP",680);
      localStorage.setItem("save",119);
      localStorage.setItem("discountPer","15% OFF");
      break;
      case 31:
      localStorage.setItem("aboutStory","The most frightening movie ever made is now a novel! Newsweek calls NIGHT OF THE LIVING DEAD a, 'True Horror Classic.' Why does NIGHT OF THE LIVING DEAD hit with such chilling impact? Is it because everyday people in a commonplace house are suddenly the victims of a monstrous invasion?");
      localStorage.setItem("bookN","The Other Boleyn Girl");
      localStorage.setItem("Author:","Leo Smith");
      localStorage.setItem("Publication Date:","15/07/2015");
      localStorage.setItem("price",1020);
      localStorage.setItem("dicountP",816);
      localStorage.setItem("save",204);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 32:
      localStorage.setItem("aboutStory","As we stand poised on the verge of a new era of spaceflight, we must rethink every element, including the human dimension. This book explores some of the contributions of psychology to yesterday’s great space race, today’s orbiter and International Space Station missions and tomorrow’s journeys beyond earth’s orbit.");
      localStorage.setItem("bookN","Psychology Of Space Exploration");
      localStorage.setItem("Author:","Douglas A. Vakoch");
      localStorage.setItem("Publication Date:","19/02/2014");
      localStorage.setItem("price",1300);
      localStorage.setItem("dicountP",1000);
      localStorage.setItem("save",300);
      localStorage.setItem("discountPer","23% OFF");
      break;
      case 33:
      localStorage.setItem("aboutStory","The 'Arab Spring' was heralded and publicly embraced by foreign leaders of many countries that define themselves by their own historic revolutions. The contributors to this volume examine the legitimacy of these comparisons by exploring whether or not all modern revolutions follow a pattern or script. Traditionally,");
      localStorage.setItem("bookN","Scripting Revolution");
      localStorage.setItem("Author:","Keth Michael Baker");
      localStorage.setItem("Publication Date:","16/06/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1800);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 34:
      localStorage.setItem("aboutStory","With this volume, Davis presents the age of emancipation as a model for reform and as probably the greatest landmark of willed moral progress in human history. Bringing to a close his staggeringly ambitious, prizewinning trilogy on slavery in Western culture Davis offers original and penetrating insights into what slavery and emancipation meant to Americans.");
      localStorage.setItem("bookN","Slavery");
      localStorage.setItem("Author:","David Brion Davis");
      localStorage.setItem("Publication Date:","20/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3199);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 35:
      localStorage.setItem("aboutStory","'Moving, and vastly informative, a real page turner of a historical novel.' - Fay Weldon The Handfasted Wife is the story of the Norman Conquest from the perspective of Edith (Elditha) Swanneck, Harold's common-law wife. She is set aside for a political marriage when Harold becomes king in 1066.");
      localStorage.setItem("bookN","The Handfasted Wife");
      localStorage.setItem("Author:","Omnibus");
      localStorage.setItem("Publication Date:","13/08/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2000);
      localStorage.setItem("save",500);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 36:
      localStorage.setItem("aboutStory","The power of pleasure… Gabriel Miller took everything from me. My family. My innocence. My home. The only thing I have left is the determination to get back what’s mine. He thinks he’s beaten me. He thinks he’s won. What he doesn’t realize is that every pawn has the chance to become a queen.");
      localStorage.setItem("bookN","The Knight");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","15/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 37:
      localStorage.setItem("aboutStory","Set in seventeenth century Amsterdam—a city ruled by glittering wealth and oppressive religion—a masterful debut steeped in atmosphere and shimmering with mystery, in the tradition of Emma Donoghue, Sarah Waters, and Sarah Dunant.");
      localStorage.setItem("bookN","The Miniaturist");
      localStorage.setItem("Author:","Jessie Burton");
      localStorage.setItem("Publication Date:","18/03/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 38:
      localStorage.setItem("aboutStory","Many years after the sign of the star, Melchior, one of the three wise men, returns to Judea to receive counsel from the King of the Jews. Unexpectedly finding him in the countryside teaching rather than ruling on the throne, Melchior searches for answers and finds healing in the process. A historical fiction that address contemporary concerns, this book is a balm for the wounded soul.");
      localStorage.setItem("bookN","The Wise Man Returns");
      localStorage.setItem("Author:","Kenny Kemp");
      localStorage.setItem("Publication Date:","23/05/2015");
      localStorage.setItem("price",1800);
      localStorage.setItem("dicountP",1260);
      localStorage.setItem("save",540);
      localStorage.setItem("discountPer","30% OFF");
      break;
      case 39:
      localStorage.setItem("aboutStory","Inspired by the incredible true story of one Jewish family separated at the start of World War II, determined to survive—and to reunite—We Were the Lucky Ones is a sweeping novel spanning six years and five continents and a tribute to the triumph of hope and love against all odds");
      localStorage.setItem("bookN","We Were The Lucky Ones");
      localStorage.setItem("Author:","Paula Mclain");
      localStorage.setItem("Publication Date:","10/11/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 40:
      localStorage.setItem("aboutStory","Behind the king's life stands the menacing Protector, and beyond him lies the Protector's Shadow... Centuries after the death of Uthar the Great, the throne of the Ontilian Empire lies vacant. The late emperor's brother-in-law and murderer, Lord Urdhven, appoints himself Protector to his nephew, ");
      localStorage.setItem("bookN","Blood Of Ambrose");
      localStorage.setItem("Author:","James Enge");
      localStorage.setItem("Publication Date:","20/02/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",799);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 41:
      localStorage.setItem("aboutStory","Like many things in life (with the Dukes of Hazard coming foremost to my mind) you remember things to better than they really were. The nostalgia from having these read these as a kid is the best part. I also got a kick out of seeing my own son read it.");
      localStorage.setItem("bookN","Dungeon Of Dread");
      localStorage.setItem("Author:","Rose Estes");
      localStorage.setItem("Publication Date:","15/07/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1020);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 42:
      localStorage.setItem("aboutStory","Hunted and desperate, Ella, the former Luminess of the Blue Mountain Realm, must evade her pursuers and fulfill a mission given her by the gods. She carries a strange, otherworldly device, the purpose of which she does not know, but if she is to grasp hold of a conditioned prophecy spoken over her, she must survive to deliver the device to a mysterious man named Quanthum. ");
      localStorage.setItem("bookN","Ella Dethroned");
      localStorage.setItem("Author:","Brandon Barr");
      localStorage.setItem("Publication Date:","19/09/2015");
      localStorage.setItem("price",3300);
      localStorage.setItem("dicountP",2541);
      localStorage.setItem("save",759);
      localStorage.setItem("discountPer","23% OFF");
      break;
      case 43:
      localStorage.setItem("aboutStory","When Alice's mysterious Uncle Geryon sends her to help capture a rogue apprentice--a boy who has the same ability Alice has to Read himself into stories--she knows to expect a wild and unpredictable trip. But even though Alice has visited the magical realms inside libraries before, this adventure is far more dangerous. Because Torment, the magic creature holding this library together, has gone mad.");
      localStorage.setItem("bookN","The Forbidden Library");
      localStorage.setItem("Author:","Django wexler");
      localStorage.setItem("Publication Date:","16/06/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 44:
      localStorage.setItem("'aboutStory','Referring to Adventures of Huckleberry Finn, H. L. Mencken noted that his discovery of this classic American novel was 'the most stupendous event of my whole life'; Ernest Hemingway declared that 'all modern American literature stems from this one book,' while T. S. Eliot called Huck 'one of the permanent symbolic figures of fiction, not unworthy to take a place with Ulysses, Faust, Don Quixote, Don Juan, Hamlet.'");
      localStorage.setItem("bookN","Huckleberry Finn");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","20/01/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1200);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 45:
      localStorage.setItem("aboutStory","A stunning tour de force filled with transcendent awe and wonder, Hyperion is a masterwork of science fiction that resonates with excitement and invention, the first volume in a remarkable epic by the multiple-award-winning author of The Hollow Man.");
      localStorage.setItem("bookN","Hyperion");
      localStorage.setItem("Author:","Dan simmons");
      localStorage.setItem("Publication Date:","13/08/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2000);
      localStorage.setItem("save",500);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 46:
      localStorage.setItem("aboutStory","This novel is based on the true story of Juana Maria, better known to history as 'The Lone Woman of San Nicolas Island,' a Nicoleño Native Californian left alone for 18 years on San Nicolas Island, ");
      localStorage.setItem("bookN","Island Of The Blue Dolphins");
      localStorage.setItem("Author:","Scott o' Dell");
      localStorage.setItem("Publication Date:","15/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 47:
      localStorage.setItem("aboutStory","A mysterious book with a dangerous secret.An evil brotherhood out to conquer the world.One man stands between them . . . with his family in the balance.In the twelfth century, Henry the Lion collected the rarest relics in Christendom. And to protect his most precious acquisitions, he encoded the whereabouts in a gorgeous illuminated ");
      localStorage.setItem("bookN","Man Of Action");
      localStorage.setItem("Author:","Matt bronleewe");
      localStorage.setItem("Publication Date:","18/03/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 48:
      localStorage.setItem("aboutStory","Arthur is a precocious eight-year-old boy whose mother is a B-list celebrity more concerned with her bank account than with her son's development. Then an enigmatic young nanny introduces him to a world he never knew existed.");
      localStorage.setItem("bookN","Not The End Of The World");
      localStorage.setItem("Author:","Kate Atkinson");
      localStorage.setItem("Publication Date:","23/05/2015");
      localStorage.setItem("price",1800);
      localStorage.setItem("dicountP",1260);
      localStorage.setItem("save",540);
      localStorage.setItem("discountPer","30% OFF");
      break;
      case 49:
      localStorage.setItem("aboutStory","This Newbery Honor winner is perfect for fans of To Kill a Mockingbird, The King’s Speech, and The Help. A boy who stutters comes of age in the segregated South, during the summer that changes his life.");
      localStorage.setItem("bookN","One Came Home");
      localStorage.setItem("Author:","Amy timberlake");
      localStorage.setItem("Publication Date:","10/11/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
       case 50:
       localStorage.setItem("aboutStory","The frozen wasteland of Snow World—known as Southern California before an alien invasion decimated civilization—is home to warring steampunk clans. Crankshafts, Imperials, Tinskins, Brineboilers, and many more all battle one another for precious supplies, against ravenous mutant beasts for basic survival, and with the mysterious Founders for their very freedom.");
      localStorage.setItem("bookN","Romulus Buckle");
      localStorage.setItem("Author:","Richard Ellis Preston JR.");
      localStorage.setItem("Publication Date:","21/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 51:
      localStorage.setItem("aboutStory","Life can be filled with challenges, disappointments, and frustrations. Don't be defeated by these things. Meet them head on. Meet them with confidence. Meet them with strength. Meet them with the necessary skills to overcome them. Reach out and grab this wonderful opportunity to change your life for the better. Give yourself the capability to heal yourself, empower yourself, and experience more joy. ");
      localStorage.setItem("bookN","Seed Of Harmony");
      localStorage.setItem("Author:","C.Arthur shuey");
      localStorage.setItem("Publication Date:","12/05/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 52:
      localStorage.setItem("aboutStory","Endric wants only to serve, but he's destined to lead. As the second son of the general of the Denraen, Endric wants only to fight, not the commission his father demands of him. When a strange attack in the south leads to the loss of someone close to him, only Endric seems concerned about what happened. All signs point to an attack on the city, and betrayal by someone deep within the Denraen, but his father no longer trusts his judgment.");
      localStorage.setItem("bookN","Soldier Son");
      localStorage.setItem("Author:","D.K.Holmberg");
      localStorage.setItem("Publication Date:","02/04/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2250);
      localStorage.setItem("save",250);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 53:
      localStorage.setItem("aboutStory","An alternate 1895, A world where Charles Babbage and Ada Lovelace perfected the Difference Engine. Where steam and Tesla-powered computers are everywhere. Where automatons powered by human souls venture out into the sprawling London streets. Where the Ministry, a secretive government agency, seeks to control everything in the name of the Queen.");
      localStorage.setItem("bookN","The Lazarus Machine");
      localStorage.setItem("Author:","Paul Crilley");
      localStorage.setItem("Publication Date:","05/05/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",4000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 54:
      localStorage.setItem("aboutStory","Dr. Evan Knight, a maverick historian and martial arts expert, is on a lifelong quest for the Garden of Eden. He researches it, he paints it, he even dreams about it. One day, while giving a college lecture on the Garden, he recognizes a compelling and beautiful woman from his recurring dream.");
      localStorage.setItem("bookN","The Lost Garden");
      localStorage.setItem("Author:","K.T tomb");
      localStorage.setItem("Publication Date:","12/07/2015");
      localStorage.setItem("price",1499);
      localStorage.setItem("dicountP",1199);
      localStorage.setItem("save",300);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 55:
      localStorage.setItem("aboutStory","After a summer spent trying to prevent a catastrophic war among the Greek gods, Percy Jackson finds his seventh-grade school year unnervingly quiet. His biggest problem is dealing with his new friend, Tyson-a six-foot-three, mentally challenged homeless kid who follows Percy everywhere, making it hard for Percy to have any 'normal' friends.");
      localStorage.setItem("bookN","The Sea Of Monsters");
      localStorage.setItem("Author:","Rick Riordan");
      localStorage.setItem("Publication Date:","17/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 56:
      localStorage.setItem("aboutStory","The Eternal Emperor ruled countless worlds across the galaxy. Vast armies and huge fleets awaited his command. But when he needed a 'little' job done right, he turned to Mantis Team and its small band of militant problem solvers.Just then the Emperor needed to pacify the Wolf Worlds, the planets of an insignificant cluster that had raised space piracy to a low art.");
      localStorage.setItem("bookN","The Wolf Worlds");
      localStorage.setItem("Author:","Chris Bunch");
      localStorage.setItem("Publication Date:","02/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2899);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 57:
      localStorage.setItem("aboutStory","With the help of Anica, Kaelyn and his party finally escape from the managers' monitoring, but Gave's illness is getting more and more serious and he is already on the verge of losing his reason, what's worse, Tobias seems to be infected with the virus, too. The manager's hunt continues, and in the face of such internal and external troubles, the Fallen World Squad is having a tough time. Perhaps because of the too much deception and betrayal along the way, Kaelyn's faith and principles are all changing invisibly,");
      localStorage.setItem("bookN","The Worlds We Make");
      localStorage.setItem("Author:","Megan crewe");
      localStorage.setItem("Publication Date:","12/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 58:
      localStorage.setItem("aboutStory","The Nile, one of the world’s great rivers, has long been an object of fascination and obsession. From Alexander the Great and Nero, to Victorian adventurers David Livingstone, John Hanning Speke, and Henry Morton Stanley, the river has seduced men and led them into wild adventures. English writer, photographer, and explorer Levison Wood is just the latest. His Walking the Nile is a captivating account of a remarkable and unparalleled Nile journey.");
      localStorage.setItem("bookN","Walking The Nile");
      localStorage.setItem("Author:","Levison wood");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price",2000);
      localStorage.setItem("dicountP",800);
      localStorage.setItem("save",1200);
      localStorage.setItem("discountPer","40% OFF");
      break;
      case 59:
      localStorage.setItem("aboutStory","Will Wilder didn’t mean to unlock his otherworldly gift. But that is exactly what happens when Will “borrows” a sacred relic believed to protect the town of Perilous Falls for nearly a century. Even though his intentions are good, the impulsive twelve-year-old unwittingly awakens an ancient evil endangering all of Perilous Falls.");
      localStorage.setItem("bookN","Will Wilder");
      localStorage.setItem("Author:","Raymond arroyo");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price",2000 );
      localStorage.setItem("dicountP",800);
      localStorage.setItem("save",200);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 60:
      localStorage.setItem("aboutStory","Jan Swafford’s biographies of Charles Ives and Johannes Brahms have established him as a revered music historian, capable of bringing his subjects vibrantly to life. His magnificent new biography of Ludwig van Beethoven peels away layers of legend to get to the living, breathing human being who composed some of the world’s most iconic music.");
      localStorage.setItem("bookN","Anguish");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","20/02/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2200);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 61:
      localStorage.setItem("aboutStory","Transylvania 1976 and the vampire Kate Reed is on the set of Francis Ford Coppola’s troubled production of Dracula. Fallen from grace and driven from the British Empire, the Count himself seems long gone. A relic of the past. But when Kate helps a young vampire outcast begin a new life in America, a fresh monster is born. He reinvents himself as Johnny Pop and makes his name selling a dangerously addictive drug that confers vampire powers on its users. As Johnny stalks the streets of Manhattan and Hollywood, sinking his fangs ever deeper into the zeitgeist of 1980s America, it seems the past might not be dead after all…");
      localStorage.setItem("bookN","Anno Dracula");
      localStorage.setItem("Author:","Johnny alucard");
      localStorage.setItem("Publication Date:","15/07/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 62:
      localStorage.setItem("aboutStory","critically acclaimed and widely beloved for her 'Dark' novels, featuring the mesmerizing race of powerful, tormented immortals, the Carpathians. Dark Nights is a special gift to her many loyal fans: a newly expanded and reimagined version of her classic novella, Dark Descent—100 pages longer than the original—combined with her breathtaking and unforgettable short story, Dark Dream.");
      localStorage.setItem("bookN","Dark Creature");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","19/09/2015");
      localStorage.setItem("price",3300);
      localStorage.setItem("dicountP",2541);
      localStorage.setItem("save",759);
      localStorage.setItem("discountPer","23% OFF");
      break;
      case 63:
      localStorage.setItem("aboutStory","Book Three in the Dark Vanishings! On a May afternoon, people awakened to find themselves alone in their towns, their neighbors mysteriously vanished. Those left behind searched for friends and family, hoping to survive. But they were not alone in the world. The spellbinding post-apocalyptic thriller, Dark Vanishings, continues in Episode Three. After being left for dead by a brutal attack");
      localStorage.setItem("bookN","Dark Vanishings");
      localStorage.setItem("Author:","Dan padavona");
      localStorage.setItem("Publication Date:","16/06/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 64:
      localStorage.setItem("aboutStory","Two decades have passed since an inferno swept through Elmbridge High, claiming the lives of three teenagers and causing one student, Carly Johnson, to disappear. The main suspect: Kaitlyn, 'the girl of nowhere.'");
      localStorage.setItem("bookN","Dead House");
      localStorage.setItem("Author:","Dawn surtagice");
      localStorage.setItem("Publication Date:","20/01/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 65:
      localStorage.setItem("aboutStory","Do you believe in ghosts? When doors and windows open on their own, when footsteps echo down an empty hall, when shadows move in the darkness and voices whisper when no one is around...what is going on? These are the experiences that stick with us, frighten us, incite our imaginations, and, ultimately, connect us to the past. Skeptics and believers alike are sure to be captivated by author David J. Schmidt's case study of Point Loma Nazarene University,");
      localStorage.setItem("bookN","Holy Ghosts");
      localStorage.setItem("Author:","David J.Schmidt");
      localStorage.setItem("Publication Date:","13/08/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2000);
      localStorage.setItem("save",500);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 66:
      localStorage.setItem("aboutStory","In Jet Lag, award-winning Magnum photographer Chien-Chi Chang (born 1961) presents succinct black-and-white images of globalized alienation. Planes, beds and flickering screens provide the only continuity; there is little human warmth except the body heat of the passenger in the next seat.");
      localStorage.setItem("bookN","Les Chiens");
      localStorage.setItem("Author:","Allan stratton");
      localStorage.setItem("Publication Date:","15/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 67:
      localStorage.setItem("aboutStory","A old house in Maine that was a haven for evil...It gave Beth the creeps. She couldn't believe they were really moving in. If it weren't for the wooden doll she had found in the closet of her new bedroom, she would have been miserable. But the strange hand-carved figure fascinated her, and she senses with a child's instinct that she had to hide it from her parents.");
      localStorage.setItem("bookN","Night Stone");
      localStorage.setItem("Author:","Rick hautala");
      localStorage.setItem("Publication Date:","18/03/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2200);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 68:
      localStorage.setItem("aboutStory","To prove she's not afraid of where she lives, Piper opens a forbidden door and soon after begins to witness a string of flashbacks--including a love affair between two young servants. Not only did these servants used to live in a set of rooms just down the hall from her bedroom, but they happen to be hiding a deadly secret.");
      localStorage.setItem("bookN","Phobic");
      localStorage.setItem("Author:","Cortney pearson");
      localStorage.setItem("Publication Date:","23/05/2015");
      localStorage.setItem("price",4000);
      localStorage.setItem("dicountP",3600);
      localStorage.setItem("save",400);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 69:
      localStorage.setItem("aboutStory","From her past, from her husband, and from her own secrets. When she turns up alone in the remote mining town of Blackmore asking about Shayna Fowles, the local girl who disappeared, everyone wants to know who Clare really is and what she’s hiding. As it turns out, she’s hiding a lot, including what ties her to Shayna in the first place. But everyone in this place is hiding something—from Jared, Shayna’s secretive ex-husband, to Charlie, the charming small-town drug pusher, to Derek, Shayna’s overly involved family doctor, to Louise and Wilfred, her distraught parents.");
      localStorage.setItem("bookN","Silent Murder");
      localStorage.setItem("Author:","Amy timberlake");
      localStorage.setItem("Publication Date:","10/11/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
       case 70:
       localStorage.setItem("aboutStory","Life on earth began in the sea, and Richard Ellis traces it from the first microbes and fish to jawless, finless creatures that evolved into the 26,000 species alive today including sharks, whales, penguins, dolphins—and humans. Along the way he raises fascinating post-Darwinian questions and answers others. How did life originate? How do animals change from one form into another? Why do some endure and others die out?");
      localStorage.setItem("bookN","Sister");
      localStorage.setItem("Author:","Richard Ellis Preston JR.");
      localStorage.setItem("Publication Date:","21/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 71:
      localStorage.setItem("aboutStory","A Connecticut Yankee in King Arthur's Court, by Mark Twain, is part of the Barnes & Noble Classics series, which offers quality editions at affordable prices to the student and the general reader, including new scholarship, thoughtful design, and pages of carefully crafted extras. Here are some of the remarkable features of Barnes & Noble Classics:");
      localStorage.setItem("bookN","Stephen King");
      localStorage.setItem("Author:","C.Arthur shuey");
      localStorage.setItem("Publication Date:","12/05/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 72:
      localStorage.setItem("aboutStory","Hailed as a masterpiece of realistic fiction and as the most evocative portrayal of the opulent desolation of the American suburbs since it's publication in 1961, Revolutionary Road is the story of Frank and April Wheeler, a bright, beautiful, and talented couple who have lived on the assumption that greatness is only just around the corner. With heartbreaking compassion and remorseless clarity, Richard Yates shows how Frank and April mortgage their spiritual birthright, betraying not only each other, but their best selves");
      localStorage.setItem("bookN","Suicide Games");
      localStorage.setItem("Author:","Richard west");
      localStorage.setItem("Publication Date:","02/04/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2250);
      localStorage.setItem("save",250);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 73:
      localStorage.setItem("aboutStory","A group of rogue soldiers seek shelter from the zombie apocalypse on scenic Plum Island, only to become caught up in a bitter feud between two warring families. Sarge Crocket (Alan Van Sprang) and his motley crew of military abandoners are searching for a safe place to rest when they cross paths with Patrick O'Flynn (Kenneth Welsh). O'Flynn has been banished from Plum Island, where his family is locked in a longtime quarrel with the Muldoons.");
      localStorage.setItem("bookN","Survival Of The Dead");
      localStorage.setItem("Author:","George A. Romero's");
      localStorage.setItem("Publication Date:","05/05/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",4000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 74:
      localStorage.setItem("aboutStory","A young boy puts a gun in his mouth and pulls the trigger. The police don't care&mdash;not about his death or the death of his best friend two months earlier. The dead boy's mom seeks help from an old flame that's employed as a detective. Will the detective's freakish appearance get in the way of uncovering the terrible secrets of these two teenagers? Collects issues #0-#4. ");
      localStorage.setItem("bookN","The Creep");
      localStorage.setItem("Author:","John T. Foster");
      localStorage.setItem("Publication Date:","12/07/2015");
      localStorage.setItem("price",1499);
      localStorage.setItem("dicountP",1199);
      localStorage.setItem("save",300);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 75:
      localStorage.setItem("aboutStory","A beautiful young girl is found savagely attacked in a popular suburban forested area. Talk of a werewolf responsible for the grisly attack is absurd, but people are beginning to believe it. Tony O’Callaghan, Ireland’s most prominent criminal phycologist, must make sense of the inconceivable. And the signature left behind in each increasingly bizarre murder, a ‘lollipop stick’ of sorts with an engraved ice cream flavour to mockingly complement the scene");
      localStorage.setItem("bookN","The Ice Scream Man");
      localStorage.setItem("Author:","J.F Salmon");
      localStorage.setItem("Publication Date:","17/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 76:
      localStorage.setItem("aboutStory","Generations of children and teens have grown up on R.L. Stine's bestselling and hugely popular horror series, Fear Street and Goosebumps. Now, the Fear Street series is back with a chilling new installment, packed with pure nightmare fodder that will scare Stine's avid fan base of teen readers and adults. New student Lizzy Palmer is the talk of Shadyside High. Michael and his girlfriend Pepper befriend her, ");
      localStorage.setItem("bookN","The Lost Girl");
      localStorage.setItem("Author:","R.L.Stine");
      localStorage.setItem("Publication Date:","02/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2899);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 77:
      localStorage.setItem("aboutStory","Being head cheerleader doesn't exactly prepare you for life during the apocalypse, and it's a dangerous learning curve... Sixteen-year-old Jane wakes up to a desperate text from her best friend—the dead are walking around outside her window. Jane's parents are in New York for the weekend, and Jane is completely alone");
      localStorage.setItem("bookN","The Walking Dead");
      localStorage.setItem("Author:","Megan crewe");
      localStorage.setItem("Publication Date:","12/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 78:
      localStorage.setItem("aboutStory","Elena Gilbert has never been an ordinary teenager. In love with the irresistible vampire brothers Stefan and Damon, she has died, been brought back to life, fought evil, and journeyed to hell and back to save Stefan. Now her most dangerous enemy, Klaus, has returned, and Elena realizes she must make a terrible sacrifice to protect her world . . . and fulfill her destiny.");
      localStorage.setItem("bookN","Vampire Diaries");
      localStorage.setItem("Author:","L.J.Smith");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",5000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 79:
      localStorage.setItem("aboutStory","Being a zombie, not so easy. That could have been Dave Connor's six word memoir. 'At first he couldn't remember how he'd ended up in that shallow grave; he just knew it was hell to claw his way out, and that the taste of its dirt would remain in his mouth for the rest of his time on this earth'");
      localStorage.setItem("bookN","Zombie Night");
      localStorage.setItem("Author:","Raymond arroyo");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price",2000);
      localStorage.setItem("dicountP",800);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","40% OFF");
      break;
      case 80:
      localStorage.setItem("aboutStory","The first death looked like a suicide. But someone had tucked a picture of an angel and a handful of white feathers into the banker's pocket before pushing him in front of a train. A killer is stalking The Square Mile―the financial district in London―an avenging angel intent on punishment. But why these victims? What were their sins?");
      localStorage.setItem("bookN","A Killing Of Angels");
      localStorage.setItem("Author:","Kate Rhodes");
      localStorage.setItem("Publication Date:","20/07/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 81:
      localStorage.setItem("aboutStory","The world’s greatest mystery writers on the world’s greatest mystery novels: Michael Connelly on The Little Sister . . . Kathy Reichs on The Silence of the Lambs . . . Mark Billingham on The Maltese Falcon . . . Ian Rankin on I Was Dora Suarez . .");
      localStorage.setItem("bookN","Books To Die For");
      localStorage.setItem("Author:","John Connolly");
      localStorage.setItem("Publication Date:","15/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",4500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 82:
      localStorage.setItem("aboutStory","Once widely considered an impossibility--the stuff of science fiction novels--time travel may finally be achieved in the twenty-first century. In Breaking the Time Barrier, bestselling author Jenny Randles reveals the nature of recent, breakthrough experiments that are turning this fantasy into reality. ");
      localStorage.setItem("bookN","Breaking The Time Barrier");
      localStorage.setItem("Author:","Mike McDerment");
      localStorage.setItem("Publication Date:","19/09/2016");
      localStorage.setItem("price",3300);
      localStorage.setItem("dicountP",2541);
      localStorage.setItem("save",759);
      localStorage.setItem("discountPer","23% OFF");
      break;
      case 83:
      localStorage.setItem("aboutStory","New York City, 1976. Meet Regan and William Hamilton-Sweeney, estranged heirs to one of the city’s great fortunes; Keith and Mercer, the men who, for better or worse, love them; Charlie and Samantha, two suburban teenagers seduced by downtown’s punk scene; an obsessive magazine reporter and his idealistic neighbor—and the detective trying to figure out what any of them have to do with a shooting in Central Park on New Year’s Eve. ");
      localStorage.setItem("bookN","City On Fire");
      localStorage.setItem("Author:","Garth Risk Hallberg");
      localStorage.setItem("Publication Date:","16/06/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 84:
      localStorage.setItem("aboutStory","These previously unpublished, beautifully rendered works of fiction are a testament to Kurt Vonnegut’s unique blend of observation and imagination. Here are stories of men and machines, art and artifice, and how ideals of fortune, fame, and love take curious twists in ordinary lives. An ambitious builder of roads fritters away his free time with miniature trains—until the women in his life crash his fantasy land. Trapped in a stenography pool, a");
      localStorage.setItem("bookN","Short Short Stories");
      localStorage.setItem("Author:","Dave Eggers");
      localStorage.setItem("Publication Date:","20/01/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",1000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 85:
      localStorage.setItem("aboutStory","Provocative, moving, and rich in craft, the stories gathered in Let's Tell This Story Properly represent some of the most original emerging writers in the world. The selected, groundbreaking stories carry on the tradition of the Commonwealth Writers' Prizes. This story is by Kenya's Alexander Ikawah.");
      localStorage.setItem("bookN","Faitma Saleh");
      localStorage.setItem("Author:","Alexander Ikawah");
      localStorage.setItem("Publication Date:","13/08/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2000);
      localStorage.setItem("save",500);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 86:
      localStorage.setItem("aboutStory","Here is a book as joyous and painful, as mysterious and memorable, as childhood itself. I Know Why the Caged Bird Sings captures the longing of lonely children, the brute insult of bigotry, and the wonder of words that can make the world right. Maya Angelou’s debut memoir is a modern American classic beloved worldwide.");
      localStorage.setItem("bookN","I Know Why The Caged Bird Sings");
      localStorage.setItem("Author:","Maya Angelou");
      localStorage.setItem("Publication Date:","15/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 87:
      localStorage.setItem("aboutStory","'There must be more to the Christian life than this--more than church each Sunday and waving to my neighbors and giving some clothes to Goodwill when I go through my closet each spring.' These aren't bad things, of course. But they're safe and comfortable and easy. And there's a reason they're not satisfying your desire for something more significant and meaningful--we're created by God for adventure. International Justice Mission president Gary Haugen has found that engaging in the fight for justice is the most deeply satisfying way of life. This book shows how we too can be a part of God's great expedition.");
      localStorage.setItem("bookN","Just Courage");
      localStorage.setItem("Author:","Gary A.Haugen");
      localStorage.setItem("Publication Date:","18/03/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",5200);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 88:
      localStorage.setItem("aboutStory","In Love Your Life, Not Theirs, Rachel Cruze shines a spotlight on the most damaging money habit we have: comparing ourselves to others. Then she unpacks seven essential money habits for living the life we really want--a life in line with our values, where we can afford the things we want to buy without being buried under debt, stress, and worry.");
      localStorage.setItem("bookN","Love Your Life");
      localStorage.setItem("Author:","Victoria Osteen");
      localStorage.setItem("Publication Date:","23/05/2015");
      localStorage.setItem("price",4000);
      localStorage.setItem("dicountP",3600);
      localStorage.setItem("save",400);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 89:
      localStorage.setItem("aboutStory","Anthony DiNetto has been under Miami-Dade County police surveillance for several months, and authorities fear he's about to unleash a sophisticated criminal scheme to rake in millions. The problem is, they don't know what it is. Celebrated private investigators Claire Caswell and Gaston ''Guy'' Lombard are commissioned to unravel the mystery of his underhanded plan ");
      localStorage.setItem("bookN","Never In Ink");
      localStorage.setItem("Author:","Marilyn Jax");
      localStorage.setItem("Publication Date:","10/11/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
       case 90:
       localStorage.setItem("aboutStory","In No Country for Old Men, Cormac McCarthy simultaneously strips down the American crime novel and broadens its concerns to encompass themes as ancient as the Bible and as bloodily contemporary as this morning’s headlines.");
      localStorage.setItem("bookN","No Country For Old Men");
      localStorage.setItem("Author:","Cormac McCarthy");
      localStorage.setItem("Publication Date:","21/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 91:
      localStorage.setItem("aboutStory","This major collection of 47 new short stories is the second in the acclaimed series from Short Story America. Full of great contemporary stories by established, emerging and new authors, Short Story America gives new life to the tradition of quality short fiction in American and world cultures. James Goertel writes about the series: 'This is a great collection, perhaps the best anthology series of the 21st century.'");
      localStorage.setItem("bookN","Short Story America");
      localStorage.setItem("Author:","T.D Johnston");
      localStorage.setItem("Publication Date:","12/05/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 92:
      localStorage.setItem("aboutStory","“An impressive work of mythic magnitude that may turn out to be Stephen King’s greatest literary achievement” (The Atlanta Journal-Constitution), The Gunslinger is the first volume in the epic Dark Tower Series.");
      localStorage.setItem("bookN","Stephen King");
      localStorage.setItem("Author:","Idris Ilba");
      localStorage.setItem("Publication Date:","02/04/2015");
      localStorage.setItem("price",2500);
      localStorage.setItem("dicountP",2250);
      localStorage.setItem("save",250);
      localStorage.setItem("discountPer","10% OFF");
      break;
      case 93:
      localStorage.setItem("aboutStory","The Accident is perfect for fans of Before I Go to Sleep. Gone Girl and Sophie Hannah A gripping psychological thriller about the deadly. secrets your children can keep ... Sue Jackson has the perfect family but when her teenage daughter Charlotte deliberately steps in front of a bus and ends up in a coma she is forced to face a very dark reality. Retracing her daughter's steps she finds a horrifying entry in Charlotte's diary and is forced to head deep into Charlotte's private world. In her hunt for evidence. Sue begins to mistrust everyone close to her daughter and she's forced to look further.");
      localStorage.setItem("bookN","The Accident");
      localStorage.setItem("Author:","C.L.Taylor");
      localStorage.setItem("Publication Date:","05/05/2014");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",4000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 94:
      localStorage.setItem("aboutStory","When Elise Pepper decides to take a long overdue vacation, she discovers that her Caribbean cruise isn't going to be quite the relaxing trip she'd hoped for.Instead of enjoying a quiet getaway, she finds herself in the middle of a theme party. Who knew there were so many Elvises and Marilyn Monroes in the world?");
      localStorage.setItem("bookN","The Bitter Taste");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","12/07/2015");
      localStorage.setItem("price",1499);
      localStorage.setItem("dicountP",1199);
      localStorage.setItem("save",300);
      localStorage.setItem("discountPer","20% OFF");
      break;
      case 95:
      localStorage.setItem("aboutStory","Three stories, three moments in Melanie Jamison's life. In Edinburgh For as long as Melanie can remember, she's been in love with John Cavannaugh, but their relationship's crashed and burned again. Now she's in Edinburgh with Damian but is she really over John? Until She Comes Melanie moved on with a Swedish actor but the relationship has fallen apart. She's still in love with John and now they're both wondering what it means.");
      localStorage.setItem("bookN","The Melanie chronicles");
      localStorage.setItem("Author:","Kim Golden");
      localStorage.setItem("Publication Date:","17/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3500);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 96:
      localStorage.setItem("aboutStory","This is THE BEST John Muir biography for children, says Jill Harcke, co-producer of the John Muir Tribute CD. Written mostly in the words of Muir, it brims with his spirit and adventures. The text was selected and retold by naturalist Joseph Cornell, author of Sharing Nature with Children, who is well known for his inspiring nature games. The result is a book with an ");
      localStorage.setItem("bookN","The Price Of Dawn");
      localStorage.setItem("Author:","John Green");
      localStorage.setItem("Publication Date:","02/01/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",2899);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 97:
      localStorage.setItem("aboutStory","The renowned biblical scholar, author of The Misunderstood Jew, and general editor for The Jewish Annotated New Testament interweaves history and spiritual analysis to explore Jesus’ most popular teaching parables, exposing their misinterpretations and making them lively and relevant for modern readers.");
      localStorage.setItem("bookN","The Short Short");
      localStorage.setItem("Author:","");
      localStorage.setItem("Publication Date:","12/02/2017");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",3999);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 98:
      localStorage.setItem("aboutStory","Why is there often a difference between what we can do and what we actually do? In what ways can we maximize our potential in those areas of our lives that are important to us? What are the instrumental keys that create that personal success in all our endeavors? That is what this book is all about.");
      localStorage.setItem("bookN","The Winning");
      localStorage.setItem("Author:","Jim Brault");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price","");
      localStorage.setItem("dicountP",5000);
      localStorage.setItem("save","");
      localStorage.setItem("discountPer","");
      break;
      case 99:
      localStorage.setItem("aboutStory","Juliana Buhring had been mired in a dark hole of depression after the death of a man she loved, and when an acquaintance suggested they honor his memory by biking across Canada, she thought, “Canada? Why not the world?” And why not alone.She had never seriously ridden a bicycle before. She had no athletic experience or corporate sponsorship, but with just eight months of preparation, Juliana Buhring departed from Naples, ");
      localStorage.setItem("bookN","This Road I Ride");
      localStorage.setItem("Author:","Juliana Buhring");
      localStorage.setItem("Publication Date:","02/04/2016");
      localStorage.setItem("price",2000);
      localStorage.setItem("dicountP",800);
      localStorage.setItem("save",1200);
      localStorage.setItem("discountPer","40% OFF");
      break;
  } 
   
}
                                                
												//cart quantity display Start
												
var cartImageQuantityDisplay = JSON.parse(localStorage["shoppingCart"]);
var cartQunatityCount = 0;
if(cartImageQuantityDisplay.length === 0) {
} else {
	for(i = 0; i < cartImageQuantityDisplay.length;i++) {
		cartQunatityCount += cartImageQuantityDisplay[i].count;
		document.getElementById("cartEndi").innerHTML = cartQunatityCount;
		document.getElementById("cartEndi").className = "cartShow";
	}
}
												//cart quantity display End
