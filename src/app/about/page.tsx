import "../styling/about.css";
import Image from "next/image";
export default function about() {
  return (
    <>
    <div className='abo_main'>
      <div className='abo_item item1'>
      <Image className="abo_pic" src='/images/faceBimage2-removebg-preview.png' alt='photo' width={500} height={500}/>
      </div>

      <div className='abo_item item2'>
      <p className="text">
        I am a GIAIC student enrolled in courses in Web 3.0, Metaverse, and Artificial Intelligence.
        enthusiastic about technology and always picking up new skills to stay abreast of developments.
      </p>
      </div>
    </div> 
    </>
  )
}
