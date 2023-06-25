const faqSection = document.getElementsByClassName('faq-container');

for (i=0; i<faqSection.length; i++) {
  faqSection[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}