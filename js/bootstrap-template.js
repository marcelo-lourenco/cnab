/* global bootstrap: false */

(() => {
  'use strict'

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(toastNode => {
      const toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links and submit buttons
  document.querySelectorAll('[href="#"], [type="submit"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    const { hash } = window.location

    if (hash === '') {
      return
    }

    const link = document.querySelector(`.bd-aside a[href="${hash}"]`)

    if (!link) {
      return
    }

    const active = document.querySelector('.bd-aside .active')
    const parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    const expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})()


document.getElementById('icon-info').addEventListener('click', function () {
  var notificationsContainer = document.getElementById('notificationsContainer');
  notificationsContainer.style.display = notificationsContainer.style.display === 'none' ? 'block' : 'none';
});


document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('options.html')) {
    const icon = document.getElementById('icon-info');
    let blinkCount = 0;
    const maxBlinks = 4;
    const blinkInterval = 1000; // 1 segundo

    const blinkIcon = () => {
      icon.classList.toggle('icon-info-blink');
      blinkCount++;

      if (blinkCount < maxBlinks * 2) {
        setTimeout(blinkIcon, blinkInterval / 2);
      } else {
        icon.classList.remove('icon-info-blink');
      }
    };
    setTimeout(blinkIcon, blinkInterval / 2);
  }
});