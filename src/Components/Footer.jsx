import { icons } from "../constants";


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className = "w-full flex flex-row justify-between content-end py-5 px-7 bg-blue-600">
        
        <p className = "font-semibold text-xs">Copyright @{currentYear} recourseNow. All rights reserved.</p>
        <div className  = "flex flex-row items-end gap-2">
          {
            icons.map((icon) => (
              <a key = {icon} href = {icon.url}>
                <img src={icon.src} alt={icon.alt} width={35} />
              </a>
            )

            )
          }
        </div>
            
    </footer>
  )
}

export default Footer