export default function initScrollSuave(){
  
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
  
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
  
    //Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  
    section.scrollIntoView({
      block: "start", //end or center
      behavior: "smooth"
    })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })

}
