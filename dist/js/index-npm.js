document.addEventListener('DOMContentLoaded', () => {
    tabs();
    const speeddial = document.querySelector('.speeddial-button');
    const defaultAccordionGroups = document.querySelectorAll('.accordion-group[data-accordion="default-accordion"]');
    const alwaysOpenAccordionGroup = document.querySelector('.accordion-group[data-accordion="always-open-accordion"]');
    const nestedAccordionGroup = document.querySelector('.accordion-group[data-accordion="nested-accordion"]');
    const openModalButtons = document.querySelectorAll('.modal-button');
    const tooltipsButtons = document.querySelectorAll('button[data-tooltip-target]');
    const alertButtons = document.querySelectorAll('[data-dismiss="alert"]');
    const sidebarButtons = document.querySelector('[data-pd-overlay="#docs-sidebar"]');
    const dropdownButtons = document.querySelectorAll('.dropdown-toggle');

    if (dropdownButtons) {
        dropdown();
    }
    if (sidebarButtons) {
        sidebar();
    }
    if (alertButtons) {
        alert();
    }
    if (tooltipsButtons) {
        tooltips();
    }
    if (openModalButtons.length > 0) {
        modal();
    }
    if (speeddial) {
        speedDial();
    }

    if (defaultAccordionGroups) {
        defaultAccordion(defaultAccordionGroups);
    }
    if (alwaysOpenAccordionGroup) {
        alwaysOpenAccordion(alwaysOpenAccordionGroup);
    }
    if (nestedAccordionGroup) {
        nestedAccordion("nested-sub-heading", "nested-sub-body");
        nestedAccordion("nested-accordion-toggle", "nested-accordion-content");
    }

});

// function defaultAccordion() {
//     const accordionGroup = document.querySelector('.accordion-group');
//     console.log(accordionGroup);
//     // accordionGroups.forEach(group => {
//         const accordionButtons = accordionGroup.querySelectorAll('.accordion-toggle');
//             accordionButtons.forEach(button => {
//                 button.addEventListener('click', (event) => {
//                     const accordion = button.parentElement;
//                     const content = button.nextElementSibling;
//                     const maxHeight = content.style.maxHeight;
//                     console.log(maxHeight);
//                     const isOpen = maxHeight !== '' && maxHeight !== '0px';
//                     if (isOpen) {
//                         close(button, accordion);
//                     } else {
//                         openSection(button, content, accordion);
//                     }
//                 });

//                 function close(element, accordion) {
//                     const content = element.nextElementSibling;
//                     content.style.maxHeight = '';
//                     if (accordion) {
//                         accordion.classList.remove('active');
//                     }
//                 }

//                 // Function to open a section
//                 function openSection(button, content, accordion) {
//                     content.style.maxHeight = content.scrollHeight + 'px';
//                     accordion.classList.add('active');
//                     const otherButtons = group.querySelectorAll('.accordion-toggle');
//                     otherButtons.forEach(otherButton => {
//                         if (otherButton !== button) {
//                             close(otherButton, accordion);
//                         }
//                     });
//                 }
//             });
//     // });
// }

function defaultAccordion(defaultAccordionGroups) {
    defaultAccordionGroups.forEach(defaultAccordionGroup => {
        const accordionButtons = defaultAccordionGroup.querySelectorAll('.accordion-toggle');
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
                    accordionButtons.forEach(otherButton => {
                        if (otherButton !== button) {
                            const otherAccordion = otherButton.parentElement;
                            otherAccordion.classList.remove('active');
                            close(otherButton);
                        }
                    });
                }
            });
        });
    });
}


function close(element, accordion) {
    const content = element.nextElementSibling;
    content.style.maxHeight = '';
}

// function alwaysOpenAccordion(alwaysOpenAccordionGroup) {
//     const accordionButtons = alwaysOpenAccordionGroup.querySelectorAll('.accordion-toggle');
//     // Add click event listeners to each accordion header
//     accordionButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             // Toggle the visibility of the clicked accordion content
//             const accordion = button.parentElement;
//             const accordionContent = button.nextElementSibling;

//             if (accordionContent.classList.contains('active')) {
//                 // Calculate the computed height of the accordion content
//                 const contentHeight = accordionContent.scrollHeight + 'px';

//                 // Set the initial height of the accordion content to 0
//                 // accordionContent.style.height = '0';

//                 // Wait for the next frame to apply the new height and trigger the transition
//                 requestAnimationFrame(() => {
//                     accordionContent.style.height = contentHeight;
//                 });
//             } else {
//                 // Set the height to 0 to trigger the closing transition
//                 accordionContent.style.height = '0';
//             }
//         });
//     });
// }

function alwaysOpenAccordion(alwaysOpenAccordionGroup) {
    const accordionButtons = alwaysOpenAccordionGroup.querySelectorAll('.accordion-toggle');
    console.log(accordionButtons.length);
    // var acc = document.getElementsByClassName("acc");
    var i;

    for (i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
            var acc_panel = this.nextElementSibling;

            if (acc_panel.style.maxHeight) {
                acc_panel.style.maxHeight = '';
            } else {
                acc_panel.style.maxHeight = acc_panel.scrollHeight + "px";
            }
        });
    }
}

// below code is for other normal accordion
// function alwaysOpenAccordion(alwaysOpenAccordionGroup) {
//     const accordionButtons = alwaysOpenAccordionGroup.querySelectorAll('.accordion-toggle');

//     // Add click event listeners to each accordion header
//     accordionButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const accordion = button.parentElement;
//             const accordionContent = button.nextElementSibling;

//             if (accordionContent.classList.contains('active')) {
//                 // Close the clicked accordion
//                 accordionContent.style.maxHeight = null; // Reset max-height
//                 accordionContent.classList.remove('active');
//             } else {
//                 // Close any previously opened accordions
//                 const activeAccordions = alwaysOpenAccordionGroup.querySelectorAll('.accordion-content.active');
//                 activeAccordions.forEach(activeAccordion => {
//                     activeAccordion.style.maxHeight = null;
//                     activeAccordion.classList.remove('active');
//                 });

//                 // Open the clicked accordion
//                 accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//                 accordionContent.classList.add('active');
//             }
//         });
//     });
// }

// function nestedAccordion(nestedAccordionGroup) {
//     const accordionHeaders = nestedAccordionGroup.querySelectorAll('.accordion-toggle');
//     accordionHeaders.forEach(header => {
//         header.addEventListener('click', () => {

//             header.classList.toggle('active');

//             const accordionContent = header.parentNode.querySelector('.accordion-content');

//             if (accordionContent.style.maxHeight) {
//                 // Close the accordion
//                 accordionContent.style.maxHeight = null;
//             } else {
//                 // Open the accordion
//                 accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//             }
//         });
//     });
// }

function nestedAccordion(accordionClass, panelClass) {
    var acc = document.getElementsByClassName(accordionClass);
    var panel = document.getElementsByClassName(panelClass);

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        });
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
}

function tooltips() {

    // Get all the buttons with tooltips
    const buttons = document.querySelectorAll('button[data-tooltip-target]');

    // Add event listeners to each button
    buttons.forEach(button => {
        const tooltipId = button.getAttribute('data-tooltip-target');
        const tooltip = document.getElementById(tooltipId);

        button.addEventListener('mouseenter', () => {
            tooltip.classList.remove('invisible');
            tooltip.classList.add('visible');
        });

        button.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
            tooltip.classList.add('invisible');
        });
    });
}

function alert() {
    // Get all the close icons
    const closeIcons = document.querySelectorAll('[data-dismiss="alert"]');
    // Attach event listener to each close icon
    closeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Get the parent alert element
            const alert = icon.closest('[role="alert"]');

            // Hide the alert by adding a 'hidden' class
            alert.classList.add('hidden');
        });
    });
}

function speedDial() {
    const speedDialButton = document.querySelector('.speeddial-button');
    const speedDialMenu = document.querySelector('.speed-dial-menu');

    speedDialButton.addEventListener('mouseenter', () => {
        speedDialMenu.classList.remove('hidden');
    });

    speedDialButton.addEventListener('mouseleave', () => {
        speedDialMenu.classList.add('hidden');
    });

    // Get all the buttons with tooltips
    const buttons = document.querySelectorAll('button[data-tooltip-target]');

    // Add event listeners to each button
    buttons.forEach(button => {
        const tooltipId = button.getAttribute('data-tooltip-target');
        const tooltip = document.getElementById(tooltipId);

        button.addEventListener('mouseenter', () => {
            tooltip.classList.remove('invisible');
            // tooltip.classList.remove('opacity-0');
            tooltip.classList.add('visible');
            // tooltip.classList.add('opacity-100');
        });

        button.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
            // tooltip.classList.remove('opacity-100');
            tooltip.classList.add('invisible');
            // tooltip.classList.add('opacity-0');
        });
    });
}

function tabs() {
    document.addEventListener('click', function (event) {
        // Check if the clicked element has the "tablink" class
        if (event.target.classList.contains('tablink')) {
            var tab = event.target.dataset.tab; // Get the data-tab attribute value
            var tabContainer = event.target.closest('.tabs'); // Find the closest .tabs container
            // Hide all tab content within the current tab container
            var tabcontents = tabContainer.querySelectorAll('.tabcontent');
            for (var i = 0; i < tabcontents.length; i++) {
                tabcontents[i].style.display = 'none';
            }

            // Remove "active" class from all tab links within the current tab container
            var tablinks = tabContainer.querySelectorAll('.tablink');
            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove('active');
            }

            // Show the current tab content and add "active" class to the clicked tab link
            var tabcontent = tabContainer.querySelector('#' + tab);
            tabcontent.style.display = 'block';
            event.target.classList.add('active');
        }
    });
}

function sidebar() {
    const sidebarToggle = document.querySelector('[data-pd-overlay="#docs-sidebar"]');

    // Get the sidebar element
    const sidebar = document.getElementById('docs-sidebar');
    // Add event listener to the document
    document.addEventListener('click', function (event) {
        // Check if the clicked element is the sidebar or a descendant of the sidebar
        if (sidebar && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            closeSidebar();
        }
    });

    if (sidebarToggle) {
        // Add click event listener to the toggle button
        sidebarToggle.addEventListener('click', () => {
            // Toggle the visibility of the sidebar
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('translate-x-0');
            sidebar.classList.toggle('transition-all');
            sidebar.classList.toggle('duration-300');
        });
    }

    // Add event listener to the document
    // document.addEventListener('click', function (event) {
    //     // Check if the clicked element is the sidebar or a descendant of the sidebar
    //         closeSidebar();
    // });
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            // Open the sidebar smoothly after a small delay
            setTimeout(openSidebar, 100);
        });
    }
    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.add('hidden');
    }
}

function modal() {
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        var backdrop = document.getElementById('backdrop');

        if (modal) {
            document.body.classList.add('overflow-hidden');
            modal.classList.remove('hidden');
            // modal.style.display = "";
            setTimeout((function () {
                modal.classList.add('open');
            }
            ), 200)
            backdrop.classList.remove('hidden');
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('open');
            document.body.classList.remove('overflow-hidden');
        }
        backdrop.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

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

    window.onclick = function (event) {
        var modal = document.getElementById(currentModal);
        if (event.target == modal) {
            modal.classList.remove('open');
            modal.classList.add('hidden');
            // modal.style.display = "none";
            var backdrop = document.getElementById('backdrop');
            backdrop.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    }
}

function dropdown(params) {
    var buttons = document.querySelectorAll('.dropdown-toggle');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.getAttribute('data-target');
            var targetDropdown = document.getElementById(targetId);
            // targetDropdown.toggleAttribute();
            if (targetDropdown.classList.contains('hidden')) {
                setTimeout((function () {
                    targetDropdown.classList.add('open');
                }
                ), 200)
                targetDropdown.classList.remove("hidden");
            } else {
                targetDropdown.classList.add("hidden");
            }

        })
    })
}

// function drawer() {
//     document.addEventListener("DOMContentLoaded", function () {
//         const drawerButtons = document.querySelectorAll('.drawer-button');

//         // var showDrawerButton = document.getElementsByClassName("");
//         // var hideDrawerButton = document.querySelector("#drawer-example [data-drawer-hide]");
//         // var getDrawerPosition = showDrawerButton.getAttribute("data-drawer-position")


//         drawerButtons.forEach(drawerButton => {
//             drawerButton.addEventListener('click', function (event) {
//                 var getDrawerPosition = drawerButton.getAttribute("data-drawer-position")
//                 if (getDrawerPosition == 'left') {
//                     var getDrawerId = drawerButton.getAttribute("data-drawer-target")
//                     var drawer = document.getElementById(getDrawerId);
//                     drawer.classList.add("-translate-x-full");
//                     drawer.classList.remove("translate-x-full");

//                     function openDrawer() {
//                         var getDrawerId = drawerButton.getAttribute("data-drawer-target")
//                         var drawer = document.getElementById(getDrawerId);
//                         drawer.classList.remove("-translate-x-full");
//                         drawer.setAttribute("aria-hidden", "false");
//                         drawer.focus();
//                     }

//                     function closeDrawer() {
//                         var getDrawerId = drawerButton.getAttribute("data-drawer-target")
//                         var drawer = document.getElementById(getDrawerId);
//                         drawer.classList.add("-translate-x-full");
//                         drawer.setAttribute("aria-hidden", "true");
//                     }
//                 }
//                 if (getDrawerPosition == 'right') {
//                     // console.log(getDrawerPosition);
//                     var getDrawerId = drawerButton.getAttribute("data-drawer-target")
//                     var drawer = document.getElementById(getDrawerId);
//                     drawer.classList.remove("-translate-x-full");
//                     drawer.classList.add("translate-x-full");

//                     function openDrawer() {
//                         drawer.classList.remove("translate-x-full");
//                         drawer.setAttribute("aria-hidden", "false");
//                         drawer.focus();
//                     }

//                     function closeDrawer() {
//                         drawer.classList.add("translate-x-full");
//                         drawer.setAttribute("aria-hidden", "true");
//                     }
//                 }
//                 if (getDrawerPosition == 'top') {
//                     var getDrawerId = drawerButton.getAttribute("data-drawer-target")
//                     var drawer = document.getElementById(getDrawerId);
//                     drawer.classList.remove("-translate-x-full");
//                     drawer.classList.add("-translate-y-full");

//                     function openDrawer() {
//                         drawer.classList.remove("-translate-y-full");
//                         drawer.setAttribute("aria-hidden", "false");
//                         drawer.focus();
//                     }

//                     function closeDrawer() {
//                         drawer.classList.add("-translate-y-full");
//                         drawer.setAttribute("aria-hidden", "true");
//                     }
//                 }
//                 if (getDrawerPosition == 'bottom') {
//                     var getDrawerId = drawerButton.getAttribute("data-drawer-target")
//                     var drawer = document.getElementById(getDrawerId);
//                     drawer.classList.remove("translate-y-full");
//                     drawer.classList.add("translate-none");

//                     function openDrawer() {
//                         drawer.classList.remove("translate-y-full");
//                         drawer.setAttribute("aria-hidden", "false");
//                         drawer.focus();
//                     }

//                     function closeDrawer() {
//                         drawer.classList.add("translate-y-full");
//                         drawer.setAttribute("aria-hidden", "true");
//                     }
//                 }

//                 drawerButton.addEventListener("click", openDrawer);
//                 console.log(getDrawerId);
//                 document.querySelector("#" + getDrawerId + " [data-drawer-hide]").addEventListener("click", closeDrawer);
//             })
//         })
//     });
// }





    // var showDrawerButton = document.getElementsByClassName("");
    // var hideDrawerButton = document.querySelector("#drawer-example [data-drawer-hide]");
    // var getDrawerPosition = showDrawerButton.getAttribute("data-drawer-position")

function drawer() {
    const drawerButtons = document.querySelectorAll('.drawer-button');
    drawerButtons.forEach(drawerButton => {
        drawerButton.addEventListener('click', function (event) {

            var getDrawerPosition = drawerButton.getAttribute("data-drawer-position")
            if (getDrawerPosition == 'left') {
                var getDrawerId = drawerButton.getAttribute("data-drawer-target")
                var drawer = document.getElementById(getDrawerId);
                drawer.classList.add("-translate-x-full");
                drawer.classList.remove("translate-x-full");

                function openDrawer() {
                    var getDrawerId = drawerButton.getAttribute("data-drawer-target")
                    var drawer = document.getElementById(getDrawerId);
                    drawer.classList.remove("-translate-x-full");
                    drawer.setAttribute("aria-hidden", "false");
                    drawer.focus();
                }

                function closeDrawer() {
                    var getDrawerId = drawerButton.getAttribute("data-drawer-target")
                    var drawer = document.getElementById(getDrawerId);
                    drawer.classList.add("-translate-x-full");
                    drawer.setAttribute("aria-hidden", "true");
                }
            }
            if (getDrawerPosition == 'right') {
                // console.log(getDrawerPosition);
                var getDrawerId = drawerButton.getAttribute("data-drawer-target")
                var drawer = document.getElementById(getDrawerId);
                drawer.classList.remove("-translate-x-full");
                drawer.classList.add("translate-x-full");

                function openDrawer() {
                    drawer.classList.remove("translate-x-full");
                    drawer.setAttribute("aria-hidden", "false");
                    drawer.focus();
                }

                function closeDrawer() {
                    drawer.classList.add("translate-x-full");
                    drawer.setAttribute("aria-hidden", "true");
                }
            }
            if (getDrawerPosition == 'top') {
                var getDrawerId = drawerButton.getAttribute("data-drawer-target")
                var drawer = document.getElementById(getDrawerId);
                drawer.classList.remove("-translate-x-full");
                drawer.classList.add("-translate-y-full");

                function openDrawer() {
                    drawer.classList.remove("-translate-y-full");
                    drawer.setAttribute("aria-hidden", "false");
                    drawer.focus();
                }

                function closeDrawer() {
                    drawer.classList.add("-translate-y-full");
                    drawer.setAttribute("aria-hidden", "true");
                }
            }
            if (getDrawerPosition == 'bottom') {
                var getDrawerId = drawerButton.getAttribute("data-drawer-target")
                var drawer = document.getElementById(getDrawerId);
                drawer.classList.remove("translate-y-full");
                drawer.classList.add("translate-none");

                function openDrawer() {
                    drawer.classList.remove("translate-y-full");
                    drawer.setAttribute("aria-hidden", "false");
                    drawer.focus();
                }

                function closeDrawer() {
                    drawer.classList.add("translate-y-full");
                    drawer.setAttribute("aria-hidden", "true");
                }
            }

            drawerButton.addEventListener("click", openDrawer);
            console.log(getDrawerId);
            document.querySelector("#" + getDrawerId + " [data-drawer-hide]").addEventListener("click", closeDrawer);
        })
    })
}