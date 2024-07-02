// src/components/LogoList.jsx
import Acmelogo from '../../../assets/acme.jsx';
import Alphalogo from '../../../assets/alpha.jsx';
import BoltShift from '../../../assets/boltshift.jsx';
import Degreeslogo from '../../../assets/degrees.jsx';
import Byosythanse from '../../../assets/byosythanse.jsx';
import Marquee from '../../../components/Marquee/index.jsx';

const logos = [
  { name: 'Acme', src: Acmelogo },
  { name: 'Alpha', src: Alphalogo },
  { name: 'BoltShift', src: BoltShift },
  { name: 'Degrees', src: Degreeslogo },
  { name: 'Byosythanse', src: Byosythanse },
];

const LogoList = () => {
  return (
    <Marquee>
      {logos.map((logo, index) => (
        <span key={index}>
          <logo.src />
        </span>
      ))}
    </Marquee>
  );
};

export default LogoList;
