import TypeWriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import illustration from "../../assets/images/undraw_hello_re_3evm.svg";
import useFetch from "../../hooks/fetch";
import config from "../../config";
import "./Home.css";

const Home = () => {
  const randint = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const [page] = useState(randint(1, 4));
  const { datas, isPending, error } = useFetch(
    `${config.quotesEndpoint}?tags=technology&page=${page}`
  );

  return (
    <div className="home">
      <div className="head">
        <div className="left">
          <h1>A warm welcome for the <span style={{color: "#5a5a5a"}}>new guy</span>!</h1>
          <p className="intro">
            <span style={{ marginRight: "1rem" }}>What inspires you today ?</span>
            <FontAwesomeIcon icon={faMugHot} />
          </p>
          {!isPending && (
            <div className="quote">
              <TypeWriter
                options={{
                  strings: !error
                    ? datas.results
                        .sort((a, b) => randint(-1, 2))
                        .map((obj) => obj.content)
                    : ["Write codes that human can understand."],
                  cursor: "_",
                  cursorClassName: "cursor",
                  wrapperClassName: "typewriter",
                  delay: 100,
                  deleteSpeed: 50,
                  pauseFor: 3000,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          )}
        </div>
        <div className="right"><img src={illustration} alt="welcome illustration" /></div>
      </div>
      <div style={{ 
            textAlign: "justify", 
            fontSize: "1.2rem",
            fontWeight: 'normal',
            fontFamily: 'system-ui'
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus facilis modi quam, iste quod doloribus repudiandae
            vitae eveniet soluta animi culpa quae molestias asperiores? Et
            minima quo ab vitae delectus. Perferendis, voluptatum omnis suscipit
            delectus amet quis minus, tempora consectetur corrupti quidem
            repudiandae ratione sapiente fugiat vel iste eum saepe ipsa.
            Cupiditate facilis repudiandae eveniet nobis iusto odio esse enim?
            At fuga illo facere? Quo officiis fugit facilis, illum corporis
            alias quasi dignissimos placeat beatae delectus modi sequi vero
            maiores sit? Sequi possimus nostrum amet quis temporibus placeat
            vitae pariatur? Molestias quasi mollitia itaque? Consectetur dolor
            explicabo sapiente maxime minima aut dolores, culpa, numquam atque
            deleniti esse porro! Quos magni vitae quia tempora hic, quibusdam
            quo autem perferendis explicabo consequuntur. Incidunt earum, fugit
            nobis, et recusandae nemo nulla dolor laboriosam eum cum eius neque
            adipisci minima deserunt ipsum laudantium ducimus, quo sit
            reprehenderit culpa non? Nihil dicta praesentium iure voluptatibus.
            Ducimus dicta mollitia rem, eligendi earum error eum. Blanditiis,
            placeat vel deleniti adipisci omnis odit, enim commodi fuga harum
            eligendi eveniet? Porro obcaecati, voluptates sapiente rerum
            eligendi officia repellendus qui! Nesciunt, qui vel? Eum, nesciunt
            doloribus id quibusdam optio porro, nemo ipsam quidem doloremque
            recusandae fuga animi nihil eaque, amet consequuntur nulla voluptate
            incidunt molestias aut cupiditate cum dolorum quos! Magnam, quidem!
            Modi aliquid facilis doloribus reiciendis consequuntur voluptates
            esse itaque repudiandae deleniti. Tempore ab alias dignissimos
            culpa? Eligendi voluptatum culpa accusamus amet ipsum iure mollitia
            neque atque, minima placeat. Tempora enim amet quidem, quia quam
            sequi distinctio a, hic quas repudiandae iure nobis maxime similique
            vitae sunt itaque optio minus est deserunt in et delectus.
            Dignissimos error quisquam minima. Molestias deleniti sed fuga ea
            eveniet cumque beatae consectetur aut praesentium. Nemo pariatur,
            nostrum enim, officiis suscipit similique dolorum dolorem, quas
            temporibus corporis fuga ipsam quidem. Perspiciatis provident
            dignissimos dolores? Iusto, ab doloremque libero saepe animi
            architecto tempora, ex, beatae ea temporibus accusamus qui eos odit
            fugiat ullam corrupti veritatis! Quod quasi pariatur, architecto
            iusto illum vel? Nisi, voluptatem. Ducimus! Ratione, amet modi.
            Autem magnam, ipsum nulla error dicta illum officia qui natus
            tempore quasi ea molestias quidem esse. Nemo culpa, impedit modi
            ducimus explicabo unde quibusdam est voluptatibus quis! Obcaecati,
            quos. Quia vitae fugit, aperiam quis tenetur nostrum architecto
            aliquid dolore veritatis impedit magnam perferendis voluptates
            asperiores deleniti laudantium eaque quo quas tempora hic
            reiciendis, perspiciatis consectetur? Vitae, vel. Ab recusandae
            illum dolor at harum quod nihil rem unde sit voluptatibus! Fugit sed
            nemo suscipit sunt quibusdam iste ex, nam expedita, exercitationem
            nobis vitae consectetur architecto rerum doloribus mollitia?
            Dignissimos modi a accusantium deserunt atque, exercitationem
            delectus aspernatur perferendis odio recusandae saepe inventore
            repellat quas ducimus nisi, similique aut quasi aliquid odit ipsam.
            Doloribus vel accusantium veniam suscipit molestias! Deserunt
            aliquam, doloremque quaerat minus pariatur odit minima explicabo,
            architecto modi necessitatibus magni! Ut, reiciendis. Facere fugit
            id, ex, harum officia necessitatibus laboriosam error porro pariatur
            amet nulla recusandae explicabo? Nihil libero saepe at perspiciatis?
            Voluptatibus velit blanditiis aliquam iusto perspiciatis placeat
            earum. Odit natus, quae dolorem illo tempora qui dolores officia,
            nesciunt eos neque, numquam nam veniam eum nemo. Ipsam labore ipsum
            rem maxime cupiditate, placeat commodi voluptates ab ad minima
            dolore distinctio iure veritatis eveniet modi fugit, libero, cum
            nobis. Ipsam vitae natus illo culpa blanditiis, quisquam excepturi.
            Voluptates qui nemo asperiores voluptatum, vero non error? Fugiat
            perferendis voluptas molestias minus incidunt, earum alias
            temporibus quia ut. Dolor, explicabo hic facere officiis eligendi
            quis? Commodi minus et libero. Quisquam, praesentium corrupti?
            Dignissimos, commodi error sapiente tenetur unde sequi molestiae
            porro minima illum explicabo vero voluptatum et provident amet ut
            laboriosam perspiciatis aliquam atque velit non ratione? Libero,
            natus!
          </div>
    </div>
  );
};

export default Home;
