export default function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  
  //Para evitar a repetição de 'ativo'
  const activeClass = 'ativo';

  function activeAccordion(){
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }

  //Verificar se existe
  if (accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}
