document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-link').forEach(function (TabsBtn) {
    TabsBtn.addEventListener('click', function(event) {
      let el = this
      el.classList.add("tab-link__active")
      document.querySelectorAll(".tabs-link").forEach(item => {
        if (item != el) {
          item.classList.remove("tab-link__active")
        }
      })
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-work__info_all').forEach(function (TabContent) {
        TabContent.classList.remove('tab-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')
    })
  })
})
