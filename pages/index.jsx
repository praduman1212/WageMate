import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const svgs = ['electrician.svg', 'plumber.svg', 'carpenter.svg'];
  const router = useRouter(); 

  // Animation effect for changing images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % svgs.length);
    }, 2000); // Change image every 2 seconds

    
    const totalDuration = svgs.length * 2000; 

    // Redirect to login page after animations are complete
    const timeout = setTimeout(() => {
      router.push('/login'); 
    }, totalDuration);

    // Clear intervals and timeouts when the component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [svgs.length, router]);

  return (
    <div className="bg-[#C4DAD2] flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
      
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="w-12 h-12 animate-slideUpDown overflow-hidden">
            <Image
              src={`/${svgs[currentImage]}`}
              alt="Animated SVG"
              width={50}
              height={50}
              className="object-contain border-none outline-none shadow-none"
              style={{ transform: 'perspective(100px)' }}
            />
          </div>
        </div>

        {/* Logo in the center */}
        <div className="flex justify-center items-center">
          <Image
            src="/wagemate.png"
            alt="Wagemate Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
