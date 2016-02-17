// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  pebkac: require("../assets/pebkac_by_zstag.png"),
  ccby: require("../assets/by.svg"),
};

preloader(images);

const theme = createTheme({
  //primary: "#E6DB19"
  primary: "#dcd318"
}, {
  primary: "Archivo Narrow",
  secondary: "VT323"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={250}>
          <Slide bgColor="primary">
            <Heading textFont="secondary" size={1} fit caps lineHeight={0.5} textColor="tertiary">
              Municipi
            </Heading>
            <Heading textFont="secondary" size={1} fit caps lineHeight={1} textColor="secondary">
              i tecnologia
            </Heading>
            <Heading textFont="secondary" size={3} fit caps textColor="secondary">
              On som i futurs possibles
            </Heading>
            <Text textSize="1.7em" margin="20px 0px 0px" bold>Dario Castañé - - @im_dario</Text>
          </Slide>
          <Slide bgColor="#E61919">
            <Heading textFont="secondary" caps fit size={1} textColor="tertiary" lineHeight={1}>
              Advertència
            </Heading>
            <Markdown>
              {`
* **Experiència professional:** > 2006
* **Experiència institucional:** > maig 2015
* **Cada municipi és un món**
* **Don't panic**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              De què parlarem avui?
            </Heading>
            <Markdown>
              {`
* **Problemes tecnològics actuals als nostres municipis**
* **Què podem fer-hi avui per corregir-los?**
* **I quins futurs podem construir?**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="secondary">
            <BlockQuote>
              <Quote>El somnambulisme [...] caracteritza la política tecnològica de l'esquerra, dreta i centre, sent el silenci la seva manera distintiva de parlar.</Quote>
              <Cite>Langdon Winner, 1978</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Problemes actuals
            </Heading>
            <Markdown>
              {`
* **Programari privatiu i formats tancats**
* **Comunicacions, dispositius i infraestructures poc segures**
* **Enginyeria social**
* **Ús pobre de les TIC**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Programari privatiu
            </Heading>
            <Markdown>
              {`
* **Inseguretat:** versions antigues
* **Manca de privacitat**
* **Alt cost econòmic i social**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Formats tancats
            </Heading>
            <Markdown>
              {`
* **Risc de pèrdua d'informació**
* **Submissió al programari privatiu**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Comunicacions, dispositius
            </Heading>
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              i infraestructures insegures
            </Heading>
            <Markdown>
              {`
* **Tot per correu electrònic**
* **Negociacions per WhatsApp**
* **Dispositius mòbils:** desactualitzats de fàbrica
* **Webs amb xifrat feble**: 9 de cada 10 ajuntaments afectats (Sophos, 2015)
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Enginyeria social
            </Heading>
            <Image src={images.pebkac}/>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Ús pobre de les TIC
            </Heading>
            <Markdown>
              {`
* **Després de milions d'euros invertits: 23è al rànking d'e-gov de l'ONU**
* **Dispersió de serveis, redundància i poca reutilització**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="#E61919">
            <Heading textFont="secondary" caps fit size={1} textColor="tertiary">
              Futurs riscos
            </Heading>
            <Markdown>
              {`
* **Smart Cities**
* **Internet of the Things (IoT)**
* **Big Data**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              Què podem fer-hi avui?
            </Heading>
            <Markdown>
              {`
* **Migració a programari lliure**
* **Ús de ormats oberts**: Open Data
* **Més inversió en seguretat TIC**
* **Auditories tècniques externes**
* **Aplicació de pràctiques d'Open Gov**
* **Millor formació als funcionaris**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading textFont="secondary" caps fit size={1} textColor="secondary">
              #PressingAjuntament
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading textFont="secondary" caps fit size={1} textColor="primary">
              Quins futurs podem construir?
            </Heading>
            <Markdown>
              {`
* **Descentralització**
* **1984 de les corporacions**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="secondary">
            <Heading textFont="secondary" size={2} caps fit lineHeight={1} textColor="tertiary">
              Gràcies! APM?
            </Heading>
            <Text textSize="1.7em" margin="20px 0px 10px" bold textColor="primary">Dario Castañé - - i@dario.im - - @im_dario</Text>
            <Image src={images.ccby}/>
            <Text textSize="1.2em" margin="20px 0px 10px" bold textColor="tertiary">Codi font a <Link textColor="primary" href="https://github.com/imdario/sobtec2016">https://github.com/imdario/sobtec2016</Link></Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
