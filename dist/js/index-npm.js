document.addEventListener('DOMContentLoaded', () => {
    defaultAccordion();
    tooltips();
    alert();
    const alwaysOpenAccordionGroup = document.querySelector('.accordion-group[data-accordion="always-open"]');
    const nestedAccordionGroup = document.querySelector('.accordion-group[data-accordion="nested-accordion"]');
    if (alwaysOpenAccordionGroup) {
        alwaysOpenAccordion(alwaysOpenAccordionGroup);
    }

    if (nestedAccordionGroup) {
        nestedAccordion(nestedAccordionGroup);
    }

});

function defaultAccordion() {
    const accordionGroups = document.querySelectorAll('.accordion-group');

    accordionGroups.forEach(group => {
        const accordionButtons = group.querySelectorAll('.accordion-toggle');

        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const accordion = button.parentElement;
                const content = button.nextElementSibling;
                const isOpen = content.style.maxHeight !== '';

                if (isOpen) {
                    close(button);
                    content.style.maxHeight = '';
                    accordion.classList.remove('active');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    accordion.classList.add('active');
                    const otherButtons = group.querySelectorAll('.accordion-toggle');
                    otherButtons.forEach(otherButton => {
                        if (otherButton !== button) {
                            close(otherButton);
                            const otherContent = otherButton.nextElementSibling;
                            otherContent.style.maxHeight = '';
                        }
                    });
                }
            });

            function close(element) {
                const content = element.nextElementSibling;
                content.style.maxHeight = '';
            }
        });
    });
}

function alwaysOpenAccordion(alwaysOpenAccordionGroup) {
    // Get all accordion headers
    // console.log(alwaysOpenAccordionGroup);
    const accordionHeaders = alwaysOpenAccordionGroup.querySelectorAll('.accordion-toggle');
    const accordion = accordionHeaders.parentElement;
    // Add click event listeners to each accordion header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the visibility of the clicked accordion content
            const accordionContent = header.nextElementSibling;
            accordionContent.classList.toggle('active');

            if (accordionContent.classList.contains('active')) {
                // Calculate the computed height of the accordion content
                const contentHeight = accordionContent.scrollHeight + 'px';

                // Set the initial height of the accordion content to 0
                accordionContent.style.height = '0';

                // Wait for the next frame to apply the new height and trigger the transition
                requestAnimationFrame(() => {
                    accordionContent.style.height = contentHeight;
                });
            } else {
                // Set the height to 0 to trigger the closing transition
                accordionContent.style.height = '0';
            }
        });
    });
}

function nestedAccordion(nestedAccordionGroup) {
    const accordionHeaders = nestedAccordionGroup.querySelectorAll('.accordion-toggle');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {

            header.classList.toggle('active');

            const accordionContent = header.parentNode.querySelector('.accordion-content');

            if (accordionContent.style.maxHeight) {
                // Close the accordion
                accordionContent.style.maxHeight = null;
            } else {
                // Open the accordion
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });
}

function tooltips() {
    
    // Get all tooltip-toggle elements
    const tooltipToggles = document.querySelectorAll('.pd-tooltip-toggle');
    
    // Add scroll event listener to update popover positions
    window.addEventListener('scroll', () => {
        tooltipToggles.forEach((toggle) => {
            // Find the corresponding tooltip-content element
            const tooltipContent = toggle.querySelector('.pd-tooltip-content');
    
            // Calculate the translate value based on the scroll position
            const scrollPosition = window.scrollY;
            const translateValue = `translate(413px, ${scrollPosition}px)`; // Adjust the horizontal position as needed
    
            // Apply the updated translate value to the tooltip-content
            tooltipContent.style.transform = translateValue;
        });
    });
    
    // Add click event listener to each tooltip-toggle element
    tooltipToggles.forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
    
            // Find the corresponding tooltip-content element
            const tooltipContent = toggle.querySelector('.pd-tooltip-content');
    
            // Toggle the visibility of tooltip-content
            tooltipContent.classList.toggle('hidden');
            tooltipContent.classList.toggle('visible');
    
            // Toggle the opacity of tooltip-content
            tooltipContent.classList.toggle('opacity-0');
            tooltipContent.classList.toggle('opacity-100');
        });
    });
}

function alert() {
    const closeIcons = document.querySelectorAll('.close-icon');

    // Attach event listener to each close icon
    closeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Get the parent alert element
            const alert = icon.closest('.bg-red-100');

            // Hide the alert by adding a 'hidden' class
            alert.classList.add('hidden');
        });
    });
}
/*================modal js===============*/
function openModal(modalId) {
    var modal = document.getElementById(modalId);
     var backdrop = document.getElementById('backdrop');
    // var modal_box = document.getElementById('modal-box');
   
    
    if (modal) {
      document.body.classList.add('overflow-hidden');
      modal.classList.remove('hidden');
        setTimeout((function() {
          modal.classList.add('open');
          
       }
       ), 200)
      console.log(modal);
      // slideUp(modal, 3000);
      // Use requestAnimationFrame to ensure CSS changes are applied
      
      // animateSlideDown(modal, window.innerHeight, 0, 300, easeOutCubic);
      backdrop.classList.remove('hidden');
    
    }
  }

function closeModal(modalId) {
  console.log(modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('open')
    document.body.classList.remove('overflow-hidden');
    // modalOpacity = modal.querySelector('.opacity-100');
    // modalOpacity.classList.add('opacity-0')
    // modalOpacity.classList.remove('opacity-100')
  }
  backdrop.classList.add('hidden');
}
// var backdrop = document.getElementById('backdrop');
// backdrop.addEventListener('click', function (event) {
//   if (currentModal) {
//     var modal = document.getElementById(currentModal);
//     if (modal && !modal.contains(event.target)) {
//       closeModal(currentModal);
//     }
//   }
// });
const openModalButtons = document.querySelectorAll('.modal-button');
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-target');
      currentModal = modalId;
      setTimeout(openModal(modalId), 1000);
    });
  });

  // Attach event listeners to close modal buttons
  const closeModalButtons = document.querySelectorAll('.close-modal-button');
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-target');
      currentModal = null;
      closeModal(modalId);
    });
  });

  backdrop.addEventListener("click", function() {
    modal.classList.add("hidden");
backdrop.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
if (e.key === "Escape" && !modal.classList.contains("hidden")) {
closeModal(modalId);
}
});