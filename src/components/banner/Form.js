import React, { useEffect } from 'react'

export default function Form() {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        script.onload = () => {
          var formsappForm = new window.formsapp('64f677b4f0b17b03a7441533', 'standard', {"width":"100%","height":"500px","opacity":0});
        }
      },[])
  return <div formsappId="64f677b4f0b17b03a7441533"></div>
}
