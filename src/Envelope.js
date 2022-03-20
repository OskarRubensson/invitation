import EnvelopeSVG, { EnvelopeSVGBack } from './EnvelopeSVG';
import FoldSVG from './FoldSVG';
import './Envelope.css';

export default function Envelope({children}){
  return (
    <div className="mx-auto container">
      <div className="px-24 md:px-52 overflow-y-hidden">
        <FoldSVG className="relative envelope z-30"/>
        <div className="relative">
          <div className="absolute bg-white z-20 w-full">{children}</div>
        </div>
        <EnvelopeSVGBack className="relative z-10 rolldown" />
        <EnvelopeSVG className="relative -translate-y-full z-30 rolldown" />
      </div>
    </div>
  )
}